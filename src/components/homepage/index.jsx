import React from "react";

import MenuItem from "./menu-item.component";

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

const HomePage = () => {
	let menu = [
		{ title: "OCCASIONS" },
		{ title: "ARRANGEMENTS" },
		{ title: "NURSERY PLANTS" },
		{ title: "ACCESSORIES" },
		{ title: "PLANT CONSULTATION" },
	];

	return (
		<Flex direction="column" align="center" padding="1.25rem 5rem"
		h="100%">
			<Flex w="100%" wrap="wrap" justify="space-between" className="directory-menu">
				{menu.map((menuItem) => {
					return <MenuItem title={menuItem.title} key={menuItem.title} />;
				})}
			</Flex>
		</Flex>
	);
};

export default HomePage;
