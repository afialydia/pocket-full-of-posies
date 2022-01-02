import React, { useState } from "react";
import FormInput from "../form-input";
import CustomButton from "../custom-button";

import "./sign-up.styles.scss";
import { connect } from "react-redux";
import { emailSignUpStart } from "../../redux/user/user.actions";

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
		<div className="sign-up">
			<h2 className="title">I do not have an account</h2>
			<span>Sign up with your email and password</span>
			<form className="sign-up-form" onSubmit={handleSubmit}>
				<FormInput
					type="text"
					name="displayName"
					value={displayName}
					onChange={handleChange}
					label="Display Name"
					required
				/>{" "}
				<FormInput
					type="email"
					name="email"
					value={email}
					onChange={handleChange}
					label="Email"
					required
				/>{" "}
				<FormInput
					type="password"
					name="password"
					value={password}
					onChange={handleChange}
					label="Password"
					required
				/>{" "}
				<FormInput
					type="password"
					name="confirmPassword"
					value={confirmPassword}
					onChange={handleChange}
					label="Confirm Password"
					required
				/>
				<CustomButton type="submit">SIGN UP</CustomButton>
			</form>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	emailSignUpStart: (userCreds) => dispatch(emailSignUpStart(userCreds)),
});

export default connect(null, mapDispatchToProps)(SignUp);
