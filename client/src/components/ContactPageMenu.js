import React from "react";
import { Menu, Search } from "semantic-ui-react";

// Menu of the contact page.
const ContactPageMenu = ({ search, setSearch }) => {
	return (
		<Menu
			fluid
			widths={3}
			style={{ boxShadow: "6px 7px 17px 5px rgba(0, 0, 0, 0.15)" }}
		>
			<Menu.Item name="Search">
				<p style={{ paddingRight: ".5em", marginBottom: ".1em" }}>Search</p>
				<Search
					onSearchChange={setSearch}
					value={search}
					showNoResults={false}
					open={false}
				/>
			</Menu.Item>

			<Menu.Item href="/contacts/add" name="Add">
				Add Contact
			</Menu.Item>

			<Menu.Item name="Logout">Log out</Menu.Item>
		</Menu>
	);
};

export default ContactPageMenu;
