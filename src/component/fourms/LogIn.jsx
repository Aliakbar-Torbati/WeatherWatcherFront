import './LogInStyle.scss';
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, FirebaseDb } from "../../firebaseConfig";
import { useAuthen } from "../../context/AuthenContex";
import { doc, getDoc } from 'firebase/firestore';
import Alert from '../alertMessage/Alert';

export default function LoggIn() {
  const { uuser, setUuser } = useAuthen();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    if (uuser) {
		setTimeout(() => {
			nav('/');
		  }, 3000);
    }
  }, [uuser, nav]);

  const handleLogIn = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, emailAddress, password);
      const user = userCredential.user;
      console.log('User logged in successfully');
      console.log('user id', user.uid);
      await fetchUserData(user.uid);
      setAlertMessage("You Logged in successfully!");
      setShowAlert(true);
	  console.log('showAlert',showAlert);

	  setTimeout(() => {
        nav('/');
      }, 3000);
	  
    } catch (error) {
      console.log(error.message);
      setAlertMessage("Failed to log in.");
      setShowAlert(true);
      console.log('showAlert after login failure:', showAlert);
    }
  };

  const fetchUserData = async (userId) => {
    try {
      const docRef = doc(FirebaseDb, "users", userId);
      const fetchedUser = await getDoc(docRef);
      if (fetchedUser.exists()) {
        setUuser(fetchedUser.data());
        console.log("fetchedUser.data()", fetchedUser.data());
      } else {
        console.log("user data not found!");
      }
    } catch (error) {
      console.error("error while fetching user data:", error);
    }
  };

  useEffect(() => {
    if (showAlert) {
	  console.log('showAlert',showAlert);
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 2000);
      return () => clearTimeout(timer);

    }
  }, [showAlert]);

  useEffect(() => {
    console.log('showAlert changed:', showAlert);
  }, [showAlert]);

  return (
    <div className='login-container'>
      {showAlert && <Alert message={alertMessage} />}
      <h2>Login here</h2>
      <form onSubmit={handleLogIn} className="signup-form">
        <input
          type="email"
          placeholder="email"
          value={emailAddress}
          onChange={(e) => {
            setEmailAddress(e.target.value);
          }}
          required
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        />
        <footer>
          <button type="submit">Log In</button>
        </footer>
        <p>If you don't have an account, you can simply <Link to="/signup">register form here !</Link></p>
      </form>
    </div>
  );
}
