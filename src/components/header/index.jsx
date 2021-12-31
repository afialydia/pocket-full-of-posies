import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/Logo.svg";

import { Flex, Heading, chakra, Box,Spacer, useBreakpointValue } from "@chakra-ui/react";

const Header = () => (
	<Flex
		// h="100%"
		w="100%"
		justify="space-between"
		// marginBottom="1.5rem"
		className="header"
		positon="fixed"
		zIndex={52}
		// border="solid yellow"
		align="center"
		// align="flex-end"
		// border="solid red .25px"
		position="fixed"
		zIndex={6}
		top="0"
		w="100%"
		paddingTop={useBreakpointValue({ base: 4, md: 8 })}
		paddingRight={useBreakpointValue({ base: 4, md: 8 })}
	>
		{/* <chakra.span h="100%" w="4.375rem" className="logo-container">
			<Link to="/">
				<Logo className="logo" />
			</Link>
		</chakra.span> */}
		<Spacer />
		<Flex
			w="50%"
			h="100%"
			// align="center"
			justify="flex-end"
			className="options"
			// border="solid"
		>
			<Link className="option" to="/">
				<Heading>HOME</Heading>
			</Link>
			<Box w="3rem" />

			<Link className="option" to="/shop">
				<Heading>SHOP</Heading>
			</Link>
			<Box w="3rem" />
			<Link className="option" to="/contact">
				<Heading>CONTACT</Heading>
			</Link>
		</Flex>
	</Flex>
);

export default Header;
