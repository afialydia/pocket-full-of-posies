import React from "react";
import { Routes, Route } from "react-router";

//styles
import { Flex } from "@chakra-ui/react";

//files
import HomePage from "./page/homepage";
import Footer from "./components/footer/footer.component";

const App = () => {
	return (
		<Flex width="100%" h="100%" className="App" direction="column">
			<Routes>
				<Route path="/" element={<HomePage />} />
			</Routes>
			<Footer />
		</Flex>
	);
};

export default App;
