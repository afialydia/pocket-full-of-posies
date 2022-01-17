import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Collection from "./collection.collection";

import { selectCollection } from "../../redux/shop/shop.selectors";

import { Flex } from "@chakra-ui/react";

const CollectionOverview = () => {
	const { linkUrl } = useParams();
	const collection = useSelector(selectCollection(linkUrl));

	return (
		<Flex
			direction="column"
			marginTop={{ base: "15rem", md: "15rem" }}
			padding={4}
			h="100%"
			minH=" calc(var(--vh, 1vh) * 100)"
			justify="space-evenly"
		>
			<Collection collection={collection} />
		</Flex>
	);
};

export default CollectionOverview;
