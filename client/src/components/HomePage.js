import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
	Button,
	Container,
	Divider,
	Grid,
	Header,
	Icon,
	Image,
	List,
	Menu,
	Responsive,
	Segment,
	Sidebar,
	Visibility
} from "semantic-ui-react";

// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
	const isSSR = typeof window === "undefined";

	return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => (
	<Container text>
		<Header
			as="h1"
			content="Contax"
			inverted
			style={{
				fontSize: mobile ? "2em" : "4em",
				fontWeight: "normal",
				marginBottom: 0,
				marginTop: mobile ? "1.5em" : "3em"
			}}
		/>
		<Header
			as="h2"
			content="Forget your relationships... We will remember them for you."
			inverted
			style={{
				fontSize: mobile ? "1.5em" : "1.7em",
				fontWeight: "normal",
				marginTop: mobile ? "0.5em" : "1.5em"
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

HomepageHeading.propTypes = {
	mobile: PropTypes.bool
};

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
	state = {};

	hideFixedMenu = () => this.setState({ fixed: false });
	showFixedMenu = () => this.setState({ fixed: true });

	render() {
		const { children } = this.props;
		const { fixed } = this.state;

		return (
			<Responsive
				getWidth={getWidth}
				minWidth={Responsive.onlyTablet.minWidth}
			>
				<Visibility
					once={false}
					onBottomPassed={this.showFixedMenu}
					onBottomPassedReverse={this.hideFixedMenu}
				>
					<Segment
						inverted
						textAlign="center"
						style={{ minHeight: 700, padding: "1em 0em" }}
						vertical
					>
						<Menu
							fixed={fixed ? "top" : null}
							inverted={!fixed}
							pointing={!fixed}
							secondary={!fixed}
							size="large"
						>
							<Container>
								<Menu.Item>Contax</Menu.Item>
								<Menu.Item position="right">
									<Link to="/login">
										<Button as="a" inverted={!fixed}>
											Log in
										</Button>
									</Link>
									<Link to="/signup">
										<Button
											as="a"
											inverted={!fixed}
											primary={fixed}
											style={{ marginLeft: "0.5em" }}
										>
											Sign Up
										</Button>
									</Link>
								</Menu.Item>
							</Container>
						</Menu>
						<HomepageHeading />
					</Segment>
				</Visibility>

				{children}
			</Responsive>
		);
	}
}

DesktopContainer.propTypes = {
	children: PropTypes.node
};

// class MobileContainer extends Component {
// 	state = {};

// 	handleSidebarHide = () => this.setState({ sidebarOpened: false });

// 	handleToggle = () => this.setState({ sidebarOpened: true });

// 	render() {
// 		const { children } = this.props;
// 		const { sidebarOpened } = this.state;

// 		return (
// 			<Responsive
// 				as={Sidebar.Pushable}
// 				getWidth={getWidth}
// 				maxWidth={Responsive.onlyMobile.maxWidth}
// 			>
// 				<Sidebar
// 					as={Menu}
// 					animation="push"
// 					inverted
// 					onHide={this.handleSidebarHide}
// 					vertical
// 					visible={sidebarOpened}
// 				>
// 					<Menu.Item as="a" active>
// 						Home
// 					</Menu.Item>
// 					<Menu.Item as="a">Work</Menu.Item>
// 					<Menu.Item as="a">Company</Menu.Item>
// 					<Menu.Item as="a">Careers</Menu.Item>
// 					<Menu.Item as="a">Log in</Menu.Item>
// 					<Menu.Item as="a">Sign Up</Menu.Item>
// 				</Sidebar>

// 				<Sidebar.Pusher dimmed={sidebarOpened}>
// 					<Segment
// 						inverted
// 						textAlign="center"
// 						style={{ minHeight: 350, padding: "1em 0em" }}
// 						vertical
// 					>
// 						<Container>
// 							<Menu inverted pointing secondary size="large">
// 								<Menu.Item onClick={this.handleToggle}>
// 									<Icon name="sidebar" />
// 								</Menu.Item>
// 								<Menu.Item position="right">
// 									<Button as="a" inverted>
// 										Log in
// 									</Button>
// 									<Button
// 										as="a"
// 										inverted
// 										style={{ marginLeft: "0.5em" }}
// 									>
// 										Sign Up
// 									</Button>
// 								</Menu.Item>
// 							</Menu>
// 						</Container>
// 						<HomepageHeading mobile />
// 					</Segment>

// 					{children}
// 				</Sidebar.Pusher>
// 			</Responsive>
// 		);
// 	}
// }

// MobileContainer.propTypes = {
// 	children: PropTypes.node
// };

const ResponsiveContainer = ({ children }) => (
	<div>
		<DesktopContainer>{children}</DesktopContainer>
		{/* <MobileContainer>{children}</MobileContainer> */}
	</div>
);

ResponsiveContainer.propTypes = {
	children: PropTypes.node
};

const HomePage = () => (
	<ResponsiveContainer>
		<Segment style={{ padding: "8em 0em" }} vertical>
			<Grid container stackable verticalAlign="middle">
				<Grid.Row>
					<Grid.Column width={8}>
						<Header as="h3" style={{ fontSize: "2em" }}>
							We Help Companies and Clients
						</Header>
						<p style={{ fontSize: "1.33em" }}>
							by giving them superpowers to do things that they never
							thought possible. Let us delight your customers and empower
							your needs... through pure conctact management!
						</p>
					</Grid.Column>
					<Grid.Column width={8} textAlign="right">
						<Header as="h3" style={{ fontSize: "2em" }}>
							We also make your personal life a breeze.
						</Header>
						<p style={{ fontSize: "1.33em" }}>
							No longer will you have to track your contacts by hand,
							we're a dignified relationship manager!
						</p>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row>
					<Grid.Column textAlign="center">
						<Button size="huge">Create An Account</Button>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Segment>
		<Segment inverted vertical style={{ padding: "5em 0em" }}>
			<Container>
				<Grid divided inverted stackable>
					<Grid.Row>
						<Grid.Column width={3}>
							<Header inverted as="h4" content="About" />
							<List link inverted>
								<List.Item as="a">Sitemap</List.Item>
								<List.Item as="a">Contact Us</List.Item>
								<List.Item as="a" href="www.wikipedia.com/">
									Religious Dissonance
								</List.Item>
								<List.Item as="a">Quantum Mechanics</List.Item>
							</List>
						</Grid.Column>
						<Grid.Column width={3}>
							<Header inverted as="h4" content="Services" />
							<List link inverted>
								<List.Item as="a">Banana Pre-Order</List.Item>
								<List.Item as="a">Hat Gallery</List.Item>
								<List.Item as="a">Give Away Your SSN</List.Item>
								<List.Item as="a">Favorite Shirtless Avenger</List.Item>
							</List>
						</Grid.Column>
						<Grid.Column width={7}>
							<Header as="h4" inverted>
								No Warranty Included
							</Header>
							<p>
								Really, if something messes up, we are not responsible.
								You should probably memorize your parents' numbers just
								in case your car breaks down or something. Good luck!
							</p>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
		</Segment>
	</ResponsiveContainer>
);
export default HomePage;
