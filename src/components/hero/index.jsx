import {
	Stack,
	Flex,
	Button,
	Heading,
	VStack,
	chakra,
	useBreakpointValue,
} from "@chakra-ui/react";

export default function Hero() {
	return (
		<Flex
			className="hero"
			w={"full"}
			minH="100%"
			position="relative"
			overflow="hidden"
			// bgGradient="linear(to-b, transparent,transparent, white)"
		>
			<video className="video-bg" autoPlay muted >
				<source src="assets/posies.mp4" type="video/mp4" />
			</video>
			<VStack
				w={"full"}
				justify={"flex"}
				align="flex"
				p={useBreakpointValue({ base: 4, md: 8 })}
				bgGradient={"linear(to-br, blackAlpha.600, transparent)"}
				// border="solid"
			>
				<Stack
					// border="solid teal"
					maxW={"2xl"}
					align={"flex-start"}
					spacing={6}
					h="90%"
				>
					<Heading size={"4xl"}>
						POCKET
						<br />
						FULL OF
						<br />
						POSIES
					</Heading>
				</Stack>
				<Stack
					h="10%"
					// border="solid teal"
					alignSelf={"flex-end"}
					align="center"
					justifySelf="flex-end"
					justify="center"
					direction={"row"}
				>
					<Button
						bg={"whiteAlpha.300"}
						rounded={"full"}
						color={"white"}
						_hover={{ bg: "whiteAlpha.500" }}
					>
						Show me more
					</Button>
				</Stack>
			</VStack>
		</Flex>
	);
}
