import React, { useState } from "react";
import CustomButton from "../custom-button";
import FormInput from "../form-input";
import {
	googleSignInStart,
	emailSignInStart,
} from "../../redux/user/user.actions";
import { connect } from "react-redux";


// .sign-in {
// 	width: 380px;
// 	display: flex;
// 	flex-direction: column;
// 	margin: 10px 0;
// }

// .title {
// 	margin: 10px 0;
// }

// .buttons {
// 	display: flex;
// 	justify-content: space-between;
// }


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
		<div className="sign-in">
			<h2> I already have an account</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
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
				<div className="buttons">
					<CustomButton type="submit">SIGN IN </CustomButton>
					<CustomButton
						onClick={googleSignInStart}
						type="button"
						isGoogleSignIn
					>
						Sign in with Google
					</CustomButton>
				</div>
			</form>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) =>
		dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
