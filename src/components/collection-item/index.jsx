import React from "react";

import { Box, Heading, Flex, chakra, Image, Center, Text } from "@chakra-ui/react";

const CollectionItem = ({ id, name, price, imageUrl, description }) => (
	<Flex
		w={{
			base: "100%",
			// ,md:"70%"
		}}
		h={{
			base: "100%",
			// md:"21.875rem"
		}}
		// minH="28rem"
		p={4}
		mx={2}
		align="center"
		justify="center"
		bg="rgb(245,245,245,.6)"
		direction="column"
		shadow={"md"}
		// border="solid"
		color="#4a4a4a"
		position="relative"
	>
		<Image
			// w={{ base: "100%", md: "25rem" }}
			h="90%"
			maxw="20rem"
			// position="absolute"
			objectFit="cover"
			backgroundSize={"cover"}
			backgroundPosition={"center"}
			marginBottom={"5px"}
			minWidth="auto"
			src={imageUrl}
		/>
		<Flex
			h="70%"
			w="80%"
			direction="column"
			p={4}
			// p={{ base: "1rem", md: "2rem" }}
			// maxW="85%"
			
			// display={{ base: "inline-block", lg: "none" }}
			position="absolute"
			background="rgb(245,245,245,.9)"
			// background="whitesmoke"
			direction="column"
			transform={"translate(0px,-5%)"}
			backdropFilter="blur(2rem)"
			// zIndex={1}
			// border="solid green"
		>
			<Text h="10%" fontWeight={"bold"}>{name}</Text>
			<Text
				sx={{
					textAlign: " justify",
					textjustify: "distribute",
					textAlignLast: "left",
				}}
				paddingTop={4}
				h="80%"
			>
				{description}
			</Text>
			<Text h="10%" fontWeight="bold" justifySelf="flex-end" textAlign="flex-end"  _hover={{textDecoration:'wavy underline', cursor:'pointer'}}>ADD TO CART</Text>
		</Flex>

		<Flex w="100%" h="10%" align="center" justify="space-between" size="md">
			<chakra.span>{name}</chakra.span>

			<chakra.span>$ {price}</chakra.span>
		</Flex>
	</Flex>
);

export default CollectionItem;
