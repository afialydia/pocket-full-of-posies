import React from "react";
// import { useHistory,useRouteMatch } from "react-router";
import {useNavigate } from "react-router-dom"
//styles
import { Heading, Flex, Text, Box } from "@chakra-ui/react";
import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size,  linkUrl }) => {
  let navigate = useNavigate();

	return (
		<Flex
			minW="30%"
			h="15rem"
			flex="1 1 auto"
			align="center"
			justify="center"
			overflow="hidden"
			m="0 7.5px 15px"
			className={`${size} menu-item`}
			bgGradient={"linear(to-br, blackAlpha.600, transparent)"}
			onClick={() => navigate(`/${linkUrl}`)}
		>
			<Box
				className="background-image"
				backgroundPosition={"center"}
				backgroundSize={"cover"}
				bgImage={`url(${imageUrl})`}
			/>
			<Flex
				className="content"
				h="5.625rem"
				padding="0 1.563rem"
				direction="column"
				align="center"
				justify="center"
				border="solid black 1px"
				shadow="2xl"
			>
				<Heading as="h1" opacity={1} color="#4a4a4a" marginBottom={".5rem"}>
					{title.toUpperCase()}
				</Heading>{" "}
				<Text color="black" size={"lg"}>
					Shop Now
				</Text>
			</Flex>
		</Flex>
	);
};

export default MenuItem;
