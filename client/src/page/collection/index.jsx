import React from "react";

import Collection from "../../components/collection";

import { Box } from "@chakra-ui/react";

const CollectionPage = () => {
	return (
		<Box  direction="column" minH="100%">
			<Collection />
		</Box>
	);
};

export default CollectionPage;
