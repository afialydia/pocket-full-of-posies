import { all, call, takeLatest, put } from "redux-saga/effects";

import UserActionTypes from "../user/user.types";
import { clearCart, resolvePurchaseSession, pullPurchasedItems } from "./cart.actions";
import { CartActionTypes } from "./cart.types";

export function* clearCartOnSignOut() {
	yield put(clearCart());
}

export function* onSignOutSuccess() {
	yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* pullPurchased() {
	yield put(pullPurchasedItems());
}

export function* onPullPurchased() {
	yield takeLatest(CartActionTypes.PULL_PURCHASED, pullPurchased);
}

export function* resolvePurchase() {
	yield put(resolvePurchaseSession());
}

export function* onResolvePurchased() {
	yield put(CartActionTypes.RESOLVE_PURCHASE, resolvePurchase);
}

export function* cartSagas() {
	yield all([call(onSignOutSuccess)]);
}
