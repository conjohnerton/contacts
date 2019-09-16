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

const LoginForm = ({
	children,
	email,
	password,
	handleSubmit,
	setEmail,
	setPassword
}) => {
	return (
		<Grid
			textAlign="center"
			style={{ height: "100vh" }}
			verticalAlign="middle"
		>
			<Grid.Column style={{ maxWidth: 450 }} className="Form">
				<Header as="h2" color="blue" textAlign="center">
					Log-in to your account
				</Header>

				{/* display error message */}
				{children}

				<Form size="large" onSubmit={handleSubmit}>
					<Segment stacked>
						<Header textAlign="left" color="black" sub>
							Email
						</Header>
						<Form.Input
							fluid
							icon="user"
							iconPosition="left"
							placeholder="E-mail address"
							type="email"
							name="email"
							value={email}
							onChange={setEmail}
						/>

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
							value={password}
							onChange={setPassword}
						/>

						<Button color="blue" fluid size="large">
							Login
						</Button>
					</Segment>
				</Form>

				<Message>
					New? <Link to="/signup">Sign Up</Link>
				</Message>
			</Grid.Column>
		</Grid>
	);
};

export default LoginForm;
