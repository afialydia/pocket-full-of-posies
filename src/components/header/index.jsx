import React from "react";
import { Link } from "react-router-dom";

import {
	Flex,
	Heading,
	chakra,
	Box,
	Spacer,
	useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import "./header.styles.scss";
import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/Logo.svg";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartIcon from "../cart-icon";
import CartDropdown from "../cart-dropdown";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import { signOutStart } from "../../redux/user/user.actions";

const Header = ({ currentUser, hidden, signOutStart }) => {
	const MotionFlex = motion(Flex, { forwardMotionProps: true });

	const [lastYPos, setLastYPos] = React.useState(0);
	const [shouldShowActions, setShouldShowActions] = React.useState(true);

	React.useEffect(() => {
		function handleScroll() {
			const yPos = window.scrollY;
			const isScrollingUp = yPos < lastYPos;

			setShouldShowActions(isScrollingUp);
			setLastYPos(yPos);
		}

		window.addEventListener("scroll", handleScroll, false);

		return () => {
			window.removeEventListener("scroll", handleScroll, false);
		};
	}, [lastYPos]);

	return (
		<Flex
			// h="100%"
			w="100%"
			justify="space-between"
			// marginBottom="1.5rem"
			className="header"
			positon="fixed"
			// border="solid yellow"
			align="center"
			// align="flex-end"
			// border="solid red .25px"
			position="fixed"
			zIndex={6}
			top="0"
			paddingTop={useBreakpointValue({ base: 4, md: '1.6rem' })}
			paddingRight={useBreakpointValue({ base: 4, md: '1.6rem' })}
		>
			{/* <chakra.span h="100%" w="4.375rem" className="logo-container">
			<Link to="/">
				<Logo className="logo" />
			</Link>
		</chakra.span> */}
			<Spacer />
			<Flex
				w="50%"
				h="100%"
				// align="center"
				justify="flex-end"
				className="options"
				// border="solid"
			>
				{" "}
				<motion.div
					zIndex={3}
					initial={{ opacity: 1 }}
					animate={{ opacity: shouldShowActions ? 1 : 0 }}
					transition={{ opacity: { duration: 0.2 } }}
				>
					<Link className="option" to="/">
						<Heading>HOME</Heading>
					</Link>
				</motion.div>
				<Box w="1rem" />
				<motion.div
					zIndex={3}
					initial={{ opacity: 1 }}
					animate={{ opacity: shouldShowActions ? 1 : 0 }}
					transition={{ opacity: { duration: 0.2 } }}
				>
					<Link className="option" to="/shop">
						<Heading>SHOP</Heading>
					</Link>
				</motion.div>
				<Box w="1rem" />
				<motion.div
					zIndex={3}
					initial={{ opacity: 1 }}
					animate={{ opacity: shouldShowActions ? 1 : 0 }}
					transition={{ opacity: { duration: 0.2 } }}
				>
					<Link className="option" to="/contact">
						<Heading>CONTACT</Heading>
					</Link>
				</motion.div>
				<Box w="1rem" />
				<motion.div
					zIndex={3}
					initial={{ opacity: 1 }}
					animate={{ opacity: shouldShowActions ? 1 : 0 }}
					transition={{ opacity: { duration: 0.2 } }}
				>
					{currentUser ? (
						<chakra.div className="option" onClick={() => signOutStart()}>
							<Heading> SIGN OUT</Heading>
						</chakra.div>
					) : (
						<Link className="option" to="/signin">
							<Heading> SIGN IN</Heading>
						</Link>
					)}
				</motion.div>
				<Box w="1rem" />
				<CartIcon />
			</Flex>
			{hidden ? null : <CartDropdown />}{" "}
		</Flex>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
	signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
