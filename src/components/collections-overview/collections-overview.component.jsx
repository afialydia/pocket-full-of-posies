import React from "react";
import { useSelector } from "react-redux";

import CollectionPreview from "../collection-preview";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import { Flex } from "@chakra-ui/react";
import "./collections-overview.styles.scss";

const CollectionsOverview = () => {
	const collections = useSelector(selectCollectionsForPreview);
	return (
		<Flex direction="column"  marginTop="20rem" padding={4}>
			{" "}
			{collections.map(({ id, ...otherCollectionProps }) => (
				<CollectionPreview key={id} {...otherCollectionProps} />
			))}
		</Flex>
	);
};

export default CollectionsOverview;
