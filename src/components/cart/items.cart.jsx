import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import CartItem from "../cart-item";
import CustomButton from "../custom-button";
import { useNavigate } from "react-router";
import { Flex, Center} from "@chakra-ui/react";

const CartItems = ({ onClose }) => {
	let navigate = useNavigate();
	const cartItems = useSelector(selectCartItems);


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
					onClose();
				}}
			>
				GO TO CHECKOUT
			</CustomButton>
		</Flex>
	);
};

export default CartItems;
