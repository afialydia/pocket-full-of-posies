import { all, call } from "redux-saga/effects";


export default function* rootSaga() {
	//'all' allows sagas to initialize concurrently
	yield all([]);
}
