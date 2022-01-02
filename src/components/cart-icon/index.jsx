import React from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useSelector, connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { chakra, Flex } from "@chakra-ui/react";

const CartIcon = ({ toggleCartHidden }) => {
	const itemCount = useSelector(selectCartItemsCount);

	// 	.cart-icon {
	//   width: 45px;
	//   height: 45px;
	//   position: relative;
	//   display: flex;
	//   align-items: center;
	//   justify-content: center;
	//   cursor: pointer;

	//   .shopping-icon {
	//     width: 24px;
	//     height: 24px;
	//   }

	return (
		<Flex
			// cursor="pointer"
			// position="relative"
			// w="1.5rem"
			// h="100%"
			align="flex-start"
			// justify="center"
			// border="transparent"
			className="cart-icon"
			onClick={toggleCartHidden}
		>
			<ShoppingIcon className="shopping-icon" />
			<chakra.span position="absolute" bottom="12px" fontSize="10px">
				{itemCount}
			</chakra.span>
		</Flex>
	);
};

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
});
export default connect(null, mapDispatchToProps)(CartIcon);
