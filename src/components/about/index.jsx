import React from "react";
import { useSelector } from "react-redux";

import MenuItem from "../menu-item";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

//styles
import {
	Grid,
	GridItem,
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
	Divider,
	Wrap,
	WrapItem,
	useMediaQuery,
} from "@chakra-ui/react";
import "./about.styles.scss";
import BestSeller from "../best-seller";

const About = () => {
	const [isVariableHeight] = useMediaQuery(
		"(max-width: 650px) and (min-width: 380px)"
	);

	const basePad = isVariableHeight ? "25%" : "75%";

	return (
		<Flex
			justify={"space-between"}
			align="center"
			// border="solid red"
			h="100%"
			flexDir="column"
			color="#4a4a4a"
			w="100%"
			wrap="wrap"
			paddingTop={useBreakpointValue({ base: 4, md: "1.6rem" })}
		>
			<Center grow={2} flexDirection="column" w="100%" h="100%">
				<Center flexDirection="column">
					<Heading textAlign={"center"} size="4xl">
						DAILY FLORAL DELIVERY
					</Heading>
					<Text
						w="100%"
						textAlign={"center"}
						fontSize="xl"
						paddingBottom={useBreakpointValue({ base: 4, md: "1.5rem" })}
						px="1.5rem"
						display={{ base: "none", md: "inline-block" }}
					>
						Send modern and unique bouquets directly to their door.
					</Text>
				</Center>
				<Box
					// my={{ base: 4, md: "1.5rem" }}
					w="100%"
					borderBottom="solid .4px rgb(74,74,74)"
				/>
				<Center
					// border="solid pink"
					// my={8}
					paddingTop={4}
					flexDirection="column"
					h="90%"
					w={{ base: "100%", md: "80%" }}
					maxW="66.875rem"
					marginBottom={4}
				>
					<Flex
						direction={{ base: "column", lg: "row" }}
						p={{ base: "auto", md: 4 }}
						h="100%"
						// border="solid .4px rgb(74,74,74)"
						w="100%"
						// background="white"
					>
						<Center
							position="relative"
							w="100%"
							h="100%"
							// overflow="hidden"
							// border="solid purple"
							p={4}
							marginBottom={{
								base: basePad,
								md: "20%",
								lg: "0",
							}}
							// {{base:"70vh",md:"20rem", lg:4}}
							flexDirection="column"
							// className="image-stack"
						>
							<Image
								w={{ base: "100%", md: "25rem" }}
								// h="100%"
								// position="absolute"
								objectFit="contain"
								minWidth="auto"
								src="assets/img/blue.jpg"
								// position="relative"
								borderRadius={{
									base: "none",
									md: "47% 53% 67% 33% / 30% 47% 53% 70% ",
								}}
								// className="image-stack__item--top"
							/>
							<Flex
								// className="image-stack__item--top"
								h="auto"
								justify="center"
								p={4}
								// p={{ base: "1rem", md: "2rem" }}
								maxW="85%"
								display={{ base: "inline-block", lg: "none" }}
								position="absolute"
								background="rgb(245,245,245,.9)"
								// background="whitesmoke"
								direction="column"
								transform={"translate(0px,75%)"}
								backdropFilter="blur(2rem)"
								// zIndex={1}
								// border="solid green"
							>
								<Heading textAlign={"center"} h="auto">
									About our shop!
								</Heading>
								<Text
									p={4}
									sx={{
										textAlign: " justify",
										textjustify: "distribute",
										textAlignLast: "left",
									}}
									fontSize="xl"
								>
									Pocket Full of Posies is an online floral delivery agency
									based in Baltimore, Maryland. Shop from our wide selection of
									floral designs, bountiful bouquets, and other creative floral
									arrangements to send a meaningful gift in MD from a floral
									artist. Be prepared with the best gift for memorable days like
									Valentine’s Day and Mother’s Day, when deciding on a gift can
									be tough.{" "}
								</Text>
							</Flex>

							{/* <Spacer paddingBottom="60vh" border="solid teal" /> */}
						</Center>

						<Center flexDirection="column" p={4} w="100%">
							<Flex
								h="auto"
								justify="center"
								p={{ base: "1rem", md: "2rem" }}
								w="100%"
								maxW="31.25rem"
								// background="rgb(155,176,197,.4)"
								display={{ base: "none", lg: "inline-block" }}
								background="whitesmoke"
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
									fontSize="xl"
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
			<Box
				// my={8}
				// paddingTop={4}
				flexDirection="column"
				minH="60vh"
				w="100%"
				// position="absolute"
				// marginBottom={4}
				// border="solid red"
			>
				<Grid
					minH="100%"
					w={{ base: "100%", md: "80%" }}
					// minH=" calc(var(--vh, 1vh) * 100)"
					templateRows={{ base: "repeat(16,1fr)", md: "repeat(6, 1fr)" }}
					templateColumns="repeat(6, 1fr)"
					gap={4}
					p={{ base: 4 }}
					margin="0 auto"
					marginTop="5rem"
					// border="solid blue"
					justifyItems="stretch"
					alignItems="stretch"
				>
					<GridItem
						h="100%"
						padding={4}
						rowSpan={1}
						colSpan={6}
						// border="solid magenta"
					>
						<Center w="100%" h="100%">
							<Heading size="4xl"> BEST SELLERS</Heading>
						</Center>
					</GridItem>

					<GridItem
						h="100%"
						rowSpan={5}
						colSpan={{ base: 6, lg: 2 }}
						// border="solid magenta"
					>
						<BestSeller img="/assets/img/bs1.jpg" />
					</GridItem>
					<GridItem
						h="100%"
						rowSpan={5}
						colSpan={{ base: 6, lg: 2 }}
						// border="solid magenta"
					>
						<BestSeller img="/assets/img/bs3.jpg" />
					</GridItem>
					<GridItem
						h="100%"
						rowSpan={5}
						colSpan={{ base: 6, lg: 2 }}
						// border="solid magenta"
					>
						<BestSeller img='/assets/img/bs2.jpg' />
					</GridItem>
				</Grid>
			</Box>
		</Flex>
	);
};

export default About;
