import React from "react";
import { useSelector } from "react-redux";

import {
	selectCartItems,
	selectCartTotal,
} from "../../redux/cart/cart.selectors";

import CartItem from "../cart-item";
import CustomButton from "../custom-button";
import { useNavigate } from "react-router";
import { Flex, Center, Text, Box, chakra } from "@chakra-ui/react";

const CartItems = ({ onClose }) => {
	let navigate = useNavigate();
	const cartItems = useSelector(selectCartItems);
	const total = useSelector(selectCartTotal);

	return (
		<Flex
			h="100%"
			direction="column"
			justify="space-between"
			align="space-between"
			paddingTop={2}
		>
			<Flex direction="column" h="100%" w="100%">
				{" "}
				<Flex
					h=" calc(var(--vh, 1vh) * 70)"
					w="100%"
					overflowY={"auto"}
					direction="column"
				>
					{" "}
					{cartItems.length ? (
						cartItems.map((cartItem) => (
							<CartItem key={cartItem.id} item={cartItem} />
						))
					) : (
						<Center h="100%" w="100%">
							<Text>Your cart is empty.</Text>
						</Center>
					)}
				</Flex>
			</Flex>
			<Flex w="100%" justify="space-between" direction="column">
				<Box display="flex" justifyContent="flex-end" alignContent={"flex-end"}>
					<Text fontSize="lg" fontWeight="bold">
						Current Total:
						<chakra.span color="#4a4a4a"> ${total}.00</chakra.span>
					</Text>
				</Box>
				<CustomButton
					style={{ width: "100%" }}
					onClick={() => {
						navigate("/checkout");
						onClose();
					}}
				>
					GO TO CHECKOUT
				</CustomButton>
			</Flex>
		</Flex>
	);
};

export default CartItems;
