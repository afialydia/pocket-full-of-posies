//libraries
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

//styles
import theme from "./theme/theme.js";
import Fonts from "./theme/fonts.jsx";
import "./index.scss";

//files
import App from "./App";
import { store } from "./redux/store";

const rootElement = document.getElementById("root");

ReactDOM.render(
	<ChakraProvider theme={theme}>
    <Fonts/>
		<Provider store={store}>
			<Router>
				<App />
			</Router>
		</Provider>
	</ChakraProvider>,
	rootElement
);
