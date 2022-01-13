import React from "react";

//styles
import { Flex, Center, Text, Grid, GridItem, Heading } from "@chakra-ui/react";

//files
import Directory from "../../components/directory";
import Hero from "../../components/hero";
import About from "../../components/about";
import ContactForm from "../../components/contact-form";

const HomePage = () => {
	return (
		<Flex width="100%" h="100%" className="App" direction="column">
			<Grid
				templateColumns="1fr"
				placeItems="center stretch"
				h="100%"
				w="100%"
				area=" 2 / 1 / 2 / 4"
			>
				<GridItem rowSpan={1} colSpan={1} height=" calc(var(--vh, 1vh) * 100)">
					<Hero />
				</GridItem>
				<GridItem id="about" rowSpan={2} colSpan={1} minH=" calc(var(--vh, 1vh) * 150)">
					<About />
				</GridItem>

				<GridItem rowSpan={1} colSpan={1} minH=" calc(var(--vh, 1vh) * 100)">
					<Center h="100%">
						<Directory />
					</Center>
				</GridItem>

				{/* <GridItem rowSpan={1} colSpan={1}>
					<Flex
						id="about"
						h="100%"
						direction="column"
						align="center"
						padding={4}
						background="rgb(113,139,156,.5)"
						minH=" calc(var(--vh, 1vh) * 100)"
						flexDirection={"column"}
						// backgroundImage="url('/assets/noise.svg')"
					>
						<Center h="80%" flexDirection={"column"} border="solid">
							<Heading h="20%">ABOUT</Heading>
							<Text>Design and Development by Afia Caruso. </Text>
							<Text>This was built using React, Redux & Firebase. </Text>
						</Center>
					</Flex>
				</GridItem> */}
			</Grid>
		</Flex>
	);
};

export default HomePage;
