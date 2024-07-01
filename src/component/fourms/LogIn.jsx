
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../App";

export default function SignUp() {
	const [emailAddress, setEmailAddress] = useState("");
	const [password, setPassword] = useState("");

	const nav = useNavigate();

	// const handleSignup = (event) => {
	// 	event.preventDefault();
	// 	// Check if passwords match
	// 	if (password !== repeatPassword) {
	// 		alert("Passwords do not match");
	// 		return;
	// 	}
	// 	const userToCreate = { userName, emailAddress, password};

	// 	axios
	// 		.post(`${API_URL}/register`, userToCreate)
	// 		.then((response) => {
	// 			console.log("new user was created", response.data);
	// 			// nav("/login");
	// 		})
	// 		.catch((err) => {
	// 			console.log("there was an error signing up", err.response.data.message);
	// 			setError(err.response.data.message);
	// 		});
	// };
	return (
		<>
			<h2>LogIn here</h2>
			<form onSubmit={handleSignup} id="signup-form">
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
					<button type="submit">Sign Up</button>
					<button type="button" onClick={() => nav("/")}>
						Go back
					</button>
				</footer>
			</form>
		</>
	);
}



