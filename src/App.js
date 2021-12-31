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
import HomePage from "./components/homepage";
import Footer from "./components/footer/footer.component";

const App = () => {
	return (
		<Flex width="100%" h="100%" className="App" direction='column'>
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
				<GridItem rowSpan={1} colSpan={1} height="auto">
					<HomePage />
				</GridItem>
			</Grid>
      <Footer/>
		</Flex>
	);
};

export default App;
