import { takeLatest, put, all, call } from "redux-saga/effects";

import UserActionTypes from "./user.types";

import {
	signInSuccess,
	signInFailure,
	signOutSuccess,
	emailSignUpFailure,
	signOutFailure,
	emailSignUpSuccess,
} from "./user.actions";

import {
	auth,
	signInWithEmailAuth,
	signInWithGoogleAuth,
	createUserWithEmail,
	createUserProfileDocument,
	getCurrentUser,
} from "../../firebase/firebase.utils";

import { getDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
	try {
		const userRef = yield call(
			createUserProfileDocument,
			userAuth,
			additionalData
		);
		const userSnapshot = yield getDoc(userRef);
		yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
	} catch (error) {
		yield put(signInFailure(error));
	}
}

export function* signUpWithEmail({
	payload: { email, password, displayName },
}) {
	try {
		const { user } = yield createUserWithEmail(auth, email, password);

		yield put(emailSignUpSuccess({ user, additionalData: { displayName } }));
	} catch (error) {
		yield put(emailSignUpFailure(error));
	}
}

export function* signInAfterSignUp({ payload: { user, additionalData } }) {
	yield getSnapshotFromUserAuth(user, additionalData);
}

export function* signInWithGoogle() {
	try {
		const { user } = yield signInWithGoogleAuth();
		yield getSnapshotFromUserAuth(user);
	} catch (error) {
		yield put(signInFailure(error));
	}
}

export function* signInWithEmail({ payload: { email, password } }) {
	try {
		const { user } = yield signInWithEmailAuth(auth, email, password);
		yield getSnapshotFromUserAuth(user);
	} catch (error) {
		yield put(signInFailure(error));
	}
}

export function* isUserAuthenticated() {
	try {
		const {userAuth} = yield getCurrentUser();
		console.log(userAuth)
		if (!userAuth) return;
		yield getSnapshotFromUserAuth(userAuth);
	} catch (error) {
		yield put(signInFailure(error));
	}
}

export function* signUserOut() {
	try {
		yield signOut(auth);
		yield put(signOutSuccess());
	} catch (error) {
		yield put(signOutFailure(error));
	}
}

export function* onEmailSignUpStart() {
	yield takeLatest(UserActionTypes.EMAIL_SIGN_UP_START, signUpWithEmail);
}

export function* onEmailSignUpSuccess() {
	yield takeLatest(UserActionTypes.EMAIL_SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* onGoogleSignInStart() {
	yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
	yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onCheckUserSession() {
	yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignOutStart() {
	yield takeLatest(UserActionTypes.SIGN_OUT_START, signUserOut);
}

export function* userSagas() {
	yield all([
		call(onEmailSignUpStart),
		call(onEmailSignUpSuccess),
		call(onGoogleSignInStart),
		call(onEmailSignInStart),
		call(onCheckUserSession),
		call(onSignOutStart),
	]);
}
