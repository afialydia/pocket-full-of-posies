import React from "react";
import {Text} from '@chakra-ui/react';
import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogleSignIn,...otherProps }) => (
	<button
		className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
		{...otherProps}
	>
		<Text>{children}</Text> 
	</button>
);

export default CustomButton;
