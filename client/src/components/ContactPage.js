import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
	Button,
	Container,
	Grid,
	Header,
	Icon,
	Image,
	List,
	Label,
	Menu,
	Responsive,
	Segment,
	Sidebar,
	Visibility,
	Dimmer,
	Search,
	Loader
} from "semantic-ui-react";
import * as doodle from "../assets/doodlebob.png";

// Sidebar of the contact page.
const ContactPageMenu = ({ search, setSearch }) => {
	return (
		<Menu fluid widths={3}>
			<Menu.Item name="Search">
				{/* <Header sub style={{ padding: ".5em", paddingBottom: "1px" }}> */}
				<p style={{ paddingRight: ".5em", marginBottom: ".1em" }}>Search</p>
				{/* </Header> */}
				<Search
					onSearchChange={setSearch}
					value={search}
					showNoResults={false}
					open={false}
				/>
			</Menu.Item>

			<Menu.Item name="Add" onClick={() => ""}>
				<Link to="/contacts/add">Add Contact</Link>
			</Menu.Item>

			<Menu.Item name="Logout" onClick={() => ""}>
				Logout
			</Menu.Item>
		</Menu>
	);
};

const ContactPageHeading = ({ shown }) => {
	const noContactsDisplay = (shown) => {
		if (shown.length === 0)
			return (
				<Label size="massive">
					Yikes, it appears there are no contacts to display!
					<img src={doodle} />
				</Label>
			);

		return <>{shown}</>;
	};

	return (
		<Container text>
			<Header
				color="black"
				content={noContactsDisplay(shown)}
				style={{
					fontSize: "4em",
					fontWeight: "normal",
					marginBottom: 0
					// marginTop: "3em"
				}}
			/>
		</Container>
	);
};

const ContactPage = (props) => {
	const shown = props.contacts.map((contact) => (
		<Segment>
			<Label>
				{contact.name} - {contact.number}
			</Label>
			<Icon
				style={{
					float: "right",
					borderRadius: "10px",
					marginTop: "1em"
				}}
				bordered
				inverted
				color="pink"
				name="trash alternate"
				size="large"
			></Icon>
			<Icon
				style={{
					float: "right",
					borderRadius: "10px",
					marginTop: "1em"
				}}
				bordered
				inverted
				color="purple"
				name="edit"
				size="large"
			></Icon>
		</Segment>
	));

	const loadOrShow = () => {
		if (!props.loading) {
			return (
				<Segment
					style={{
						boxShadow: "-0px 6px 10px 5px rgba(0, 0, 0, 0.1)"
					}}
				>
					<ContactPageHeading shown={shown} />
				</Segment>
			);
		}

		return (
			<Segment
				style={{
					boxShadow: "-0px 6px 10px 5px rgba(0, 0, 0, 0.1)",
					minHeight: "50vh"
				}}
			>
				<Loader active />
			</Segment>
		);
	};

	return (
		<Container>
			<ContactPageMenu
				search={props.search}
				setSearch={props.setSearch}
				style={{ boxShadow: "6px 7px 17px 5px rgba(0, 0, 0, 0.38)" }}
			/>
			{loadOrShow()}
		</Container>
	);
};

export default ContactPage;
