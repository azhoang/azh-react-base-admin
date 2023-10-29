import * as endpoint from "../endpoint";
import { axiosMain } from "../axios";

export const signin = (payload: { email: string; password: string }) => {
  return axiosMain.post(endpoint.other.login, payload);
};
/**
 * Authenticates request
 */
export const refreshToken = (payload: {
  refreshToken: string;
  token: string;
}) => {
  return axiosMain.post(endpoint.other.refreshToken, payload, {
    headers: {
      Authorization: "no-auth",
    },
  });
};

export const serverLogout = () => {
  return axiosMain.post(endpoint.other.logout);
};
