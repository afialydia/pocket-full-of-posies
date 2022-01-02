import React from "react";
import { useSelector } from "react-redux";

import MenuItem from "../menu-item";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

//styles
import { Flex } from "@chakra-ui/react";
// import "./homepage.styles.scss";


const Directory = () => {
	const sections = useSelector(selectDirectorySections);
		return (
			<Flex w="100%" wrap="wrap" justify="space-between">
				{sections.map(({ id,...otherSectionProps}) => {
					return (
						<MenuItem  key={id}{...otherSectionProps} />
					);
				})}
			</Flex>
		);
	
}

export default Directory;
