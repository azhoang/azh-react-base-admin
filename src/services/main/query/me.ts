import * as endpoint from "../endpoint";
import { axiosMain } from "../axios";

export const getMe = () => {
  return axiosMain.get(endpoint.other.me);
};
