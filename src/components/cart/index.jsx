import React from "react";
import CartDrawer from "./drawer.cart";
import CartDropdown from "./dropdown.cart";

const ShoppingCart = () => {

	return (
		<CartDrawer>
			<CartDropdown />
		</CartDrawer>
	);
};

export default ShoppingCart;
