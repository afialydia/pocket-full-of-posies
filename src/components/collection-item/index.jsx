import React from "react";

import { Box, Flex, chakra } from "@chakra-ui/react";

const CollectionItem = ({ id, name, price, imageUrl }) => (
	<Flex w="22%" h="21.875rem" align="center" direction="column">
		<Box
			w="100%"
			h="95%"
			backgroundSize={"cover"}
			backgroundPosition={"center"}
			marginBottom={"5px"}
			style={{
				backgroundImage: `url(${imageUrl})`,
			}}
		/>
		<Flex w="100%" h="5%" justify="space-between" size="md">
			<chakra.span w="90%" marginBottom=".75rem">
				{name}
			</chakra.span>
			<chakra.span w="10%">{price}</chakra.span>
		</Flex>
	</Flex>
);

export default CollectionItem;
