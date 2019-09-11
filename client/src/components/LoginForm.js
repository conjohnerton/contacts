import React from "react";
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
import contactImg from "../assets/512px_contact_logo.png";

// uses a custom hook to implement form functions
const LoginForm = () => {
	const { inputs, handleSubmit, handleChange } = useForm(login);

	// the function that is called on submit of the form
	function login() {
		console.log(inputs);
	}

	// returns form jsx
	return (
		<Grid
			textAlign="center"
			style={{ height: "100vh" }}
			verticalAlign="middle"
		>
			<Grid.Column style={{ maxWidth: 450 }}>
				<Header as="h2" color="blue" textAlign="center">
					{/* <Image style={{ padding: ".3em" }} src={contactImg} /> */}
					Log-in to your account
				</Header>
				<Form size="large" onSubmit={handleSubmit}>
					<Segment stacked>
						<Form.Input
							fluid
							icon="user"
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

						<Button color="blue" fluid size="large">
							Login
						</Button>
					</Segment>
				</Form>
				<Message>
					New? <a href="#">Sign Up</a>
				</Message>
			</Grid.Column>
		</Grid>
	);
};

export default LoginForm;
