import React from "react";

//styles
import { Flex, Box, Grid, GridItem } from "@chakra-ui/react";

//files
import Directory from "../../components/directory";
import Hero from "../../components/hero";
import About from "../../components/about";
import ContactForm from "../../components/contact-form";

const HomePage = () => {
	return (
		<Flex width="100%" h="100%" className="App" direction="column">
			<Grid
				// templateRows="repeat(3,fr)"
				templateColumns="1fr"
				placeItems="center stretch"
				h="100%"
				w="100%"
				area=" 2 / 1 / 2 / 4"

				// border="solid magenta"
				// gap={5}
			>
				<GridItem rowSpan={1} colSpan={1} height=" calc(var(--vh, 1vh) * 100)">
					<Hero />
				</GridItem>
				<GridItem
					rowSpan={2}
					colSpan={1}
					minH=" calc(var(--vh, 1vh) * 200)"
					// bgGradient={
					// 	"linear(transparent 20%,rgb(255, 255, 255,.7),rgb(241, 242, 237,.6),rgb(228, 230, 219,.5),rgb(214, 217, 201,.4),rgb(201, 205, 183,.4),rgb(188, 193, 166,.4),rgb(175, 181, 149,.4),rgb(162, 169, 132,.4),rgb(149, 157, 116,.4),rgb(136, 145, 99,.4),rgb(123, 134, 83,.4),rgb(72, 90, 19,.4))"
					// }
				>
					<About />
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

				<GridItem rowSpan={1} colSpan={1} height="auto">
					<Flex
						h="150vh"
						direction="column"
						align="center"
						padding="1.25rem 5rem"
						// background="red"

						// backgroundImage="url('/assets/noise.svg')"
					>
						{/* <ContactForm /> */}
					</Flex>
				</GridItem>
			</Grid>
		</Flex>
	);
};

export default HomePage;
