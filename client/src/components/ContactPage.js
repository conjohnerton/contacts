import React from 'react';
import { Link } from "react-router-dom";
import {
	Button,
	Container,
	Sidebar,
	Image,
	Grid,
	Header,
	Icon,
	List,
	Menu,
	Responsive,
	Segment,
	Visibility
} from "semantic-ui-react";

const doNothing = () => {
	console.log("Hey, you did it!");
};

const ContactPageSidebar = () => {
	const 

	<SidebarPushable>
		<Sidebar as={Menu}>
			<MenuItem>
				<form>
					<input
					value={}
					onChange={}
					/>
				</form>
			</MenuItem>
			<MenuItem>
			</MenuItem>
			<MenuItem>
			</MenuItem>
		</Sidebar>
	</SidebarPushable>
};

const HomepageHeading = () => (
	<Container text>
		<Header
			as="h1"
			color="grey"
			content="Where Are My Contacts?"
			inverted
			style={{
				fontSize: "4em",
				fontWeight: "normal",
				marginBottom: 0,
				marginTop: "3em"
			}}
		/>
		<Header
			as="h2"
			color="grey"
			content="A contact manager... for your grandma!"
			inverted
			style={{
				fontSize: "1.7em",
				fontWeight: "normal",
				marginTop: "1.5em"
			}}
		/>

		<Link to="/signup">
			<Button primary size="huge">
				Get Started
				<Icon name="right arrow" />
			</Button>
		</Link>
	</Container>
);

const ContactPage = () => {
    const ContactPageHeading = () => (
        <Container text>
            <div>Wassup!</div>
        </Container>
	);

    return (
		<Container>
			<ContactPageHeading />
			<HomepageHeading />
		</Container>
	);
};

export default ContactPage;