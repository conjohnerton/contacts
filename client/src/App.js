import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { Message } from "semantic-ui-react";
import login from "./services/login";
import signup from "./services/signup";
import HomePage from "./components/HomePage";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import "./styles/App.css";

function App() {
	// state hooks
	const [user, setUser] = useState(null);
	const [error, setError] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	// gets user response from given data and sets current user, or sets error message
	const handleLogin = async (event) => {
		event.preventDefault();

		try {
			const user = await login({ email, password });
			setUser(user);
			setEmail("");
			setPassword("");
		} catch (exception) {
			setError("Incorrect login credentials, please try again!");
			setTimeout(() => {
				setError("");
			}, 3000);
		}
	};

	// sends new user info to server and sets current user or sets error message
	const handleSignup = async (event) => {
		event.preventDefault();

		// sends new user info to server and sets current user or sets error message
		try {
			const newUser = await signup({ email, password });
			setUser(newUser);
			setEmail("");
			setPassword("");
		} catch (exception) {
			setError("Could not sign you up, please try again.");
			setTimeout(() => {
				setError("");
			}, 3000);
		}
	};

	return (
		<div className="App">
			{/* renders error message if there is an error message */}
			{error !== "" && <Message negative>{error}</Message>}

			{/* redirects user to login page if they are not signed in */}
			{user === null ? <Redirect to="/login" /> : ""}

			<Route exact path="/" render={() => <HomePage />} />
			<Route
				path="/login"
				render={(props) => (
					<LoginForm
						email={email}
						password={password}
						handleSubmit={handleLogin}
						setEmail={({ target }) => setEmail(target.value)}
						setPassword={({ target }) => setPassword(target.value)}
					/>
				)}
			/>
			<Route
				path="/signup"
				render={(props) => (
					<SignUpForm
						email={email}
						password={password}
						handleSubmit={handleSignup}
						setEmail={({ target }) => setEmail(target.value)}
						setPassword={({ target }) => setPassword(target.value)}
					/>
				)}
			/>
			<Route
				exact
				path="/contacts"
				render={() => (
					<h1>This will show the contacts for the person signed in</h1>
				)}
			/>
			<Route
				exact
				path="/contacts/add"
				render={() => <h1>This will be the add contact page</h1>}
			/>
			<Route
				exact
				path="/contacts/:id"
				render={(props) => <h1>This will show a specific contact</h1>}
			/>
			<Route
				exact
				path="/contacts/:id/edit"
				render={(props) => (
					<h1>This will show a specific contact edit form</h1>
				)}
			/>
		</div>
	);
}

export default App;
