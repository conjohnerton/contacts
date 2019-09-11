import React from "react";
import { Link } from "react-router-dom";
import {
	Button,
	Form,
	Grid,
	Header,
	Image,
	Message,
	Segment
} from "semantic-ui-react";
import useForm from "../customHooks/useForm";

// TODO: validate same password entry before submission

const SignUpForm = () => {
	const { values, handleSubmit, handleChange } = useForm(() =>
		console.log(values)
	);

	return (
		<Grid
			textAlign="center"
			style={{ height: "100vh" }}
			verticalAlign="middle"
		>
			<Grid.Column style={{ maxWidth: 450 }}>
				<Header as="h2" color="blue" textAlign="center">
					Create a new account
				</Header>

				<Form size="large" onSubmit={handleSubmit}>
					<Segment stacked>
						<Form.Input
							fluid
							icon="mail"
							iconPosition="left"
							placeholder="E-mail address"
							type="email"
							name="email"
							onChange={handleChange}
						/>
						<Form.Input
							fluid
							icon="lock"
							iconPosition="left"
							placeholder="Password"
							name="password"
							type="password"
							onChange={handleChange}
						/>
						<Form.Input
							fluid
							icon="protect"
							iconPosition="left"
							placeholder="Repeat Password"
							name="passwordVerify"
							type="password"
							onChange={handleChange}
						/>

						<Button color="blue" fluid size="large">
							Login
						</Button>
					</Segment>
				</Form>

				<Message>
					Have an account? <Link to="/login">Log In</Link>
				</Message>
			</Grid.Column>
		</Grid>
	);
};

export default SignUpForm;
