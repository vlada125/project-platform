import { all } from "redux-saga/effects";
import files from "./files";

export default function* rootSaga() {
  yield all([files()]);
}
