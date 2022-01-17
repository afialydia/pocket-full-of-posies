import React from "react";

import {
	Flex,
	Heading,
	useBreakpointValue,
	GridItem,
	Grid,
} from "@chakra-ui/react";

import SeeFullCollection from "../see-full";
import CollectionItem from "../collection-item";

const ShopPreview = ({ title, routeName, items }) => {
	const variant = useBreakpointValue({ base: 1, md: 2, lg: 3 });
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
				}}
				gap={4}
				p={4}
				h={{ base: "100%" }}
				direction={{ base: "column", md: "row" }}
			>
				{items
					.filter((item, inx) => inx < variant)
					.map((item) => (
						<GridItem
							h="auto"
							rowSpan={6}
							colSpan={1}
							key={item.id}
						>
							<CollectionItem
								key={item.id}
								item={item}
								imageUrl={item.imageUrl}
							/>
						</GridItem>
					))}

				<GridItem rowSpan={{ base: 2, md: 6 }} colSpan={1}>
					<SeeFullCollection title={title} routeName={routeName} />
				</GridItem>
			</Grid>
		</Flex>
	);
};

export default ShopPreview;
