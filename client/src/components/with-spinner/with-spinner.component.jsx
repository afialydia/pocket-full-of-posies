import React from "react";
import { Center } from "@chakra-ui/react";
import { motion } from "framer-motion";

const WithSpinner = (WrappedComponent) => {
	const Spinner = ({ isLoading, ...otherProps }) => {
		return isLoading ? (
			<Center w="100%" h="100vh">
				<motion.div
					style={{
						height: "100px",
						width: "100px",
						borderRadius: "10px",
					}}
					initial={{
						rotate: 0,
					}}
					animate={{
						rotate: 180,
					}}
					transition={{
						type: "tween",
						ease: "easeInOut",
						repeat: Infinity,
						repeatType: "reverse",
						repeatDelay: 1,
						duration: 2,
					}}
				></motion.div>
			</Center>
		) : (
			<WrappedComponent {...otherProps} />
		);
	};

	return Spinner;
};

export default WithSpinner;
