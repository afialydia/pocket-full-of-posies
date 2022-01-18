import React from "react";
import axios from "axios";
import { useSelector,useDispatch } from "react-redux";
import CheckoutItem from "../../components/checkout-item";
import CustomButton from "../../components/custom-button";
import {
	selectCartItems,
	selectCartTotal,
} from "../../redux/cart/cart.selectors";

import {
	Flex,
	Center,
	Heading,
	chakra,
	Box,
	Text,
} from "@chakra-ui/react";
import { pullPurchasedItems } from "../../redux/cart/cart.actions";

const CheckoutPage = () => {
	const dispatch = useDispatch()
	const cartItems = useSelector(selectCartItems);
	const total = useSelector(selectCartTotal);
	let checkoutItems = [];

	cartItems.map(({ id, quantity }) => checkoutItems.push({ id, quantity }));

	const HeaderBlock = ({ title, ...otherProps }) => {
		return (
			<Box className="header-block">
				<chakra.span {...otherProps} textTransform={"capitalize"} w="23%">
					{title}
				</chakra.span>
			</Box>
		);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post("/create-checkout-session", {
				body: { items: checkoutItems },
			})
			.then((res) => {
				if (res.status === 200) return res;
				return res.json().then((json) => Promise.reject(json));
			})
			.then(({ data }) => {
				dispatch(pullPurchasedItems(data.id))
				window.location = data.url;
			})
			.catch((e) => {
				console.error("this is the error:", e);
			});

	};

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
					<Text>Total: ${total}.00</Text>
				</Box>
				<form onSubmit={handleSubmit}>
					<CustomButton
						style={{ width: "100%" }}
					>
						PAY NOW
					</CustomButton>
					
				</form>
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
					<br /> 4242 4242 4242 4242 - Exp:1/23 - CVV:123
				</Text>
			</Center>
		</Center>
	);
};

export default CheckoutPage;
