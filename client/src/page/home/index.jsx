import React from "react";

//styles
import { Flex, Center, Grid, GridItem } from "@chakra-ui/react";

//files
import Directory from "../../components/directory";
import Hero from "../../components/hero";
import About from "../../components/about";

const HomePage = () => {
	return (
		<Flex width="100%" h="100%" className="App" direction="column">
			<Grid placeItems="center stretch" h="100%" w="100%">
				<GridItem rowSpan={1} colSpan={1} height=" calc(var(--vh, 1vh) * 100)">
					<Hero />
				</GridItem>
				<GridItem
					id="about"
					rowSpan={1}
					colSpan={1}
					// minH=" calc(var(--vh, 1vh) * 150)"
				>
					<About />
				</GridItem>

				<GridItem
					rowSpan={1}
					colSpan={1}
					// minH=" calc(var(--vh, 1vh) * 100)"
				>
					<Center h="100%">
						<Directory />
					</Center>
				</GridItem>
			</Grid>
		</Flex>
	);
};

export default HomePage;
