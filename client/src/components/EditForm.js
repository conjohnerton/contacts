import React from "react";
import { Link } from "react-router-dom";
import {
	Button,
	Form,
	Grid,
	Header,
	Message,
	Segment
} from "semantic-ui-react";
import "../styles/Form.css";

const EditForm = (props) => {
	return (
		<Grid
			textAlign="center"
			style={{ height: "100vh" }}
			verticalAlign="middle"
		>
			<Grid.Column style={{ maxWidth: 450 }} className="Form">
				<Header as="h2" color="blue" textAlign="center">
					Create a new contact
				</Header>

				{props.children}

				<Form size="large" onSubmit={props.submitEdit}>
					<Segment stacked>
						<Header textAlign="left" color="black" sub>
							Name
						</Header>
						<Form.Input
							fluid
							icon="wheelchair"
							placeholder="Bo-Bitty-Bob Steggatoxic"
							type="name"
							name="name"
							value={props.contact.name}
							onChange={props.handleContactChange}
						/>

						<Header textAlign="left" color="black" sub>
							Phone Number
						</Header>
						<Form.Input
							fluid
							icon="phone square"
							placeholder="407-412-1234"
							name="number"
							type="text"
							value={props.contact.number}
							onChange={props.handleContactChange}
						/>

						<Header textAlign="left" color="black" sub>
							Special Note
						</Header>
						<Form.Input
							fluid
							icon="sticky note"
							placeholder="Smells just like the retirement home"
							name="note"
							type="text"
							value={props.contact.note}
							onChange={props.handleContactChange}
						/>

						<Button color="blue" fluid size="large">
							Add
						</Button>
					</Segment>
				</Form>
			</Grid.Column>
		</Grid>
	);
};

export default EditForm;
