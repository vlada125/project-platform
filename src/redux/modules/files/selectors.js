import { get } from "lodash";

export const filesSelector = (state) => {
  get(state, "files.files", null);
};
