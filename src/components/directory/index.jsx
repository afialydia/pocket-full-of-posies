import React from "react";

import MenuItem from "../menu-item";

//styles
import { Flex } from "@chakra-ui/react";
// import "./homepage.styles.scss";

class Directory extends React.Component {
	constructor() {
		super();

		this.state = {
			sections: [
				{
					title: "Occasions",
					id: 1,
					imageUrl: "/assets/img/occasions.jpg",
					linkUrl: "shop/occasions",
				},
				{
					title: "Arrangements",
					id: 2,
					imageUrl: "assets/img/arrangements.jpg",
					linkUrl: "shop/arrangements",
				},
				{
					title: "Nursery",
					id: 3,
					imageUrl: "assets/img/nursery.jpg",
					linkUrl: "shop/nursery",
				},
				{
					title: "Plant Care",
					id: 4,
					imageUrl: "assets/img/plant-care.jpg",
					linkUrl: "shop/plant-care",
					size: "large",
				},
				{
					title: "Consultation",
					id: 5,
					imageUrl: "assets/img/consultation.jpg",
					linkUrl: "shop/consultation",
					size: "large",
				},
			],
		};
	}
	render() {
		return (
			<Flex w="100%" wrap="wrap" justify="space-between">
				{this.state.sections.map(({ id,...otherSectionProps}) => {
					return (
						<MenuItem  key={id}{...otherSectionProps} />
					);
				})}
			</Flex>
		);
	}
}

export default Directory;
