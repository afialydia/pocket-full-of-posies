import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
	[selectCart],
	(cart) => cart.cartItems
);

export const selectPurchasedItems = createSelector(
	[selectCart],
	(cart) => cart.purchasedItems
);

export const selectSessionID = createSelector(
	[selectCart],
	(cart) => cart.sessionID
);

export const selectCartHidden = createSelector(
	[selectCart],
	(cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
	[selectCartItems],
	(cartItems) =>
		cartItems.reduce(
			(accumalatedQuantity, cartItem) =>
				accumalatedQuantity + cartItem.quantity,
			0
		)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
	cartItems.reduce(
		(accumalatedQuantity, cartItem) =>
			accumalatedQuantity + cartItem.quantity * cartItem.price,
		0
	)
);

export const selectPurchaseTotal = createSelector([selectPurchasedItems], (purchasedItems) =>
	purchasedItems.reduce(
		(accumalatedQuantity, purchasedItem) =>
			accumalatedQuantity + purchasedItem.quantity * purchasedItem.price,
		0
	)
);