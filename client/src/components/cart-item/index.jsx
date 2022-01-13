import React from "react";
import { Flex, Image, chakra } from "@chakra-ui/react";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
	<Flex w="100%" h="100px" marginBottom="1.5rem">
		<Image
			w="20%"
			src={imageUrl}
			alt="item"
			objectFit={"contain"}
			objectPosition="center top"
		/>
		<Flex
			w="60%"
			direction="column"
			alignItems="flex-start"
			justify="flex-start"
			padding={"10px 20px"}
		>
			<chakra.span fontWeight={"bold"} fontSize="md">
				{name}
			</chakra.span>
			<span className="price">
				{quantity} x ${price}
			</span>
			
		</Flex>
	</Flex>
);

export default CartItem;
