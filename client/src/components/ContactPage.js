import React from 'react';
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

const ContactPage = () => {
    const ContactPageHeading = () => (
        <Container text>
            <div>Wassup!</div>
        </Container>
	);

    return (
		<Container>
			<ContactPageHeading />
		</Container>
	);
};

export default ContactPage;