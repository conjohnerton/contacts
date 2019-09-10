import React, { Component, useState } from "react";
import {
	Container,
	Menu,
	Item,
	Label,
	Input,
	Grid,
	Sidebar,
	Segment,
	Icon,
	Button,
	Modal,
	Header,
	Image
} from "semantic-ui-react";
import LoginForm from "./components/LoginForm";
import "./styles/App.css";

function App() {
	const [visible, setVisible] = useState(false);
	const [activePage, setActivePage] = useState("home");

	return <div className="App"></div>;
}

export default App;
