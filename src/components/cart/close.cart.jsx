import React from "react";
import { Flex, Text, chakra } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { selectCurrentUser } from "../../redux/user/user.selectors";

import { signOutStart } from "../../redux/user/user.actions";

const CartCloseButton = ({ onClose, signOutStart, currentUser }) => {
	return (
		<Flex w="100%" justify="space-between" h="15%">
			{currentUser ? (
				<chakra.div
					className="option"
					onClick={() => {
						signOutStart();
					}}
				>
					<Text
						color="whitesmoke"
						_hover={{ color: "#4a4a4a", fontWeight: "bold" }}
					>
						Ready to{" "}
						<chakra.span fontWeight="bold" color="whitesmoke">
							sign out,
						</chakra.span>{" "}
						{currentUser.displayName}?
					</Text>
				</chakra.div>
			) : (
				<Text
					_hover={{ cursor: "pointer", color: "#4a4a4a", fontWeight: "bold" }}
					onClick={() => onClose()}
				>
					<Link className="option" to="/signin">
						Have an account?
						<br />{" "}
						<chakra.span color="whitesmoke" fontWeight={"bold"}>
							Sign In
						</chakra.span>{" "}
						to access your saved cart.
					</Link>
				</Text>
			)}
			<Text
				onClick={() => onClose()}
				_hover={{ color: "#4a4A4A", cursor: "pointer", fontWeight: "bold" }}
				size="md"
			>
				close
			</Text>
		</Flex>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
	signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartCloseButton);
