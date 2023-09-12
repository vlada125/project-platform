import { handleActions } from "redux-actions";
import * as CONSTANTS from "./constants";
import { requestSuccess, requestFail } from "../../api/request";

const getInitialState = () => {
  return {
    status: "INIT",
    error: null,
    searchValue: "",
    tag: "all",
    sortBy: "unset",
    files: [],
  };
};

export default handleActions(
  {
    [requestSuccess(CONSTANTS.GET_ALL_FILES)]: (state, { payload }) => {
      return {
        ...state,
        payload,
      };
    },
    [requestFail(CONSTANTS.GET_ALL_FILES)]: (state, { payload }) => {
      return {
        ...state,
        payload,
      };
    },
  },
  getInitialState()
);
