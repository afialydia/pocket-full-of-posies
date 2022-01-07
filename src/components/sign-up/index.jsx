import React, { useState } from "react";
import FormInput from "../form-input";
import CustomButton from "../custom-button";

import { connect } from "react-redux";
import { emailSignUpStart } from "../../redux/user/user.actions";

import { Center, chakra, Flex, Heading } from "@chakra-ui/react";

const SignUp = ({ emailSignUpStart }) => {
	const [userCreds, setUserCreds] = useState({
		displayName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const { displayName, email, password, confirmPassword } = userCreds;

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			alert("Passwords do not match");
			return;
		}

		emailSignUpStart({ displayName, email, password });
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUserCreds({ ...userCreds, [name]: value });
	};

	return (
		<Center p={4} w="100%" h="100%" flexDirection="column">
			<Heading>SIGN UP</Heading>
			<chakra.form w="100%" h="100%" maxW="30rem" onSubmit={handleSubmit}>
				<FormInput
					type="text"
					name="displayName"
					value={displayName}
					onChange={handleChange}
					label="Display Name"
					required
				/>
				<FormInput
					type="email"
					name="email"
					value={email}
					onChange={handleChange}
					label="Email"
					required
				/>
				<FormInput
					type="password"
					name="password"
					value={password}
					onChange={handleChange}
					label="Password"
					required
				/>
				<FormInput
					type="password"
					name="confirmPassword"
					value={confirmPassword}
					onChange={handleChange}
					label="Confirm Password"
					required
				/>
				<Flex direction="column">
					<CustomButton type="submit">SIGN UP</CustomButton>
				</Flex>
			</chakra.form>
		</Center>
	);
};

const mapDispatchToProps = (dispatch) => ({
	emailSignUpStart: (userCreds) => dispatch(emailSignUpStart(userCreds)),
});

export default connect(null, mapDispatchToProps)(SignUp);
