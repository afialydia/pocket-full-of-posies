import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Flex, chakra, Image, Center, Text, useToast } from "@chakra-ui/react";
import { addItem } from "../../redux/cart/cart.actions";

const CollectionItem = ({ item, imageUrl }) => {
	const dispatch = useDispatch();
	const { id, name, price, description } = item;

	const [showInfo, setShowInfo] = useState(false);

	const toast = useToast();
	return (
		<Flex
			key={id}
			w="100%"
			h="auto"
			p={4}
			align="center"
			justify="center"
			bg="rgb(245,245,245,.6)"
			direction="column"
			shadow={"md"}
			color="#4a4a4a"
			position="relative"
			maxW="450px"
		>
			<Image
				h="90%"
				minH={{ base: "31.25rem", md: "19.688rem" }}
				maxH="31.25rem"
				objectFit="cover"
				backgroundSize={"cover"}
				backgroundPosition={"center"}
				marginBottom={"5px"}
				minWidth="auto"
				src={imageUrl}
			/>
			<Center
				h="10%"
				w="auto"
				direction="column"
				p={4}
				position="absolute"
				background="rgb(245,245,245,.9)"
				
				bottom={20}
				left="auto"
				right={7}
				backdropFilter="blur(2rem)"
				borderRadius={"100% 32% 58% 79% / 62% 87% 44% 65%"}
			>
				<chakra.span onClick={() => setShowInfo(!showInfo)}>
					<Text
						h="10%"
						fontWeight="bold"
						justifySelf="flex-end"
						textAlign="flex-end"
						_hover={{ cursor: "pointer", textDecoration: "underline" }}
					>
						Learn More{" "}
					</Text>
				</chakra.span>
			</Center>
			<Flex
				h="70%"
				w="80%"
				direction="column"
				p={4}
				position="absolute"
				background="rgb(245,245,245,.9)"
				
				transform={"translate(0px,-5%)"}
				backdropFilter="blur(2rem)"
				display={showInfo ? "inline-block" : "none"}
			>
				<Flex h="10%" fontWeight="bold" justify="space-between" align="center">
					<Text>{name}</Text>
					<chakra.span onClick={() => setShowInfo(!showInfo)} paddingRight={2}>
						<Text _hover={{ cursor: "pointer", textDecoration: "underline" }}>
							CLOSE
						</Text>
					</chakra.span>
				</Flex>
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
				<chakra.span>
					<Text
						h="10%"
						w="auto"
						fontWeight="bold"
						justifySelf="flex-end"
						textAlign="flex-end"
						_hover={{ cursor: "pointer", textDecoration: "underline" }}
						onClick={() => {
							dispatch(addItem(item));
							setShowInfo(!showInfo);
							toast({
								title: `${name} added to cart`,
								position: "bottom-right",
								isClosable: true,
								status: "success",
							});
						}}
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
