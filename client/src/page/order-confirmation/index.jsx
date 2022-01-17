import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	selectPurchaseTotal,
	selectPurchasedItems,
	selectSessionID,
} from "../../redux/cart/cart.selectors";

import {
	Flex,
	Center,
	Heading,
	Image,
	chakra,
	Box,
	Text,
} from "@chakra-ui/react";
import {
	clearCart,
	resolvePurchaseSession,
} from "../../redux/cart/cart.actions";
import { useNavigate } from "react-router";

const OrderConfirmationPage = () => {
	const purchasedItems = useSelector(selectPurchasedItems);
	const total = useSelector(selectPurchaseTotal);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const checkoutSession = useSelector(selectSessionID);

	let closeSession = checkoutSession
		? () => {
				dispatch(resolvePurchaseSession());
				navigate("/");
		  }
		: null;

	const HeaderBlock = ({ title, ...otherProps }) => {
		return (
			<Box>
				<chakra.span {...otherProps} textTransform={"capitalize"} w="23%">
					{title}
				</chakra.span>
			</Box>
		);
	};
	const Purchase = ({ item: { imageUrl, price, name, quantity } }) => (
		<Flex w="100%" my={2} >
			<Image
				w="40%"
				src={imageUrl}
				alt="item"
				objectFit={"contain"}
				objectPosition="center top"
			/>
			<Flex
				w="60%"
				direction="column"
				alignItems="flex-start"
				justify="flex-start"
				padding={4}
				background="rgb(245,245,245,.6)"
			>
				<chakra.span fontWeight={"bold"} fontSize="lg">
					{name}
				</chakra.span>
				<chakra.span>
					{quantity} x ${price}
				</chakra.span>
			</Flex>
		</Flex>
	);
	useEffect(() => {
		dispatch(clearCart());
	}, [dispatch]);

	return (
		<Center
			justify="space-evenly"
			p={4}
			paddingTop="15rem"
			paddingBottom="5rem"
			minH=" calc(var(--vh, 1vh) * 100)"
			flexDirection="column"
		>
			<Center
				color="#4a4a4a"
				shadow="lg"
				background="rgb(239,239,239,.6)"
				w={{ base: "100%", md: "85%" }}
				maxW="30rem"
				h="100%"
				p={4}
				flexDirection="column"
			>
				{" "}
				<Center flexDirection="column" marginY="1.5rem">
					<Heading textAlign="center" w="100%" size="lg">
						YOUR ORDER HAS BEEN PLACED
					</Heading>
					<Text>
						A confirmation of your order will be sent to your email address.
					</Text>
				</Center>
				<Flex
					width="100%"
					justifyContent=" space-between"
					borderBottom="1px solid darkgrey"
				
				>
					<HeaderBlock title="Order Summary" />
				</Flex>
				{purchasedItems.length ? (
					<Flex w="100%" direction="column" py={4}>
						{purchasedItems.map((item) => (
							<Purchase key={item.id} item={item} />
						))}
						<Flex
							w="100%"
							justify="space-between"
							align="center"
							px={4}
						>
							<Text
								_hover={{ textDecoration: "underline", cursor: "pointer" }}
								onClick={() => closeSession()}
							>
								RETURN TO HOME PAGE
							</Text>
							<Text>Total: ${total}.00</Text>
						</Flex>
					</Flex>
				) : (
					<Center minH="10rem" marginY="1.5rem">
						<Text>You have not checked out yet.</Text>
					</Center>
				)}
			</Center>
		</Center>
	);
};

export default OrderConfirmationPage;
