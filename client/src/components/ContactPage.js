import React from "react";
import {
	Container,
	Grid,
	Header,
	Icon,
	Segment,
	Placeholder
} from "semantic-ui-react";
import ContactPageMenu from "./ContactPageMenu";
import ShowsContactsOrYikes from "./ShowContactsOrYikes";
import "../styles/ContactPage.css";

const ContactPage = (props) => {
	const contactCards = (
		<Grid stackable columns={3}>
			{props.contacts.map((data) => (
				<Grid.Column key={data.id}>
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
								onClick={() => props.editContact(data)}
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
								onClick={() => alert("deleted!")}
							/>
						</div>
					</Segment>
				</Grid.Column>
			))}
		</Grid>
	);

	const renderLoadingOrContacts = () => {
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
				logout={props.logout}
				search={props.search}
				setSearch={props.setSearch}
			/>
			{renderLoadingOrContacts()}
		</Container>
	);
};

export default ContactPage;
