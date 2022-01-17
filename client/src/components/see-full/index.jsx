import React from "react";

import { Heading, Center } from "@chakra-ui/react";
import { useNavigate } from "react-router";

const SeeFullCollection = ({ title, routeName }) => {
	const navigate = useNavigate();

	return (
		<Center
			w="100%"
			h="100%"
			p={4}
			mx={{ base: 0, md: 2 }}
			align="center"
			justify="center"
			bg="rgb(245,245,245,.6)"
			direction="column"
			shadow={"md"}
			color="#4a4a4a"
			position="relative"
		>
			<Center
				h="100%"
				w="100%"
				maxH="31.25rem"
				minH={{ base: "31.25rem", md: "19.688rem" }}
				marginBottom={"5px"}
				minWidth="auto"
				flexDirection="column"
				p={4}
				background="rgb(245,245,245,.9)"
				direction="column"
				backdropFilter="blur(2rem)"
				_hover={{ cursor: "pointer" }}
				onClick={() => {
					navigate(`/shop/${routeName.toLowerCase()}`);
				}}
			>
				<Heading size="lg">SEE FULL {title.toUpperCase()} COLLECTION</Heading>
			</Center>
		</Center>
	);
};

export default SeeFullCollection;
