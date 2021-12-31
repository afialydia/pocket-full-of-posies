import React from "react";
import { Routes, Route } from "react-router";

//styles
import { Flex } from "@chakra-ui/react";

//files
import HomePage from "./page/home";
import ShopPage from "./page/shop";
import Footer from "./components/footer/footer.component";
import Header from "./components/header";

const App = () => {
	return (
		<Flex width="100%" h="100%" className="App" direction="column">
			<Header/>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/shop" element={<ShopPage />} />
			</Routes>
			<Footer />
		</Flex>
	);
};

export default App;
