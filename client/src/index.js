//libraries
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { PersistGate } from "redux-persist/integration/react";

//styles
import theme from "./theme/theme.js";
import Fonts from "./theme/fonts.jsx";
import "./index.scss";

//files
import App from "./App.jsx";
import { store,persistor } from "./redux/store.js";
import ScrollUp from "./utils/scroll-up.js";


const rootElement = document.getElementById("root");

ReactDOM.render(
	<ChakraProvider theme={theme}>
		<Fonts />
		<Provider store={store}>
			<Router>
				<PersistGate persistor={persistor}>
					<ScrollUp/>
					<App />
				</PersistGate>
			</Router>
		</Provider>
	</ChakraProvider>,
	rootElement
);
