import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import axios from "axios";
import useRequiredForm from "./customHooks/useRequiredForm";
import HomePage from "./components/HomePage";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import "./styles/App.css";
const baseUrl = "http://localhost:3001/";

function App() {
	const loginCallback = async () => {
		const response = await axios.post(`${baseUrl}login`, loginValues);
	};
	const [user, setUser] = useState(null);
	const {
		loginValues,
		handleVerifiedLogin,
		handleLoginChange
	} = useRequiredForm(loginCallback);
	const {
		signUpValues,
		handleVerifiedSignUp,
		handleSignUpChange
	} = useRequiredForm(loginCallback);

	// redirect user if no token is found
	// useEffect(() => {
	// 	<Redirect to="/login" />;
	// }, []);

	return (
		<div className="App">
			<Route exact path="/" render={() => <HomePage />} />
			<Route
				path="/login"
				render={(props) => (
					<LoginForm
						values={loginValues}
						handleVerifiedSubmit={handleVerifiedLogin}
						handleChange={handleLoginChange}
					/>
				)}
			/>
			<Route
				path="/signup"
				render={(props) => (
					<SignUpForm
						values={signUpValues}
						handleVerifiedSubmit={handleVerifiedSignUp}
						handleChange={handleSignUpChange}
						// submitCallback={}
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
