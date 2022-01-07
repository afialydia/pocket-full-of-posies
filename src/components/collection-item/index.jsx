import React from "react";

import { Box, Flex, chakra } from "@chakra-ui/react";

const CollectionItem = ({ id, name, price, imageUrl }) => (
	<Flex
		w={{
			base: "100%",
			// ,md:"70%"
		}}
		h={{
			base: "100%",
			// md:"21.875rem"
		}}
		minH="30rem"
		p={4}
		align="center"
		justify="center"
		bg="rgb(245,245,245,.6)"
		direction="column"
		shadow={"sm"}
		// border="solid"
	>
		<Box
			w="100%"
			h="95%"
			backgroundSize={"cover"}
			backgroundPosition={"center"}
			marginBottom={"5px"}
			style={{
				backgroundImage: `url(${imageUrl})`,
			}}
			// rounded={"md"}
		/>
		<Flex px={2} w="100%" h="5%" justify="space-between" size="md">
			<chakra.span marginBottom=".75rem">{name}</chakra.span>
			<chakra.span>{price}</chakra.span>
		</Flex>
	</Flex>
);

export default CollectionItem;
