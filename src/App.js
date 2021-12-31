import React, { useState, useEffect } from "react";
import { useViewportScroll, useTransform } from "framer-motion";

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

//files

import Hero from "./components/hero";

const App = () => {
	return (
		<Flex width="100%" h="100%" className='App'>
			<Grid
				templateRows="repeat(3,fr)"
				templateColumns="1fr"
				placeItems="center stretch"
				h="100%"
				w="100%"
				area=" 2 / 1 / 2 / 4"
				// border="solid magenta"
				gap={5}
			>
				<GridItem rowSpan={1} colSpan={1} height=" calc(var(--vh, 1vh) * 100)">
					<Hero />
				</GridItem>
			</Grid>
		</Flex>
	);
};

export default App;
