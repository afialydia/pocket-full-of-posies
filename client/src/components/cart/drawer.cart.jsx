import React, { useRef } from "react";
import {
	useDisclosure,
	Drawer,
	DrawerContent,
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
    rgba(113,139,156, 0.3))"
					filter="contrast(100%) brightness(100%)"
				>
					<DrawerBody
						background="transparent"
						filter="contrast(100%) brightness(100%)"
					>
						<Flex direction="column" h="100%" p="1em" justify="space-between">
							<Box>
								<CartCloseButton onClose={onClose} />
							</Box>
							<Box h="100%">
								<CartItems onClose={onClose} />
							</Box>
						</Flex>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</Box>
	);
};

export default CartDrawer;
