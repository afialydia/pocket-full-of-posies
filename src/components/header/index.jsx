import React from "react";
import { Link } from "react-router-dom";

import {
	Flex,
	Heading,
	chakra,
	Box,
	Stack,
	Spacer,
	useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import "./header.styles.scss";
import { auth } from "../../firebase/firebase.utils";

import ShoppingCart from "../cart";

const Header = () => {
	
	return (
		<Flex
			h="auto"
			w="100%"
			justify="space-between"
			// marginBottom="1.5rem"
			// border="solid yellow"
			align="flex-start"
			// border="solid red .25px"
			position="fixed"
			zIndex={6}
			top="0"
			paddingTop={useBreakpointValue({ base: 4, md: "1.6rem" })}
			paddingX={useBreakpointValue({ base: 4, md: "1.6rem" })}
		>
			<Stack
				// border="solid teal"
				maxW={"2xl"}
				align={"flex-start"}
				spacing={6}
				h="90%"
			>
				<Heading size={"4xl"}>
					POCKET
					<br />
					FULL OF
					<br />
					POSIES
				</Heading>
			</Stack>
			<Spacer />
			<Flex
				w="50%"
				h="100%"
				// align="center"
				justify="end"
				align="start"
				className="options"
				// border="solid"
			>
				<Link className="option" to="/">
					<Heading fontSize={{ base: "md", md: "4xl" }}>HOME</Heading>
				</Link>
				<Box w="1rem" />
				<Link className="option" to="/shop">
					<Heading fontSize={{ base: "md", md: "4xl" }}>SHOP</Heading>
				</Link>
				<Box w="1rem" />
				<Link className="option" to="/contact">
					<Heading fontSize={{ base: "md", md: "4xl" }}>CONTACT</Heading>
				</Link>
				<Box w="1rem" />
				{/* {currentUser ? (
						<chakra.div className="option" onClick={() => signOutStart()}>
							<Heading> SIGN OUT</Heading>
						</chakra.div>
					) : (
						<Link className="option" to="/signin">
							<Heading> SIGN IN</Heading>
						</Link>
					)} */}
				{/* <Box w="1rem" /> */}
				<ShoppingCart />{" "}
			</Flex>
		</Flex>
	);
};

export default Header;
