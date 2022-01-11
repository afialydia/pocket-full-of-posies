import React from "react";
import { Flex, Image, chakra } from "@chakra-ui/react";
import "./cart-item.styles.scss";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
	<Flex w="100%" h="80px" marginBottom="1.5rem">
		<Image w="30%" src={imageUrl} alt="item" objectFit={'cover'} objectPosition="center top"/>
		<Flex
			w="70%"
			direction="column"
			alignItems="flex-start"
			justify="center"
			padding={"10px 20px"}
		>
			<chakra.span fontWeight={"bold"} fontSize="md">{name}</chakra.span>
			<span className="price">
				{quantity} x ${price}
			</span>
		</Flex>
	</Flex>
);

export default CartItem;
