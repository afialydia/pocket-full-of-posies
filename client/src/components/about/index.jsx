import React from "react";

//styles
import {
	Grid,
	GridItem,
	Center,
	Flex,
	Box,
	Heading,
	Text,
	useBreakpointValue,
	Image,
	useMediaQuery,
} from "@chakra-ui/react";
import "./about.styles.scss";
import BestSellers from "../best-seller";

const About = () => {
	const [isVariableHeight] = useMediaQuery(
		"(max-width: 650px) and (min-width: 380px)"
	);

	const basePad = isVariableHeight ? "25%" : "75%";

	return (
		<Flex
			justify={"space-between"}
			align="center"
			h="100%"
			flexDir="column"
			color="#4a4a4a"
			w="100%"
			wrap="wrap"
			paddingTop={useBreakpointValue({ base: 4, md: "1.6rem" })}
		>
			<Center grow={2} flexDirection="column" w="100%" h="100%" minH={{base:'750px'}} >
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
				<Box w="100%" borderBottom="solid .4px rgb(74,74,74)" />
				<Center
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
						w="100%"
					>
						<Center
							position="relative"
							w="100%"
							h="100%"
							p={4}
							marginBottom={{
								base: basePad,
								md: "20%",
								lg: "0",
							}}
							flexDirection="column"
						>
							<Image
								w={{ base: "100%", md: "25rem" }}
								objectFit="contain"
								minWidth="auto"
								src="assets/img/blue.jpg"
								borderRadius={{
									base: "none",
									md: "47% 53% 67% 33% / 30% 47% 53% 70% ",
								}}
							/>
							<Flex
								h="auto"
								justify="center"
								p={4}
								maxW="85%"
								display={{ base: "inline-block", lg: "none" }}
								position="absolute"
								background="rgb(245,245,245,.9)"
								direction="column"
								transform={"translate(0px,75%)"}
								backdropFilter="blur(2rem)"
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
						</Center>

						<Center flexDirection="column" p={4} w="100%">
							<Flex
								h="auto"
								justify="center"
								p={{ base: "1rem", md: "2rem" }}
								w="100%"
								maxW="31.25rem"
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
			<Box flexDirection="column" h="100%" w="100%">
				<Grid
					minH="100%"
					w={{ base: "100%", md: "80%" }}
					templateRows="repeat(4,1fr)"
					templateColumns="repeat(6, 1fr)"
					gap={4}
					p={{ base: 4 }}
					margin="0 auto"
					marginY="2.5rem"
					justifyItems="stretch"
					alignItems="stretch"
				>
					<GridItem h="100%" padding={4} rowSpan={1} colSpan={6}>
						<Center w="100%" h="100%">
							<Heading size="4xl"> BEST SELLERS</Heading>
						</Center>
					</GridItem>
					<BestSellers />
				</Grid>
			</Box>
		</Flex>
	);
};

export default About;
