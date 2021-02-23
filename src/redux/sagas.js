import { call, takeEvery, put } from "redux-saga/effects";
import { hideLoader, showAlert, showLoader } from "./actions";
import { REQUEST_POSTS, FETCHED_POST } from "./types";
//put диспачит наши события в стор

export function* sagaWatcher() {
  //saga перехватывает every пост и для него выполняет worker
  yield takeEvery(REQUEST_POSTS, sagaWorker);
}

function* sagaWorker() {
try {
    yield put(showLoader());
  const payload = yield call(fetchPosts);
  yield put({ type: FETCHED_POST, payload });
  yield put(hideLoader());
} catch (error) {
    yield put(showAlert(error.toString()))
    yield put(hideLoader())
}


}

async function fetchPosts() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );
  return await response.json();
}
