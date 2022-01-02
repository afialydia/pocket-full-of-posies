import { useState } from "react";
import { Box, chakra, useColorModeValue, Text } from "@chakra-ui/react";
import Link from "react-router-dom";

import HamburgerMenu from "./hamburger-menu";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const closeMenu = () => {
		setIsOpen(false);
	};

	const NavItem = ({ title, section }) => (
		<chakra.li
			listStyleType="none"
			px={{ lg: "6" }}
			py={{ base: "3", lg: "0" }}
			_hover={{
				cursor: "pointer",
				color: { base: "whitesmoke", md: "rgb(74,163,147)" },
				bgColor: "transparent",
			}}
			mixBlendMode="overlay"
		>
			<Link className="option" to={`/${section}`}>
				<a onClick={closeMenu}>
					<Heading>{title.toUpperCase()}</Heading>
				</a>
			</Link>
		</chakra.li>
	);

	const color = useColorModeValue("#44324c", "whitesmoke");

	return (
		<Box
			as="nav"
			display="flex"
			flexDir={{ base: "row-reverse", lg: "row" }}
			alignItems="center"
			fontWeight="500"
			w="100%"
		>
			<HamburgerMenu toggled={isOpen} toggle={setIsOpen} />
			<chakra.ul
				bg={{
					base: "linear-gradient(to right bottom,   rgba(74,163,147, 0.5),    rgba(74,163,147, 0.4))",
					lg: "transparent",
				}}
				backdropFilter={{ base: "blur(2rem)", lg: "none" }}
				color={{ base: "black", lg: color }}
				display={{
					base: isOpen ? "block" : "none",
					lg: "flex",
				}}
				position={{ base: "absolute", lg: "static" }}
				top="5rem"
				left="5%"
				right="5%"
				py={{ base: "2", lg: "0" }}
				px={{ base: "4", lg: "0" }}
				alignItems={{ lg: "center" }}
				boxShadow={{ base: "xl", lg: "none" }}
				zIndex="2"
			>
				<NavItem title="home" section="" />
				<NavItem title="shop" section="shop" />
				<NavItem title="contact" section="/#contact" />
				{currentUser ? (
					<chakra.div className="option" onClick={() => auth.signOut()}>
						<Heading> SIGN OUT</Heading>
					</chakra.div>
				) : (
					<Link className="option" to="/signin">
						<Heading> SIGN IN</Heading>
					</Link>
				)}
			</chakra.ul>
		</Box>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
	signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);