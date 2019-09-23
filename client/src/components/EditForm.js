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

				<Form size="large">
					<Segment stacked>
						<Header textAlign="left" color="black" sub>
							Name
						</Header>
						<Form.Input
							fluid
							icon="wheelchair"
							iconPosition="right"
							placeholder="Bo-Bitty-Bob Steggatoxic"
							type="name"
							name="name"
							// value={email}
							// onChange={setEmail}
						/>

						<Header textAlign="left" color="black" sub>
							Phone Number
						</Header>
						<Form.Input
							fluid
							icon="phone square"
							iconPosition="right"
							placeholder="407-412-1234"
							name="number"
							type="name"
							// value={password}
							// onChange={setPassword}
						/>

						<Header textAlign="left" color="black" sub>
							Special Note
						</Header>
						<Form.Input
							fluid
							icon="sticky note"
							iconPosition="right"
							placeholder="Smells just like the retirement home"
							name="note"
							type="name"
							// value={password}
							// onChange={setPassword}
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
