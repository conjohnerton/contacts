import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Route, Redirect } from "react-router-dom";
import { Message } from "semantic-ui-react";
import login from "./services/login";
import signup from "./services/signup";
import addOne from "./services/addOne";
import getContacts from "./services/getContacts";
import HomePage from "./components/HomePage";
import AddForm from "./components/AddForm";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import ContactPage from "./components/ContactPage";
import EditForm from "./components/EditForm";
import "./styles/App.css";

function App(props) {
	// state hooks
	const [user, setUser] = useState(null);
	const [contacts, setContacts] = useState([]);
	const [shownContacts, setShownContacts] = useState([]);
	const [search, setSearch] = useState("");
	const [error, setError] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(true);
	const [contact, setContact] = useState({});

	// checks if user has existing token in localStorage and signs user in if so
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1000);

		async function fetchContacts() {
			const loggedUserJSON = window.localStorage.getItem("contactAppUser");

			try {
				if (loggedUserJSON) {
					const user = JSON.parse(loggedUserJSON);
					const userData = await getContacts(user.token);
					setUser(user);
					setContacts(userData.contacts);
				}
			} catch (err) {
				alert(err);
			}
		}
		fetchContacts();
	}, []);

	// sets shown contacts on search change
	// useEffect(() => {
	// 	setShownContacts(
	// 		contacts.filter((contact) =>
	// 			contact.name.toUpperCase().includes(search.toUpperCase())
	// 		)
	// 	);
	// }, [search]);

	// gets user response from given data and sets current user or sets error message
	const handleLogin = async (event) => {
		event.preventDefault();

		if (hasIncompleteInput(email, password)) {
			return;
		}

		try {
			const user = await login({ email, password });

			// saves new user to localStorage
			window.localStorage.setItem("contactAppUser", JSON.stringify(user));

			setUser(user.user);
			setContacts(user.user.contacts);
			setEmail("");
			setPassword("");
			props.history.push("/contacts");
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
			setContacts([]);
			setEmail("");
			setPassword("");
			props.history.push("/contacts");
		} catch (exception) {
			setError("Could not sign you up, please try again.");
			setTimeout(() => {
				setError("");
			}, 3000);
		}
	};

	// logs user out and removes token from localStorage
	const handleLogout = () => {
		window.localStorage.removeItem("contactAppUser");
		setUser(null);
		setContacts([]);
	};

	const handleContactChange = (event) => {
		event.persist();
		setContact((values) => ({
			...values,
			[event.target.name]: event.target.value
		}));
	};

	const addContact = async () => {
		if (!contact.name) {
			alert("Enter a name!");
			return;
		}

		try {
			const didAddUser = await addOne(contact, user.token);

			if (didAddUser.success) {
				setContacts(contacts.concat(contact));
				setContact({});
				props.history.push("/contacts");
				return;
			}

			props.history.push("/contacts");
			setError("Could not add that contact");
			setTimeout(() => {
				setError("");
			}, 3000);
		} catch (err) {
			setError("Could not add that contact, please try again later.");
			setTimeout(() => {
				setError("");
			}, 3000);
		}
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
			{/* redirects user to login page if they are not signed in */}
			{user === null ? <Redirect to="/" /> : <Redirect to="/contacts" />}

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
				render={(props) => (
					<ContactPage
						search={search}
						setSearch={({ target }) => setSearch(target.value)}
						contacts={contacts}
						loading={loading}
						logout={handleLogout}
					/>
				)}
			/>
			<Route
				exact
				path="/contacts/add"
				render={(props) => (
					<AddForm
						contact={contact}
						setContact={setContact}
						handleContactChange={handleContactChange}
						addContact={addContact}
					/>
				)}
			/>
			<Route
				exact
				path="/contacts/:id/edit"
				render={(props) => <EditForm />}
			/>
		</div>
	);
}

export default withRouter(App);
