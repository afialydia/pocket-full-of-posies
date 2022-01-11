import React from "react";

import { Box, Flex, chakra, Heading, Center, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router";

const SeeFullCollection = ({ title, routeName }) => {
	const navigate = useNavigate();

	return (
		<Flex
			w={{
				base: "100%",
				// ,md:"70%"
			}}
			h={{
				base: "100%",
				// md:"21.875rem"
			}}
			// minH="25.938rem"
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
				position="absolute"
				background="rgb(245,245,245,.9)"
				direction="column"
				transform={"translate(0px,-5%)"}
				backdropFilter="blur(2rem)"
				_hover={{ cursor: "pointer" }}
				onClick={() => {
					navigate(`/shop/${routeName.toLowerCase()}`);
				}}
			>
				<Heading size="lg">SEE FULL {title.toUpperCase()} COLLECTION</Heading>
			</Center>
		</Flex>
	);
};

export default SeeFullCollection;
