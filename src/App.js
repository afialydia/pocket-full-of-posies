import React from "react";
import { Routes, Route } from "react-router";

//styles
import { Flex } from "@chakra-ui/react";

//files
import HomePage from "./page/home";
import ShopPage from "./page/shop";
import SignInAndSignUpPage from "./page/sign-in-and-sign-up";
import Footer from "./components/footer";
import Header from "./components/header";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
	// constructor() {
	// 	super();
	// 	this.state = {
	// 		currentUser: null,
	// 	};
	// }

	// unsubscribeFromAuth = null;

	// componentDidMount() {
	// 	this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
	// 		this.setState({ currentUser: user });
	// 		console.log(user);
	// 	});
	// }

	// componentWillUnmount() {
	// 	this.unsubscribeFromAuth();
	// }

	render() {
		return (
			<Flex width="100%" h="100%" className="App" direction="column">
				<Header />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/shop" element={<ShopPage />} />
					<Route path="/signin" element={<SignInAndSignUpPage />} />
				</Routes>
				<Footer />
			</Flex>
		);
	}
}

export default App;
