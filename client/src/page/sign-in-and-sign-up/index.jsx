import React, { useState } from "react";
import SignIn from "../../components/sign-in";
import SignUp from "../../components/sign-up";
import { Flex, Center, Text } from "@chakra-ui/react";

const SignInAndSignUpPage = () => {
	const [toggle, setToggle] = useState(false);

	const togglePages = () => {
		setToggle(!toggle);
	};
	
	

	return (
		<Center
			justify="space-evenly"
			p={4}
			paddingTop="17rem"
			paddingBottom="5rem"
			minH=" calc(var(--vh, 1vh) * 100)"
			flexDirection="column"
		>
			<Center
				color="#4a4a4a"
				shadow="lg"
				background="rgb(239,239,239,.7)"
				w={{ base: "85%", md: "60%" }}
				maxW="35rem"
				h="100%"
				p={4}
			>
				{toggle ? <SignUp /> : <SignIn />}
			</Center>
			<Flex
				p={4}
				marginTop=".25rem"
				cursor="pointer"
				onClick={() => togglePages()}
				color="#4a4a4a"
			>
				{toggle ? (
					<Text fontSize="lg">Already have an account? Sign In here.</Text>
				) : (
					<Text fontSize="lg">No account? Sign Up here.</Text>
				)}
			</Flex>
		</Center>
	);
};

export default SignInAndSignUpPage;
