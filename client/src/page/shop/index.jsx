import React from "react";

import Shop from "../../components/shop";

import { Flex } from "@chakra-ui/react";

const ShopPage = () => {
	return (
		<Flex direction="column" minH="100%">
			<Shop />
		</Flex>
	);
};

export default ShopPage;
