import React from "react";
import {
	Text,
	Flex,
	Box,
	Center,
chakra,
	useBreakpointValue,
	Button,
	Icon,
	Link as ChakraLink,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {

	const [lastYPos, setLastYPos] = React.useState(0);
	const [shouldShowActions, setShouldShowActions] = React.useState(true);

	const display = useBreakpointValue({ base: "none", sm: "flex" });
	const socialAccounts = [
		{ icon: FaGithub, path: "https://github.com/afialydia", title: "Github" },
		{
			icon: FaLinkedin,
			path: "https://www.linkedin.com/in/afia-caruso/",
			title: "Linkedin",
		},
		{
			icon: FaEnvelope,
			path: "mailto:afiacaruso@gmail.com?subject=Hi Afia, Let's Talk Turkey",
			title: "Email",
		},
	];

	return (
		<Center
			as="footer"
			display="flex"
			flexDirection="column"
			// marginTop=".75rem"
			height="40%"
			minH="12rem"
			background={"#f0f0ee "}
			color={"#4d4d4d"}
			className="footer"
		>
			<Flex
				paddingTop="8px"
				alignItems="center"
				color="#4d4d4d"

				// justify="center"
				// border="solid"
				// borderTop="solid"
				// borderBottom="solid"
			>
				{socialAccounts.map((item, index) => (
					<ChakraLink
						href={item.path}
						aria-label={item.title}
						_focus={{ outline: "none" }}
						key={index}
						isExternal
					>
						<Button
							color="#4d4d4d"
							width="100%"
							aria-label={item.title}
							variant="ghost"
							_hover={{ color: "rgb(75,119,137)", cursor: "pointer" }}
						>
							<Icon
								as={item.icon}
								w="5"
								h="5"
								color="#4d4d4d"
								_hover={{ color: "rgb(75,119,137)", cursor: "pointer" }}
							/>
						</Button>
					</ChakraLink>
				))}
			</Flex>
			<Center
				display="flex"
				flexDirection="column"
				paddingBottom="8px"
				color="#4d4d4d"
			>
				<Text>Made with 🌱 in a Room with a View</Text>
				<Text>
					Designed and Developed by{" "}
					<ChakraLink
						href="https://www.afiacaruso.com"
						aria-label={"Afia Caruso Portfolio"}
						_focus={{ outline: "none" }}
						isExternal
					>
						<chakra.span fontWeight={"bold"}> Afia Caruso</chakra.span>
					</ChakraLink>
				</Text>
				<Text>Copyright © 2022</Text>
			</Center>
		</Center>
	);
};

export default Footer;
