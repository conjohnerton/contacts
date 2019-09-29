import React from "react";
import { Route } from "react-router-dom";
import { Menu, Search } from "semantic-ui-react";

const ContactPageMenu = ({ search, setSearch, logout, history }) => {
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

			<Route
				render={({ history }) => (
					<Menu.Item
						name="Add"
						link
						onClick={() => history.push("/contacts/add")}
					>
						Add Contact
					</Menu.Item>
				)}
			/>

			<Menu.Item name="Logout" link onClick={() => logout()}>
				Log out
			</Menu.Item>
		</Menu>
	);
};

export default ContactPageMenu;
