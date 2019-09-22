import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {
	Button,
	Container,
	Grid,
	Header,
	Icon,
	Image,
	List,
	Menu,
	Responsive,
	Segment,
	Sidebar,
	Visibility
} from "semantic-ui-react";

// Dummy test!
const doNothing = () => {
	console.log("Hey, you did it!");
};

// Sidebar of the contact page.
const ContactPageSidebar = () => {
	const [search, setSearch] = useState('');

	// Updates search value with each keystroke on the contact search bar.
	const handleSearchChange = (event) => {
		if (event)
		{
			event.preventDefault();
			console.log(event.log.value);
			setSearch(event.target.value);
		}
	};

	return (
			<Sidebar.Pushable as={Segment} style={{minHeight: "100vh"}}>
				<Sidebar 
					as={Menu}
					animation='overlay'
					icon='labeled'
					width="wide"
					visible={true}
					vertical
					inverted
					page
				>
					<Menu.Item as="a">
						<Icon name="Search" />
						<form>
							<input
							value={search}
							onChange={handleSearchChange}
							/>
							  Search for a contact here!
						</form>
					</Menu.Item>
					<Menu.Item as="a">
						<Icon name="Search" />
						Misc.
					</Menu.Item>
					<Menu.Item as="a">
						<Icon name="Logout" />
						Logout
						<Icon />
					</Menu.Item>
				</Sidebar>

				<Sidebar.Pusher>
					<Segment>
						<Header></Header>
					</Segment>
				</Sidebar.Pusher>
			</Sidebar.Pushable>
	);
};

const HomepageHeading = () => (
	<Container text>
		<Header
			as="h1"
			color="purple"
			content="Behold, your contacts!"
			inverted
			style={{
				fontSize: "4em",
				fontWeight: "normal",
				marginBottom: 0,
				marginTop: "3em"
			}}	
		/>
		<div>
			<Link to="/signup">
			<Button primary size="huge">
				Get Started Tomorrow...
				<Icon name="right arrow" />
			</Button>
		</Link>
		</div>
	</Container>
);

const ContactPage = () => {

    return (
		<Container>
			<ContactPageSidebar />
			<HomepageHeading />
		</Container>
	);
};

{/* <form>
							<input
							value={search}
							onChange={handleSearchChange}
							/>
							  Search for a contact here!
						</form> */}

export default ContactPage;