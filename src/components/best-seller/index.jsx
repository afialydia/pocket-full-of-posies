import React from "react";
// import { useHistory,useRouteMatch } from "react-router";
import { useNavigate } from "react-router-dom";
//styles
import { Heading, Flex, GridItem, Text, Box, Center } from "@chakra-ui/react";
import CollectionItem from "../collection-item";

const BestSeller = ({img }) => {
	let navigate = useNavigate();

	return (
		// // <GridItem
		// // 	colSpan={{ base: 6, md: colSpan }}
		// // 	rowSpan={{ base: 1, md: rowSpan }}
		// // 	h="auto"
		// // >
		// 	<Flex
		// 		minW="30%"
		// 		h={"100%"}
		// 		flex="1 1 auto"
		// 		align="center"
		// 		justify="center"
		// 		overflow="hidden"
		// 		// className={`${size} menu-item`}
		// 		bgGradient={"linear(to-br, blackAlpha.600, transparent)"}
		// 		// onClick={() => navigate(`/${linkUrl}`)}
		// 	>
		// 		<Box
		// 			// className="background-image"
		// 			backgroundPosition={"center"}
		// 			backgroundSize={"cover"}
		// 			// bgImage={`url(${imageUrl})`}
		// 		/>
		// 		<Flex
		// 			// className="content"
		// 			h="5.625rem"
		// 			padding="0 1.563rem"
		// 			direction="column"
		// 			align="center"
		// 			justify="center"
		// 			border="solid black 1px"
		// 			shadow="2xl"
		// 		>
		// 			<Heading as="h1" opacity={1} color="#4a4a4a">
		// 				best seller{/* {title.toUpperCase()} */}
		// 			</Heading>{" "}
		// 			<Text color="black" size={"lg"}>
		// 				Shop Now
		// 			</Text>
		// 		</Flex>
		// 	</Flex>
		// // </GridItem>
		<Center h="100%">
			<CollectionItem
				id="1"
				name="tesr"
				price="2.33"
				imageUrl={img}
			/>
		 </Center>
	);
};

export default BestSeller;
