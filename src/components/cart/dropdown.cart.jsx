import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import CartItem from "../cart-item";
import CustomButton from "../custom-button";
import { useNavigate } from "react-router";
import { Flex, Center, Text } from "@chakra-ui/react";

const CartDropdown = () => {
	const dispatch = useDispatch();
	let navigate = useNavigate();
	const cartItems = useSelector(selectCartItems);

	const btnRef = React.useRef();

	return (
		<Flex h="100%" direction="column">
			
			<Center direction="column" h="100%">
				{" "}
				{cartItems.length ? (
					cartItems.map((cartItem) => (
						<CartItem key={cartItem.id} item={cartItem} />
					))
				) : (
					<span className="empty-message">Your cart is empty.</span>
				)}
			</Center>
			<CustomButton
				onClick={() => {
					navigate("/checkout");
				}}
			>
				GO TO CHECKOUT
			</CustomButton>
		</Flex>
	);
};

export default CartDropdown;
