import React from "react";
import {
	Text,
	Flex,
	Spacer,
	Box,
	Center,
	useMediaQuery,
	useColorModeValue,
	useBreakpointValue,
	Button,
	Icon,
	Link as ChakraLink,
	Tooltip,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";



const Footer = () => {
	const inverse = useColorModeValue("#f0f0ee", "#44324c");
	const inversebg = useColorModeValue("#44324c", "#f0f0ee");
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
			height="30%"
			minH="10rem"
			background={inversebg}
			color={inverse}
			className="footer"
		>
			<Flex
				paddingTop="8px"
				alignItems="center"
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
						// border='solid'
					>
						<Button
							width="100%"
							aria-label={item.title}
							variant="ghost"
							_hover={{ color: "rgb(126,164,147)", cursor: "pointer" }}
						>
							<Icon
								as={item.icon}
								w="5"
								h="5"
								color={inverse}
								_hover={{ color: "rgb(126,164,147)", cursor: "pointer" }}
							/>
						</Button>
					</ChakraLink>
				))}
			</Flex>
			<Center
				display="flex"
				flexDirection="column"
				//  border="solid"
				paddingBottom="8px"
				// fontSize=".75em"
				color={inverse}
			>
				<Text>Made with 🌱 in a Room with a View</Text>
				<Text>Copyright © 2021 Afia Caruso</Text>
			</Center>
		</Center>
	);
};

export default Footer;
