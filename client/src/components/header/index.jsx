import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

import {
	Flex,
	Heading,
	Box,
	Stack,
	Spacer,
	chakra,
	useBreakpointValue,
} from "@chakra-ui/react";
import "./header.styles.scss";

import ShoppingCart from "../cart";

const Header = () => {
	let navigate = useNavigate();

	return (
		<Flex
			h="auto"
			w="100%"
			justify="space-between"
			align="flex-start"
			position="fixed"
			zIndex={6}
			top="0"
			paddingTop={useBreakpointValue({ base: 4, md: "1.6rem" })}
			paddingX={useBreakpointValue({ base: 4, md: "1.6rem" })}
		>
			<Stack
				// border="solid teal"
				maxW={"11.5rem"}
				align={"flex-start"}
				spacing={6}
				h="90%"
			>
				{" "}
				<Link className="option" to="/">
					<Heading fontSize={{ base: "5xl", md: "6xl" }}>
						POCKET
						<br />
						FULL OF
						<br />
						POSIES
					</Heading>
				</Link>
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
				<Link className="option" to="/shop">
					<Heading
						fontSize={{ base: "md", md: "4xl" }}
						_hover={{ cursor: "pointer", textDecoration: "underline" }}
					>
						SHOP
					</Heading>
				</Link>
				<Box w="1rem" />
				<chakra.a className="option" href="/#about">
					<Heading
						fontSize={{ base: "md", md: "4xl" }}
						_hover={{ cursor: "pointer", textDecoration: "underline" }}
					>
						ABOUT
					</Heading>
				</chakra.a>
				<Box w="1rem" />
				<ShoppingCart />{" "}
			</Flex>
		</Flex>
	);
};

export default Header;
