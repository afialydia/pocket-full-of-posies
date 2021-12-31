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
					title: "OCCASIONS",
					id: 1,
					imageUrl: "/assets/img/occasions.jpg",
					linkUrl: "shop/occasions",
				},
				{
					title: "ARRANGEMENTS",
					id: 2,
					imageUrl: "assets/img/arrangements.jpg",
					linkUrl: "shop/arrangements",
				},
				{
					title: "NURSERY",
					id: 3,
					imageUrl: "assets/img/nursery.jpg",
					linkUrl: "shop/nursery",
				},
				{
					title: "PLANT CARE",
					id: 4,
					imageUrl: "assets/img/plant-care.jpg",
					linkUrl: "shop/plant-care",
					size: "large",
				},
				{
					title: "CONSULTATION",
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
