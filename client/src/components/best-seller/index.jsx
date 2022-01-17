import React from "react";

//styles
import { GridItem, Center } from "@chakra-ui/react";
import CollectionItem from "../collection-item";

const BestSellers = () => {
	const bestsellers = [
		{
			id: 14,
			description:
				"One hour class offered online to learn the building blocks of plant care and maintenence.",
			imageUrl: "assets/img/nursery/nursery.vine.jpg",
			name: "Tradescantia Starter",
			price: 35,
		},
		{
			id: 4,
			description:
				"Join our Cacti Club to fast track your way to plant parenthood. This purchase is valid for 6 months and includes one small cactus of your choice per month.",
			imageUrl: "assets/img/subscriptions/subscriptions.4.jpg",
			name: "Cactus of the Month Club - Small",
			price: 75,
		},
		{
			description:
				"Send them something to talk about. Our Modern Floral Arrangements are minimal but exquisite.",
			id: 7,
			imageUrl: "assets/img/arrangements/arrangements.avantgarde.jpg",
			name: "Modern Floral Arrangement",
			price: 50,
		},
	];

	return bestsellers.map((item) => (
		<GridItem h="100%" rowSpan={3} colSpan={{ base: 6, lg: 2 }} key={item.id}>
			<Center h="100%">
				<CollectionItem key={item.id} item={item} imageUrl={item.imageUrl} />
			</Center>
		</GridItem>
	));
};

export default BestSellers;
