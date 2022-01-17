import { initializeApp } from "firebase/app";
import {
	getFirestore,
	doc,
	setDoc,
	getDoc,
	writeBatch,
	collection,
} from "firebase/firestore";
import {
	getAuth,
	onAuthStateChanged,
	GoogleAuthProvider,
	updateProfile,
	signInWithPopup,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";

import { selectCurrentUser } from "../redux/user/user.selectors";

const firebaseConfig = {
	apiKey: "AIzaSyDCvV0BtlPHizmzKQSBkBow1PN7IrD8Ed0",
	authDomain: "pocket-full-of-posies-demo.firebaseapp.com",
	projectId: "pocket-full-of-posies-demo",
	storageBucket: "pocket-full-of-posies-demo.appspot.com",
	messagingSenderId: "796209539535",
	appId: "1:796209539535:web:4de30baca59b47accb8aba",
};

initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();

export const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({ prompt: "select_account" });

export const createUserWithEmail = (auth, email, password) =>
	createUserWithEmailAndPassword(auth, email, password);

export const signInWithEmailAuth = (auth, email, password) =>
	signInWithEmailAndPassword(auth, email, password);

export const signInWithGoogleAuth = () => signInWithPopup(auth, googleProvider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;
	const userRef = doc(db, "users", `${userAuth.uid}`);

	const snapShot = await getDoc(userRef);

	if (!snapShot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userRef, {
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (err) {
			console.log("error creating user", err.message);
		}
	}

	return userRef;
};

export const addCollectionAndDocuments = async (
	collectionKey,
	objectsToAdd
) => {
	const batch = writeBatch(db);

	objectsToAdd.forEach((element) => {
		const docRef = doc(collection(db, collectionKey));
		batch.set(docRef, element);
	});

	return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
	const transformedCollection = collections.docs.map((doc) => {
		const { title, items } = doc.data();
		return {
			id: doc.id,
			routeName: encodeURI(title.toLowerCase()),
			title,
			items,
		};
	});

	return transformedCollection.reduce((accumulator, collection) => {
		accumulator[collection.title.toLowerCase()] = collection;
		return accumulator;
	}, {});
};

export const getCurrentUser = () => {
	return new Promise((resolve, reject) => {
		const unsubscribe = onAuthStateChanged(
			auth,
			(userAuth) => {
				unsubscribe();
				resolve(userAuth);
			},
			reject
		);
	});
};
