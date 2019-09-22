import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { Message } from "semantic-ui-react";
import login from "./services/login";
import signup from "./services/signup";
import HomePage from "./components/HomePage";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import ContactPage from "./components/ContactPage";
import "./styles/App.css";

function App() {
	// state hooks
	const [user, setUser] = useState(null);
	const [contacts, setContacts] = useState({});
	const [error, setError] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	// checks if user has existing token in localStorage and signs user in if so
	useEffect(() => {
		const loggedUserJSON = window.localStorage.getItem("contactAppUser");

		if (loggedUserJSON) {
			const user = JSON.parse(loggedUserJSON);
			setUser(user);
		}
	}, []);

	// gets user response from given data and sets current user, or sets error message
	const handleLogin = async (event) => {
		event.preventDefault();

		if (hasIncompleteInput(email, password)) {
			return;
		}

		try {
			const user = await login({ email, password });

			// saves new user to localStorage
			window.localStorage.setItem("contactAppUser", JSON.stringify(user));

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

		if (hasIncompleteInput(email, password)) {
			return;
		}

		// sends new user info to server and sets current user or sets error message
		try {
			const newUser = await signup({ email, password });

			// saves new user to localStorage
			window.localStorage.setItem("contactAppUser", JSON.stringify(newUser));

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

	const handleLogout = () => {
		window.localStorage.removeItem("contactAppUser");
		setUser(null);
	};

	function hasIncompleteInput(email, password) {
		if (email === "" || password === "") {
			setError("Please enter a username and password");
			setTimeout(() => setError(""), 5000);
			return true;
		}

		return false;
	}

	// renders error message if there is an error message
	const renderError = error !== "" && <Message negative>{error}</Message>;

	return (
		<div className="App">
			{user !== null ? <p>{user.email} logged in!</p> : ""}

			{/* redirects user to login page if they are not signed in */}
<<<<<<< HEAD
			{/* {user === null ? <Redirect to="/login" /> : ""} */}
=======
			{user === null ? <Redirect to="/" /> : ""}

>>>>>>> 0928bfba513d858eaa82e1b0e1a42d92b16c9ee3
			<Route exact path="/" render={() => <HomePage />} />
			<Route
				path="/contact"
				render={(props) => (
					<ContactPage
					/>
				)}
			/>
			<Route
				path="/login"
				render={(props) => (
					<LoginForm
						email={email}
						password={password}
						handleSubmit={handleLogin}
						setEmail={({ target }) => setEmail(target.value)}
						setPassword={({ target }) => setPassword(target.value)}
					>
						{renderError}
					</LoginForm>
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
					>
						{renderError}
					</SignUpForm>
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
