import { _PATH_, _STORAGE_KEY_ } from "@/configs/const";
import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { get } from "lodash";
import { refreshToken } from "./mutate";
import * as endpoint from "./endpoint";
import { createStandaloneToast } from "@chakra-ui/react";
import dayjs from "dayjs";
import { getRefreshToken, getToken, logout } from "@/utils";

export const axiosMain = axios.create({
  baseURL: process.env.VITE_MAIN_ENDPOINT,
  withCredentials: true,
});

let isRefreshing = false;
let refreshPromise: Promise<AxiosResponse> | null = null;

axiosMain.interceptors.request.use((config) => {
  if (config.headers.Authorization === "no-auth") {
    delete config.headers.Authorization;
  } else if (getToken()) {
    config.headers.Authorization = "Bearer " + getToken();
  }
  return config;
});

axiosMain.interceptors.response.use(
  (response) => {
    const succeeded = get(response, "data.succeeded");
    if (typeof succeeded === "boolean" && !succeeded) {
      throw new AxiosError(
        response.data.messages,
        undefined,
        undefined,
        undefined,
        response,
      );
    }
    return response;
  },
  async (error: AxiosError) => {
    const { response, config, code } = error;
    const status = response?.status;
    if (
      [401].includes(Number(status)) &&
      config?.url !== endpoint.other.refreshToken
    ) {
      const rfToken = getRefreshToken();
      if (!isRefreshing) {
        isRefreshing = true;
        refreshPromise = refreshToken({
          refreshToken: rfToken,
          token: getToken(),
        });
      }
      if (refreshPromise) {
        try {
          const res = await refreshPromise;
          localStorage.setItem(
            _STORAGE_KEY_._CREDENTIALS_,
            JSON.stringify(res.data.data),
          );
          return axiosMain.request(config as InternalAxiosRequestConfig);
        } catch (errorRefreshToken) {
          logout();
        } finally {
          isRefreshing = false;
          refreshPromise = null;
        }
      }
    }
    error.message = [
      get(error, "response.data.message") || error.message,
    ] as any;
    if (Number(status) >= 500) {
      const { toast } = createStandaloneToast();
      toast({
        title: `[${dayjs().format("YYYY-MM-DD HH:mm:ss")}][${status}] ${code}`,
        description: (error.message as any).join("\n"),
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-right",
        variant: "left-accent",
      });
    }
    throw error;
  },
);
