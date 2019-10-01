import React from "react";
import { Header, Container, Label } from "semantic-ui-react";
import * as doodle from "../assets/doodlebob.png";

const ShowsContactsOrYikes = ({ shown }) => {
	const noContactsDisplay = (shown) => {
		if (shown.props.children.length === 0)
			return (
				<Header
					size="small"
					style={{ display: "flex", alignItems: "center" }}
				>
					<Label size="big">No contacky-wackies to show here!</Label>
					<img
						src={doodle}
						alt="Doodle Bob, from SpongeBob Squarepants, pointing to 'Yikes, it appears that there are no contacts!'."
					/>
					<Label size="big">Go make some friends!</Label>
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
