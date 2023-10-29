import { _STORAGE_KEY_, _PATH_ } from "@/configs/const";
import { mainService } from "@/services";

export const getToken = () => {
  const credentials = JSON.parse(
    localStorage.getItem(_STORAGE_KEY_._CREDENTIALS_) || "null",
  );
  return credentials?.token;
};

export const getRefreshToken = () => {
  const credentials = JSON.parse(
    localStorage.getItem(_STORAGE_KEY_._CREDENTIALS_) || "null",
  );
  return credentials?.refreshToken;
};

export function logout() {
  mainService.client.clear();
  localStorage.removeItem(_STORAGE_KEY_._CREDENTIALS_);
  window.location.href = _PATH_.signin.path;
}
