
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, FirebaseDb } from "../../firebaseConfig";
import { useAuthen } from "../../context/AuthenContex";
import { doc, getDoc } from 'firebase/firestore';


export default function SignUp() {
	// const { uuser, setUuser } = useAuthen();
	const [emailAddress, setEmailAddress] = useState("");
	const [password, setPassword] = useState("");

	const nav = useNavigate();

	const handleLogIn = async (event) => {
		event.preventDefault();
		try{
			const userCredential =await signInWithEmailAndPassword(auth, emailAddress, password);
			const user = userCredential.user;
            console.log('User logged in successfully:', user);
		    // fetchUserData();
			nav('/dashboard')
		}catch(error){
			console.log(error.message);
			toast.error(error.message, {position:'bottom-center'})
		}
	

		const fetchUserData= async () => {
			auth.onAuthStateChanged(async (user) =>{
				console.log(user);
				const docRef= doc(FirebaseDb, "users", user.uid);
				const fetchedUser= await getDoc (docRef);
				if (fetchedUser.exists()){
					setUserDetail(fetchedUser.data());
					console.log("fetchedUser.data()", fetchedUser.data());
				}else{
					console.log("user is not logged in!");
				}
			})
		}

	};
	return (
		<>
			<h2>LogIn here</h2>
			<form onSubmit={handleLogIn} id="signup-form">
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
					<button type="button" onClick={() => nav("/")}>
						Go back
					</button>
				</footer>
			</form>
		</>
	);
}



