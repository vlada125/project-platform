import { takeEvery } from "redux-saga/effects";
import * as CONSTANTS from "../modules/files/constants";
import apiCall from "../api/apiCall";

const doGetAllFiles = apiCall({
  type: CONSTANTS.GET_ALL_FILES,
  method: "get",
  path: "files",
});

export default function* rootSaga() {
  yield takeEvery(CONSTANTS.GET_ALL_FILES, doGetAllFiles);
}
