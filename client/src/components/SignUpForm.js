import React, { useState } from "react";
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
import "../styles/Form.css";
import useForm from "../customHooks/useForm";

const SignUpForm = () => {
	const { values, handleSubmit, handleChange } = useForm(() =>
		console.log(values)
	);
	const [err, setErr] = useState(false);

	// checks if passwords match and submits, if not generates a warning message
	const checkPasswordMatch = (event) => {
		if (values.password !== values.passwordVerify) {
			// sets err to render the message
			setErr(true);
			return;
		}

		handleSubmit(event);
	};

	return (
		<Grid
			textAlign="center"
			style={{ height: "100vh" }}
			verticalAlign="middle"
		>
			<Grid.Column style={{ maxWidth: 450 }} className="Form">
				<Header as="h2" color="blue" textAlign="center">
					Create a new account
				</Header>

				<Form size="large" onSubmit={checkPasswordMatch}>
					<Segment stacked>
						<Header textAlign="left" color="black" sub>
							Email
						</Header>
						<Form.Input
							fluid
							icon="mail"
							iconPosition="left"
							placeholder="E-mail address"
							type="email"
							name="email"
							onChange={handleChange}
						/>
						{/* err renders only on password mismatch */}
						{err ? (
							<Message
								negative
								content="The input passwords do not match"
							/>
						) : (
							""
						)}
						<Header textAlign="left" color="black" sub>
							Password
						</Header>
						<Form.Input
							fluid
							icon="lock"
							iconPosition="left"
							placeholder="Password"
							name="password"
							type="password"
							onChange={handleChange}
							error={err}
						/>
						<Header textAlign="left" color="black" sub>
							Repeat Password
						</Header>
						<Form.Input
							fluid
							icon="protect"
							iconPosition="left"
							placeholder="Verify Password"
							name="passwordVerify"
							type="password"
							onChange={handleChange}
							error={err}
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
