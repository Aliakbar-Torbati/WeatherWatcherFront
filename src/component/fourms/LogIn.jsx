
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../App";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";

export default function SignUp() {
	const [emailAddress, setEmailAddress] = useState("");
	const [password, setPassword] = useState("");

	const nav = useNavigate();

	const handleLogIn = async (event) => {
		event.preventDefault();
		try{
			await signInWithEmailAndPassword(auth, emailAddress, password);
			console.log('user logged in successfully');
			nav('/dashboard')
		}catch(error){
			console.log(error.message);
			toast.error(error.message, {position:'bottom-center'})
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



