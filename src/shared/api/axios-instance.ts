import axios from "axios";

import { tokenStorage } from "@lib/auth/token-storage";

import { Api } from "./generate/http-client";

const SERVER_URL = import.meta.env.VITE_API_URL;

/**
 * axios의 기존 AxiosRequestConfig 타입 확장
 * - accessToken이 필요하고/필요하지 않은 API를 secure속성으로 구분하기 위함.
 * - [default] secure: true
 * - true: 토큰 필요, false: 토큰 불필요
 */
declare module "axios" {
  export interface AxiosRequestConfig {
    secure?: boolean;
  }
}

export const axiosInstance = axios.create({
  baseURL: `${SERVER_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const accessToken = tokenStorage.get() || null;
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    } else {
      if (config.secure) {
        alert("로그인이 필요한 서비스입니다.");
        window.location.replace("/login");
        throw new Error("액세스 토큰이 존재하지 않습니다");
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const { data } = await axios.post(
          `${SERVER_URL}/api/v1/re-issued`,
          null,
          {
            withCredentials: true,
          }
        );

        // 새로 발급 받은 액세스 토큰 저장
        const newAccessToken = data.accessToken;
        tokenStorage.set(newAccessToken);

        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
        return axiosInstance(originalRequest); // 이전 요청 재시도
      } catch (refreshError) {
        alert("리프레쉬 토큰 요청에 실패했습니다.");
        tokenStorage.clear();
        window.location.replace("/login");

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export const api = new Api({
  axiosInstance: axiosInstance,
});
