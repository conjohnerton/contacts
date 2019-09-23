import React, { useState } from "react";
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
	Visibility,
	Label,
	Search
} from "semantic-ui-react";

// Sidebar of the contact page.
const ContactPageMenu = ({ search, setSearch }) => {
	return (
		<Menu fluid widths={3}>
			<Menu.Item name="Search">
				<Header sub style={{ padding: ".5em", paddingBottom: "1px" }}>
					Search
				</Header>
				<Search
					onSearchChange={setSearch}
					value={search}
					showNoResults={false}
				/>
				{/* <input
					placeholder="Search your contacts"
					value={search}
					onChange={setSearch}
				/> */}
			</Menu.Item>

			<Menu.Item name="reviews" onClick={() => ""}>
				Add Contact
			</Menu.Item>

			<Menu.Item name="upcomingEvents" onClick={() => ""}>
				Logout
			</Menu.Item>
		</Menu>
	);
};

const ContactPageHeading = ({ shown }) => {
	const noContactsDisplay = (shown) => {
		if (shown.length === 0)
			return <>Yikes, it appears there are no contacts to display!</>;

		return <>{shown}</>;
	};

	return (
		<Container text>
			<Header
				as="h1"
				color="black"
				content={noContactsDisplay(shown)}
				style={{
					fontSize: "4em",
					fontWeight: "normal",
					marginBottom: 0,
					marginTop: "3em"
				}}
			/>
		</Container>
	);
};

const ContactPage = (props) => {
	const shown = props.contacts.map((contact) => (
		<h2>
			{contact.name} - {contact.number}
		</h2>
	));

	return (
		<Container>
			<ContactPageMenu
				search={props.search}
				setSearch={props.setSearch}
				style={{ boxShadow: "6px 7px 17px 5px rgba(0, 0, 0, 0.38)" }}
			/>
			<Segment
				style={{ boxShadow: "-0px 6px 10px 5px rgba(0, 0, 0, 0.1)" }}
			>
				<ContactPageHeading shown={shown} />
			</Segment>
		</Container>
	);
};

export default ContactPage;
