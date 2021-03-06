import React from "react";
import { useSelector } from "react-redux";

import MenuItem from "../menu-item";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

//styles
import { Grid, GridItem, Heading, Center } from "@chakra-ui/react";

const Directory = () => {
	const sections = useSelector(selectDirectorySections);
	return (
		<Grid
			w={{ base: "100%", md: "80%" }}
			maxW="1460px"
			templateRows="repeat(5, 1fr)"
			templateColumns="repeat(6, 1fr)"
			gap={2}
			p={4}
		>
			<GridItem h="100%" padding={4} rowSpan={1} colSpan={6}>
				<Center color="#4a4a4a" w="100%" h="100%">
					<Heading size="4xl">DIRECTORY</Heading>
				</Center>
			</GridItem>
			{sections.map(({ id, ...otherSectionProps }) => {
				return <MenuItem key={id} {...otherSectionProps} />;
			})}
			<GridItem h="100%" padding={4} rowSpan={1} colSpan={6} />
		</Grid>
	);
};

export default Directory;
