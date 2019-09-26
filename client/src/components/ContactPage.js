import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
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
	Placeholder,
	Modal,
	Search,
	Loader
} from "semantic-ui-react";
import "../styles/ContactPage.css";
import * as doodle from "../assets/doodlebob.png";

// Menu of the contact page.
const ContactPageMenu = ({ search, setSearch }) => {
	return (
		<Menu fluid widths={3}>
			<Menu.Item name="Search">
				<p style={{ paddingRight: ".5em", marginBottom: ".1em" }}>Search</p>
				<Search
					onSearchChange={setSearch}
					value={search}
					showNoResults={false}
					open={false}
				/>
			</Menu.Item>

			<Menu.Item href="/contacts/add" name="Add">
				Add Contact
			</Menu.Item>

			<Menu.Item name="Logout">Log out</Menu.Item>
		</Menu>
	);
};

const ShowsContactsOrYikes = ({ shown }) => {
	const noContactsDisplay = (shown) => {
		if (shown.length === 0)
			return (
				<Header size="massive">
					Yikes, it appears there are no contacts to display!
					<img src={doodle} />
				</Header>
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
				}}
			/>
		</Container>
	);
};

const ContactPage = (props) => {
	const contactCards = (
		<Grid stackable columns={3}>
			{props.contacts.map((data) => (
				<Grid.Column key={data.number}>
					<Segment
						color="purple"
						style={{ borderRadius: "10px" }}
						className={"Card"}
						stacked
					>
						<Header block>{data.name}</Header>
						<Header size="tiny" sub>
							{data.number}
						</Header>
						<div className={"Icon"}>
							<Icon
								style={{
									float: "right",
									borderRadius: "10px",
									marginTop: "1em",
									paddingRight: "10px"
								}}
								link
								circular
								inverted
								color="pink"
								name="pencil"
							/>
							<Icon
								style={{
									float: "right",
									borderRadius: "10px",
									marginTop: "1em"
								}}
								link
								circular
								inverted
								color="purple"
								name="trash alternate"
							/>
						</div>
					</Segment>
				</Grid.Column>
			))}
		</Grid>
	);

	const loadOrShow = () => {
		if (!props.loading) {
			return (
				<Segment
					style={{
						boxShadow: "-0px 6px 10px 5px rgba(0, 0, 0, 0.1)",
						display: "flex",
						overflow: "auto"
					}}
				>
					<ShowsContactsOrYikes shown={contactCards} />
				</Segment>
			);
		}

		return (
			<Segment
				style={{
					boxShadow: "-0px 6px 10px 5px rgba(0, 0, 0, 0.1)",
					overflow: "auto"
				}}
			>
				<Placeholder fluid>
					<Placeholder.Header>
						<Placeholder.Line />
						<Placeholder.Line />
					</Placeholder.Header>
					<Placeholder.Paragraph>
						<Placeholder.Line />
						<Placeholder.Line />
						<Placeholder.Line />
						<Placeholder.Line />
					</Placeholder.Paragraph>
					<Placeholder.Header>
						<Placeholder.Line />
						<Placeholder.Line />
					</Placeholder.Header>
					<Placeholder.Paragraph>
						<Placeholder.Line />
						<Placeholder.Line />
						<Placeholder.Line />
						<Placeholder.Line />
					</Placeholder.Paragraph>
					<Placeholder.Header>
						<Placeholder.Line />
						<Placeholder.Line />
					</Placeholder.Header>
					<Placeholder.Paragraph>
						<Placeholder.Line />
						<Placeholder.Line />
						<Placeholder.Line />
						<Placeholder.Line />
					</Placeholder.Paragraph>
				</Placeholder>
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
