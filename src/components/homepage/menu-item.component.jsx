import React from "react";

//styles
import {
	Heading,
	useColorModeValue,
	useBreakpointValue,
	Flex,
	Text,
	Grid,
	GridItem,
} from "@chakra-ui/react";
import "./homepage.styles.scss";

const MenuItem = ({ title }) => {
	return (
		<Flex
			minW="30%"
			h="15rem"
			flex="1 1 auto"
			align="center"
			justify="center"
			border="solid black 1px"
			m="0 7.5px 15px"
			className="menu-item"
		>
			<Flex
				h="5.625rem"
				padding="0 1.563rem"
				direction="column"
				align="center"
				justify="center"
				border="solid black 1px"
				className="content"
			>
				<Heading as="h1" color="#4a4a4a" marginBottom={".5rem"}>
					{title}
				</Heading>{" "}
				<Text color="black" size={"lg"}>
					Shop Now
				</Text>
			</Flex>
		</Flex>
	);
};

export default MenuItem;
