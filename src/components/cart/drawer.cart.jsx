import React, { useRef } from "react";
import {
	useDisclosure,
	Drawer,
	DrawerContent,
	Spacer,
	DrawerBody,
	Flex,
	Box,
} from "@chakra-ui/react";
import CartIcon from "./icon.cart";
import CartCloseButton from "./close.cart";
import CartItems from "./items.cart";

const CartDrawer = () => {
	const contactRef = useRef();
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Box>
			<CartIcon innerRef={contactRef} onOpen={onOpen} />

			<Drawer
				placement="right"
				onClose={onClose}
				isOpen={isOpen}
				finalFocusRef={contactRef}
				preserveScrollBarGap
				isFullHeight
				size="md"
				padding=".25rem"
			>
				<DrawerContent
					backdropFilter="blur(2rem)"
					background="linear-gradient(
    to right bottom,
    rgba(245,245,245, 0.4),
    rgba(74,163,147, 0.3))"
					filter="contrast(100%) brightness(100%)"
				>
					<DrawerBody
						background="transparent"
						filter="contrast(100%) brightness(100%)"
					>
						<Flex direction="column" h="100%" p="1em">
							<Spacer />
							<CartCloseButton onClose={onClose} />
							<CartItems onClose={onClose} />
						</Flex>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</Box>
	);
};

export default CartDrawer;
