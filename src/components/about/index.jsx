import React from "react";
import { useSelector } from "react-redux";

import MenuItem from "../menu-item";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

//styles
import {
	Center,
	Flex,
	Square,
	Box,
	Heading,
	chakra,
	Text,
	useBreakpointValue,
	Spacer,
	Image,
} from "@chakra-ui/react";
// import "./homepage.styles.scss";

const About = () => {
	const sections = useSelector(selectDirectorySections);
	return (
		<Center
			// border="solid"

			h="100%"
			flexDir="column"
			color="#4a4a4a"
			w="100%"
			wrap="wrap"
			paddingTop={useBreakpointValue({ base: 4, md: "1.6rem" })}
		>
			<Center flexDirection="column" w="100%">
				<Heading size="4xl">FLOWERS DELIVERED</Heading>
				<Text
					w="100%"
					textAlign={"center"}
					borderBottom="solid .4px"
					fontSize="xl"
					paddingBottom={useBreakpointValue({ base: 4, md: "1.6rem" })}
				>
					Send modern and unique bouquets directly to their door.
				</Text>
			</Center>{" "}
			<Center
				// border="solid"
				// my={8}
				paddingTop={4}
				flexDirection="column"
				h="90%"
				w="80%"
				marginBottom={4}
			>
				<Flex p={4} h="100%" w="100%" border="solid .4px">
					<Center
						// position="relative"
						overflow="hidden"
						w="100%"
						h="100%"
						overflow="hidden"
						// border="solid"
						p={4}
					>
						<Image
							w="auto"
							h="100%"
							// position="absolute"
							objectFit="contain"
							minWidth="auto"
							src="assets/img/blue.jpg"
						/>
					</Center>
					<Center flexDirection="column" p={4} w="100%">
						{/* <Spacer h="10%" /> */}
						<Center h="20%">
							<Heading textAlign={"center"} h="auto">
								About our shop!
							</Heading>
						</Center>
						{/* <Spacer h="10%" /> */}
						<Center h="80%" w="100%" background="rgb(206,155,116,.4)">
							<Text></Text>
						</Center>
					</Center>
				</Flex>
			</Center>
			<Center
				// my={8}
				paddingTop={4}
				flexDirection="column"
				h="90%"
				w="80%"
				marginBottom={4}
			>
				<Flex
					h="100%"
					w="100%"
					direction="column"
					align="center"
					justifyContent={"space-evenly"}
					// border={"solid red"}
				>
					{/* <Spacer h="100%" border={'solid'}/> */}
					<Flex
						align={"center"}
						justify="center"
						// h="100%"
						// border="solid"
					>
						{/* <Spacer /> */}
						<Heading h="auto" size="2xl" textAlign="center">
							{" "}
							BEST SELLERS
						</Heading>
					</Flex>

					<Flex
						// border="solid green"
						// h="100%"
						w="100%"
						paddingY={4}
						align="baseline"
						alignContent={"center"}
						justify="space-between"
						direction={{ base: "column", md: "row" }}
					>
						<Square border="solid" h="250px" w="250px" />
						<Square border="solid" h="250px" w="250px" />
						<Square border="solid" h="250px" w="250px" />
						<Square border="solid" h="250px" w="250px" />
					</Flex>
					<Center w="60%" border={"solid"}>
						<Text>See more</Text>
					</Center>
				</Flex>
				{/* <Spacer/> */}
				{/* <chakra.span h="100%" w="4.375rem" className="logo-container">
					<Logo className="logo" />
				</chakra.span> */}
			</Center>
		</Center>
	);
};

export default About;
