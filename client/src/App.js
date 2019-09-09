import React, { Component, useState } from "react";
import {
	Container,
	Menu,
	Item,
	Label,
	Input,
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

class MenuExampleVertical extends Component {
	state = { activeItem: "inbox" };

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

	render() {
		const { activeItem } = this.state;

		return (
			<Menu vertical>
				<Menu.Item
					name="inbox"
					active={activeItem === "inbox"}
					onClick={this.handleItemClick}
				>
					<Label color="teal">1</Label>
					Inbox
				</Menu.Item>

				<Menu.Item
					name="spam"
					active={activeItem === "spam"}
					onClick={this.handleItemClick}
				>
					<Label>51</Label>
					Spam
				</Menu.Item>

				<Menu.Item
					name="updates"
					active={activeItem === "updates"}
					onClick={this.handleItemClick}
				>
					<Label>1</Label>
					Updates
				</Menu.Item>
				<Menu.Item>
					<Input icon="search" placeholder="Search mail..." />
				</Menu.Item>
			</Menu>
		);
	}
}

function App() {
	const [visible, setVisible] = useState(false);

	return (
		<div className="App">
			<Container>
				<MenuExampleVertical />
				<Menu>
					<Item>One</Item>
					<Item>Two</Item>
					<Item>Three</Item>
				</Menu>
			</Container>
		</div>
	);
}

export default App;
