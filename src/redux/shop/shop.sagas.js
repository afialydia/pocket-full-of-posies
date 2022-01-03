import { takeEvery, all, call, put } from "redux-saga/effects";

import {
	db,
	convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

import {
	fetchCollectionsSuccess,
	fetchCollectionsFailure,
} from "./shop.actions";

import ShopActionTypes from "./shop.types";

export function* fetchCollectionsAsync() {
	yield console.log("I am fired");

	try {
		const collectionRef = db.collection("collections");
		const snapshot = yield collectionRef.get();
		const collectionsMap = yield call(
			convertCollectionsSnapshotToMap,
			snapshot
		);
		yield put(fetchCollectionsSuccess(collectionsMap));
	} catch (error) {
		yield put(fetchCollectionsFailure(error.message));
	}
}

export function* fetchCollectionsStart() {
	yield takeEvery(
		ShopActionTypes.FETCH_COLLECTIONS_START,
		fetchCollectionsAsync
	);
}

export function* shopSagas() {
	yield all([call(fetchCollectionsStart)]);
}
