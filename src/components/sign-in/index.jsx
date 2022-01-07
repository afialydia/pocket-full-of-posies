import React, { useState } from "react";
import CustomButton from "../custom-button";
import FormInput from "../form-input";
import {
	googleSignInStart,
	emailSignInStart,
} from "../../redux/user/user.actions";
import { connect } from "react-redux";
import { Heading,chakra, Flex, Center } from "@chakra-ui/react";


const SignIn = ({ emailSignInStart, googleSignInStart }) => {
	const [userCreds, setUserCreds] = useState({
		email: "",
		password: "",
	});
	const { email, password } = userCreds;

	const handleSubmit = async (e) => {
		e.preventDefault();

		emailSignInStart(email, password);
	};

	const handleChange = (e) => {
		const { value, name } = e.target;
		setUserCreds({ ...userCreds, [name]: value });
	};

	return (
		<Center p={4}  w="100%" h="100%" flexDirection="column">
			<Heading >SIGN IN</Heading>
			<chakra.form w="100%" h="100%" maxW="30rem" onSubmit={handleSubmit}>
				<FormInput
					name="email"
					type="email"
					value={email}
					onChange={handleChange}
					label="Email"
					required
				/>
				<FormInput
					name="password"
					type="password"
					value={password}
					onChange={handleChange}
					required
					label="Password"
				/>
				<Flex  direction="column">
					<CustomButton type="submit">SIGN IN </CustomButton>
					<CustomButton
						onClick={googleSignInStart}
						type="button"
						isGoogleSignIn
					>
						Sign in w/ Google
					</CustomButton>
				</Flex>
			</chakra.form>
		</Center>
	);
};

const mapDispatchToProps = (dispatch) => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) =>
		dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
