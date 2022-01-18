import React from "react";
import { useSelector } from "react-redux";

import ShopPreview from "./preview.shop";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import { Flex } from "@chakra-ui/react";

const ShopOverview = () => {
	const collections = useSelector(selectCollectionsForPreview);
	return (
		<Flex
			direction="column"
			marginTop={{ base: "15rem", md: "20rem" }}
			padding={4}
			h="100%"
			minH=" calc(var(--vh, 1vh) * 250)"
			justify="space-evenly"
		>
			{collections.map(({ id, ...otherCollectionProps }) => {
				return <ShopPreview key={id} {...otherCollectionProps} />;
			})}
		</Flex>
	);
};

export default  ShopOverview;
