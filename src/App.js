import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";

//styles
import { Flex } from "@chakra-ui/react";

//files
import HomePage from "./page/home";
import ShopPage from "./page/shop";
import SignInAndSignUpPage from "./page/sign-in-and-sign-up";
import Footer from "./components/footer";
import Header from "./components/header";
import { auth } from "./firebase/firebase.utils";
import { checkUserSession } from "./redux/user/user.actions";

import { selectCurrentUser } from "./redux/user/user.selectors";

const App = () => {
	const currentUser = useSelector(selectCurrentUser);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(checkUserSession());
	}, [dispatch]);

	return (
		<Flex
			width="100%"
			h="100%"
			className="App"
			direction="column"
			bgGradient="radial-gradient(circle at 0px 0px, rgb(112,148,132,.5), rgba(245, 245, 245, 0) 36%), linear-gradient(275.1deg, rgba(160,174,192, 0.55) 2.9%, rgba(255, 255, 255, 0) 44.09%), linear-gradient(rgb(221,225,218,.65), rgba(221,225,218, 0.26), rgba(221,225,218, 0.46)), url(https://grainy-gradients.vercel.app/noise.svg)"
			filter="contrast(95%) brightness(100%)"
		>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/shop" element={<ShopPage />} />
				<Route
					exact
					path="/signin"
					element={currentUser ? <Navigate to="/" /> : <SignInAndSignUpPage replace />}
				/>
			</Routes>
			<Footer />
		</Flex>
	);
};

export default App;
