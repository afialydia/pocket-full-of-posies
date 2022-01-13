import React from "react";

import CollectionItem from "../collection-item";

import { Center, Heading, GridItem, Grid } from "@chakra-ui/react";

const CollectionOverview = ({ collection }) => {
	const { title, items } = collection;

	return (
		<Center
			flexDirection="column"
			marginY={4}
			marginBottom="1rem"
			color="#4a4a4a"
			h="100%"
			// border="solid"
		>
			<Center w="100%" h="100%" >
				<Heading  size="4xl" >
					{title.toUpperCase()}
				</Heading>
			</Center>
			<Grid
				templateColumns={{
					base: "repeat(1,1fr)",
					md: "repeat(2, 1fr)",
					lg: "repeat(4, 1fr)",
				}}
				templateRows={
					{
						// base: "repeat(6,1fr)",
						// md: "repeat(3, 1fr)",
						// lg: "repeat(4, 1fr)",
					}
				}
				gap={4}
				p={4}
				h={{ base: "100%" }}
				direction={{ base: "column", md: "row" }}
			>
				{items.map((item) => (
					<GridItem
						h="100%"
						w="100%"
						rowSpan={{ base: 1, md: 6 }}
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
		</Center>
	);
};

export default CollectionOverview;
