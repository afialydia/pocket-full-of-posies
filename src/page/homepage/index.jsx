import React from "react";

//styles
import { Flex, Grid, GridItem } from "@chakra-ui/react";

//files
import Directory from "../../components/directory";
import Hero from "../../components/hero";

const HomePage = () => {
	return (
		<Flex width="100%" h="100%" className="App" direction="column">
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
					<Flex
						direction="column"
						align="center"
						padding="1.25rem 5rem"
						h="100%"
					>
						<Directory />
					</Flex>
				</GridItem>
			</Grid>
		</Flex>
	);
};

export default HomePage;
