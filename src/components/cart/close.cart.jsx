import React, { useState } from "react";
import { Flex, Heading, Text, chakra } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { selectCurrentUser } from "../../redux/user/user.selectors";

import { signOutStart } from "../../redux/user/user.actions";

const CartCloseButton = ({ onClose, signOutStart, currentUser }) => {
	return (
		<Flex color="whitesmoke" w="100%" justify="space-between" h="15%">
			{currentUser ? (
				<chakra.div
					className="option"
					onClick={() => {
						signOutStart();
					}}
				>
					<Heading> SIGN OUT</Heading>
				</chakra.div>
			) : (
				<Link className="option" to="/signin">
					<Text _hover={{ cursor: "pointer" }} onClick={() => onClose()}>
						{" "}
						Have an account?
						<br /> <chakra.span color="#4a4a4a" fontWeight={"bold"}>Sign In</chakra.span> to access your saved cart.
					</Text>
				</Link>
			)}
			<Text
				onClick={() => onClose()}
				_hover={{ color: "whitesmoke", cursor: "pointer" }}
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
