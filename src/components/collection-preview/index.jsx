import React from "react";

import CollectionItem from "../collection-item";

import { Flex, Heading } from "@chakra-ui/react";
import SeeFullCollection from "../see-full";

const CollectionPreview = ({ title, items }) => {

	
	return (
		<Flex direction="column" marginBottom="1rem" color="#4a4a4a">
			<Heading paddingLeft={4} m={4} as="h1" marginBottom=".5rem">
				{title.toUpperCase()}
			</Heading>
			<Flex justify="space-between" p={4} h="28rem">
				{items
					.filter((item, inx) => inx < 3)
					.map(({ id, ...otherItemProps }) => (
						<CollectionItem key={id} {...otherItemProps} />
					))}
				<SeeFullCollection heading="hi" title="rs" />
			</Flex>
		</Flex>
	);
};

export default CollectionPreview;
