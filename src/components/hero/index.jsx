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
		>
			<video className="video-bg" autoPlay muted loop>
				<source src="assets/posies.mp4" type="video/mp4" />
			</video>
			<VStack
				w={"full"}
				justify={"flex"}
				align="flex"
				p={useBreakpointValue({ base: 4, md: 8 })}
				bgGradient={"linear(to-br, blackAlpha.600, transparent)"}
				// border="solid teal"
			>
				<Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
					<Heading size={"4xl"}>
						POCKET
						<br />
						FULL OF
						<br />
						POSIES
					</Heading>

					<Stack direction={"row"}>
						<Button
							bg={"blue.400"}
							rounded={"full"}
							color={"white"}
							_hover={{ bg: "blue.500" }}
						>
							Show me more
						</Button>
						<Button
							bg={"whiteAlpha.300"}
							rounded={"full"}
							color={"white"}
							_hover={{ bg: "whiteAlpha.500" }}
						>
							Show me more
						</Button>
					</Stack>
				</Stack>
			</VStack>
		</Flex>
	);
}
