import React from "react";
import { useSelector } from "react-redux";
import CheckoutItem from "../../components/checkout-item";
import StripeCheckoutButton from "../../components/stripe-button";
import {
	selectCartItems,
	selectCartTotal,
} from "../../redux/cart/cart.selectors";

import { Flex, Center, Heading, chakra, Box, Text } from "@chakra-ui/react";

const CheckoutPage = () => {
	const cartItems = useSelector(selectCartItems);
	const total = useSelector(selectCartTotal);

	const HeaderBlock = ({ title, ...otherProps }) => {
		return (
			<Box className="header-block">
				<chakra.span {...otherProps} textTransform={"capitalize"} w="23%">
					{title}
				</chakra.span>
			</Box>
		);
	};

	return (
		<Center
			justify="space-evenly"
			p={4}
			paddingTop="15rem"
			paddingBottom="5rem"
			minH=" calc(var(--vh, 1vh) * 100)"
			flexDirection="column"
			// border="solid red"
		>
			<Center
				color="#4a4a4a"
				shadow="lg"
				background="rgb(239,239,239,.7)"
				w={{ base: "100%", md: "85%" }}
				maxW="50rem"
				h="100%"
				p={4}
				flexDirection="column"
			>
				<Heading>CHECKOUT</Heading>
				<Flex
					width="100%"
					padding="10px"
					justifyContent=" space-between"
					borderBottom="1px solid darkgrey"
					className="checkout-header"
				>
					<HeaderBlock title="product" />
					<HeaderBlock title="description" />
					<HeaderBlock title="quantity" />
					<HeaderBlock title="price" />
					<HeaderBlock title="remove" w="8%" />
				</Flex>

				{cartItems.length ? (
					cartItems.map((cartItem) => (
						<CheckoutItem cartItem={cartItem} key={cartItem.id} />
					))
				) : (
					<Center minH="10rem" marginY="1.5rem">
						<Text>Your cart is empty.</Text>
					</Center>
				)}

				<Box marginLeft="auto" fontSize="2xl">
					<Text>Total: ${total}</Text>
				</Box>
				<StripeCheckoutButton price={total} />
			</Center>
			<Center
				m={4}
				padding={4}
				rounded={true}
				background="rgb(240,97,54,.9)"
				textAlign="center"
				fontSize="lg"
				
			>
				<Text>
					*Test payments with these credentials*
					<br /> 4242 4242 4242 - Exp:1/23 - CVV:123
				</Text>
			</Center>
		</Center>
	);
};

export default CheckoutPage;
