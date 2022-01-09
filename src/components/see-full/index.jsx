import React from "react";

import { Box, Flex, chakra, Heading, Center, Text } from "@chakra-ui/react";

const SeeFullCollection = ({ id, name, price, imageUrl, description }) => (
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
		<Center
			
			h="70%"
			w="80%"
			justify="center"
			flexDirection="column"
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
			<Heading>SEE FULL COLLECTION</Heading>
		</Center>
	</Flex>
);

export default SeeFullCollection;
