import React from "react";
import { Header, Container } from "semantic-ui-react";
import * as doodle from "../assets/doodlebob.png";

const ShowsContactsOrYikes = ({ shown }) => {
	const noContactsDisplay = (shown) => {
		if (shown.props.children.length === 0)
			return (
				<Header size="massive">
					Yikes, it appears that there are no contacts to display!
					<img
						src={doodle}
						alt="Doodle Bob, from SpongeBob Squarepants, pointing to 'Yikes, it appears that there are no contacts!'."
					/>
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

export default ShowsContactsOrYikes;
