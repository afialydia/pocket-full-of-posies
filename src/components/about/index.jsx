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
	Skeleton,
} from "@chakra-ui/react";
import "./about.styles.scss";

const About = () => {
	const sections = useSelector(selectDirectorySections);
	return (
		<Center
			// border="solid red"
			// h="100%"
			flexDir="column"
			color="#4a4a4a"
			w="100%"
			wrap="wrap"
			paddingTop={useBreakpointValue({ base: 4, md: "1.6rem" })}
		>
			<Center flexDirection="column" w="100%" h="100%" >
				<>
					<Heading size="4xl">DAILY FLOWER DELIVERY</Heading>
					<Text
						w="100%"
						textAlign={"center"}
						borderBottom="solid .4px"
						fontSize="xl"
						paddingBottom={useBreakpointValue({ base: 4, md: "1.6rem" })}
					>
						Send modern and unique bouquets directly to their door.
					</Text>
				</>
				<Center
					// border="solid"
					// my={8}
					paddingTop={4}
					flexDirection="column"
					h="90%"
					w="80%"
					marginBottom={4}
				>
					<Flex p={4} h="100%" w="100%" background="white">
						<Center
							// position="relative"
							w="100%"
							h="100%"
							overflow="hidden"
							// border="solid"
							p={4}
							// className="image-stack"
						>
							<Image
								maxW="25rem"
								// h="100%"
								// position="absolute"
								objectFit="contain"
								minWidth="auto"
								src="assets/img/blue.jpg"
								// className="image-stack__item--top"
							/>
							{/* <Image
								w="100%"
								// h="100%"
								// position="absolute"
								objectFit="contain"
								minWidth="auto"
								src="assets/img/blue.jpg"
								className="image-stack__item--bottom"
							/> */}
						</Center>

						<Center flexDirection="column" p={4} w="100%">
							<Flex
								h="auto"
								justify="center"
								p={"2rem"}
								w="100%"
								background="rgb(206,155,116,.4)"
								direction="column"
							>
								<Heading textAlign={"center"} h="auto">
									About our shop!
								</Heading>
								<Text
									p="1rem"
									sx={{
										textAlign: " justify",
										textjustify: "distribute",
										textAlignLast: "left",
									}}
								>
									Shop from our wide selection of floral designs, bountiful
									bouquets, and other creative floral arrangements to send a
									meaningful gift in MD from a floral artist. Be prepared with
									the best gift for memorable days like Valentine’s Day and
									Mother’s Day, when deciding on a gift can be tough.{" "}
								</Text>
							</Flex>
						</Center>
					</Flex>
				</Center>
			</Center>
			<Center
				// my={8}
				paddingTop={4}
				flexDirection="column"
				h="100%"
				w="80%"
				marginBottom={4}
				// border="solid blue"
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
						h="100%"
						w="100%"
						paddingY={4}
						align="baseline"
						alignContent={"center"}
						justify="space-between"
						direction={{ base: "column", md: "row" }}
					>
						{" "}
						<Skeleton border="solid .4px" w="20%" minH="15.5rem" />
						<Skeleton border="solid .4px" w="20%" minH="15.5rem" />
						<Skeleton border="solid .4px" w="20%" minH="15.5rem" />
						<Skeleton border="solid .4px" w="20%" minH="15.5rem" />
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
