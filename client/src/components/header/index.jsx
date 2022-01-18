import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
import { selectSessionID } from "../../redux/cart/cart.selectors";
import { resolvePurchaseSession } from "../../redux/cart/cart.actions";

const Header = () => {
	const dispatch = useDispatch();
	const checkoutSession = useSelector(selectSessionID);

	let closeSession = checkoutSession
		? () => dispatch(resolvePurchaseSession())
		: null;

	return (
		<Flex
			h="auto"
			w="100%"
			justify="space-between"
			align="flex-start"
			position="absolute"
			zIndex={6}
			top="0"
			paddingTop={useBreakpointValue({ base: 4, md: "1.6rem" })}
			paddingX={useBreakpointValue({ base: 4, md: "1.6rem" })}
		>
			<Stack maxW={"11.5rem"} align={"flex-start"} spacing={6} h="100%">
				<Link className="option" to="/">
					<Heading fontSize={{ base: "5xl", md: "6xl" }} onClick={closeSession}>
						POCKET
						<br />
						FULL OF
						<br />
						POSIES
					</Heading>
				</Link>
			</Stack>
			<Spacer />
			<Flex w="50%" h="100%" justify="end" align="start" className="options">
				<Link className="option" to="/shop">
					<Heading
						fontSize={{ base: "md", md: "4xl" }}
						_hover={{ cursor: "pointer", textDecoration: "underline" }}
						onClick={closeSession}
					>
						SHOP
					</Heading>
				</Link>
				<Box w="1rem" />
				<chakra.a className="option" href="/#about">
					<Heading
						fontSize={{ base: "md", md: "4xl" }}
						_hover={{ cursor: "pointer", textDecoration: "underline" }}
						onClick={closeSession}
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
