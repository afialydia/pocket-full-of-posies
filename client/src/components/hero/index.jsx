import { Flex, VStack } from "@chakra-ui/react";

export default function Hero() {
	return (
		<Flex
			className="hero"
			w={"full"}
			minH="100%"
			overflow="hidden"
		>
			<Flex
				className="hero"
				w={"full"}
				minH="100%"
				position="relative"
				overflow="hidden"
			>
				<video className="video-bg" autoPlay muted>
					<source src="assets/posies.mp4" type="video/mp4" />
				</video>
				<VStack
					w={"full"}
					h="100vh"
					bgGradient={"linear(to-br, blackAlpha.600, transparent)"}
				/>
			</Flex>
		</Flex>
	);
}
