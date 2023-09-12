import { createAction } from "redux-actions";
import * as CONSTANTS from "./constants";

export const getAllFiles = createAction(CONSTANTS.GET_ALL_FILES);
