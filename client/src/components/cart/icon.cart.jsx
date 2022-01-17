import { Heading } from "@chakra-ui/react";

import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { useSelector } from "react-redux";

const CartIcon = ({ onOpen }) => {
	const itemCount = useSelector(selectCartItemsCount);
	return (
		<Heading
			fontSize={{base:"md", md:"4xl"}}
			color="whitesmoke"
			lineHeight={"shorter"}
			align={"center"}
			_hover={{ cursor: "pointer" , textDecoration: "underline" }}
			onClick={() => onOpen()}
		>
			CART ({itemCount})
		</Heading>
	);
};

export default CartIcon;

