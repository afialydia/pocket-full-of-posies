import React from "react";

import CollectionItem from "../collection-item";

import { Flex, Heading } from "@chakra-ui/react";

const CollectionPreview = ({ title, items }) => (
	<Flex direction="column" marginBottom="1rem">
		<Heading as="h1" marginBottom="1rem">{title.toUpperCase()}</Heading>
		<Flex justify="space-between">
			{items
				.filter((item, inx) => inx < 4)
				.map(({ id, ...otherItemProps }) => (
					<CollectionItem key={id} {...otherItemProps} />
				))}
		</Flex>
	</Flex>
);

export default CollectionPreview;
