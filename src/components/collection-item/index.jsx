import React from "react";
import { useDispatch } from "react-redux";
import {
	Box,
	Heading,
	Flex,
	chakra,
	Image,
	Center,
	Text,
} from "@chakra-ui/react";
import { addItem } from "../../redux/cart/cart.actions";

const CollectionItem = ({ item, imageUrl }) => {
	const dispatch = useDispatch();
	const { id, name, price, description } = item;

	return (
		<Flex
			key={id}
			w={{
				base: "100%",
			}}
			h={{
				base: "100%",
			}}
			p={4}
			mx={2}
			align="center"
			justify="center"
			bg="rgb(245,245,245,.6)"
			direction="column"
			shadow={"md"}
			color="#4a4a4a"
			position="relative"
		>
			<Image
				// w={{ base: "100%", md: "25rem" }}
				h="90%"
				minH={{ base: "31.25rem", md: "19.688rem" }}
				maxH="31.25rem"
				// maxW="20rem"
				// position="absolute"
				objectFit="cover"
				backgroundSize={"cover"}
				backgroundPosition={"center"}
				marginBottom={"5px"}
				minWidth="auto"
				src={imageUrl}
			/>
			<Flex
				h="70%"
				w="80%"
				direction="column"
				p={4}
				position="absolute"
				background="rgb(245,245,245,.9)"
				direction="column"
				transform={"translate(0px,-5%)"}
				backdropFilter="blur(2rem)"
				// border="solid green"
			>
				<Text h="10%" fontWeight={"bold"}>
					{name}
				</Text>
				<Text
					sx={{
						textAlign: " justify",
						textjustify: "distribute",
						wordSpacing: ".125ch",
						textAlignLast: "left",
					}}
					paddingTop={4}
					h="80%"
				>
					{description}
				</Text>
				<chakra.span onClick={() => dispatch(addItem(item))}>
					<Text
						h="10%"
						fontWeight="bold"
						justifySelf="flex-end"
						textAlign="flex-end"
						_hover={{ textDecoration: "wavy underline", cursor: "pointer" }}
					>
						ADD TO CART
					</Text>
				</chakra.span>
			</Flex>

			<Flex
				w="100%"
				h="10%"
				align="center"
				justify="space-between"
				size="md"
				direction={{ base: "column", md: "row" }}
			>
				<chakra.span>{name}</chakra.span>

				<chakra.span>${price}.00</chakra.span>
			</Flex>
		</Flex>
	);
};

export default CollectionItem;
