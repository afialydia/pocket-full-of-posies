import { Image, Heading, Flex, chakra,useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
// import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { useSelector } from "react-redux";
import "./icon.cart.styles.scss";

const CartIcon = ({ onOpen }) => {
	const itemCount = useSelector(selectCartItemsCount);
	return (
		<Heading
			fontSize={{base:"md", md:"4xl"}}
			// as={"span"}
			color="whitesmoke"
			lineHeight={"shorter"}
			align={"center"}
			_hover={{ cursor: "pointer" }}
			onClick={() => onOpen()}
		>
			CART ({itemCount})
		</Heading>
	);
};

export default CartIcon;

