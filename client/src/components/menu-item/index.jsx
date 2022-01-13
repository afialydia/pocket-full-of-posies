import React from "react";
// import { useHistory,useRouteMatch } from "react-router";
import { useNavigate } from "react-router-dom";
//styles
import { Heading, Flex, GridItem, Text, Box } from "@chakra-ui/react";
import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size, linkUrl, colSpan, rowSpan }) => {
	let navigate = useNavigate();

	return (
		<GridItem
			colSpan={{ base: 6, md: colSpan }}
			rowSpan={{ base: 1, md: rowSpan }}
			h="auto"
		>
			<Flex
				minW="30%"
				h={"17rem"}
				flex="1 1 auto"
				align="center"
				justify="center"
				overflow="hidden"
				className={`${size} menu-item`}
				bgGradient={"linear(to-br, blackAlpha.600, transparent)"}
				onClick={() => navigate(`shop/${linkUrl}`)}
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
					// border="solid black 1px"
					shadow="2xl"
				>
					<Heading as="h1" opacity={1} color="#4a4a4a" 
					>
						{title.toUpperCase()}
					</Heading>{" "}
					<Text color="black" size={"lg"}>
						Shop Now
					</Text>
				</Flex>
			</Flex>
		</GridItem>
	);
};

export default MenuItem;
