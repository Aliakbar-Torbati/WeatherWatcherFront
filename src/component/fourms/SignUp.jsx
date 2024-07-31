import './LogInStyle.scss'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../App";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth , FirebaseDb } from "../../firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useToken } from "../../context/TokenContext";
import { useAuthen } from "../../context/AuthenContex";


export default function SignUp() {
	const {uuser, setUuser } = useAuthen();
	const { token } = useToken();
	console.log("siginup token", token);

	const [userName, setUserName] = useState("");
	const [emailAddress, setEmailAddress] = useState("");
	const [password, setPassword] = useState("");
	const [repeatPassword, setRepeatPassword] = useState("");
	const [error, setError] = useState("");
	const [city, setCity] = useState('');
	const [coldThreshold, setColdThreshold] = useState('');
	const [hotThreshold, setHotThreshold] = useState('');
	const [notifyRain, setNotifyRain] = useState(false);
	const [time, setTime] = useState('');

	const nav = useNavigate();

	if (uuser){
		nav('/')
	}

	const handleSignup = async (e) => {
		e.preventDefault();
		// Check if passwords match
		if (password !== repeatPassword) {
			alert("Passwords do not match");
			return;
		}
		try{
			await createUserWithEmailAndPassword(auth, emailAddress, password)
			const userToCreate = auth.currentUser;
			console.log("created user: ",userToCreate);
			if (userToCreate){
				await setDoc(doc(FirebaseDb, "users", userToCreate.uid), {
					email: userToCreate.email,
					userName: userName,
					fcmToken: token,
					city: city,
					coldThreshold: coldThreshold,
					hotThreshold: hotThreshold,
					notifyRain: notifyRain,
					time: time
				})
			}
			nav("/");
		} catch (error){
			console.log(error.message);
			toast.error(error.message, {position:'bottom-center'})

		}

		if (user){
			nav('/dashboard')
		}
	};
	return (
		<div className='login-container'>
			<h2>Signup with us</h2>
			<form onSubmit={handleSignup} className="signup-form">
			<input
					type="text"
					value={userName}
					placeholder="user_name"
					onChange={(e) => {
						setUserName(e.target.value);
					}}
					required
				/>
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

				<input
					type="password"
					placeholder="repeat_password"
					value={repeatPassword}
					onChange={(e) => setRepeatPassword(e.target.value)}
					required
				/>
				<footer>
					<button type="submit">Sign Up</button>
				</footer>
				{error ? <h4 className="error-message">{error}</h4> : null}
			</form>
		</div>
	);
}



