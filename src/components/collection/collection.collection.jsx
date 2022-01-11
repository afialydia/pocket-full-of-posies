import React from "react";

import CollectionItem from "../collection-item";

import { Flex, Heading, GridItem, Grid } from "@chakra-ui/react";


const CollectionOverview = ({ collection }) => {
	const { title, items } = collection;

	return (
		<Flex
			direction="column"
			marginY={4}
			marginBottom="1rem"
			color="#4a4a4a"
			h="100%"
		>
			<Heading paddingLeft={4} m={4} as="h1" marginBottom=".5rem">
				{title.toUpperCase()}
			</Heading>
			<Grid
				templateColumns={{
					base: "repeat(1,1fr)",
					md: "repeat(3, 1fr)",
					lg: "repeat(4, 1fr)",
				}}
				templateRows={{
					base: "repeat(6,1fr)",
					// md: "repeat(3, 1fr)",
					// lg: "repeat(4, 1fr)",
				}}
				gap={4}
				p={4}
				h={{ base: "100%" }}
				direction={{ base: "column", md: "row" }}
			>
				{items.map((item) => (
					<GridItem
						h="100%"
						rowSpan={{ base: 4, md: 6 }}
						colSpan={1}
						// border="solid magenta"
						key={item.id}
					>
						<CollectionItem
							key={item.id}
							item={item}
							imageUrl={`/${item.imageUrl}`}
						/>
					</GridItem>
				))}
			</Grid>
		</Flex>
	);
};

export default CollectionOverview;
