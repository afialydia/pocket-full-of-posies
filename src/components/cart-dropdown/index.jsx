import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import CartItem from "../cart-item";
import CustomButton from "../custom-button";
import { useNavigate } from "react-router";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
	const dispatch = useDispatch();
	let navigate = useNavigate();
	const cartItems = useSelector(selectCartItems);

	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				{cartItems.length ? (
					cartItems.map((cartItem) => (
						<CartItem key={cartItem.id} item={cartItem} />
					))
				) : (
					<span className="empty-message">Your cart is empty.</span>
				)}
			</div>
			<CustomButton
				onClick={() => {
					navigate("/checkout");
					dispatch(toggleCartHidden());
				}}
			>
				GO TO CHECKOUT
			</CustomButton>
		</div>
	);
};

export default CartDropdown;
