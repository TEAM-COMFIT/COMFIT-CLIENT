import axios from "axios";

import { tokenStorage } from "@lib/auth/token-storage";

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
});

axiosInstance.interceptors.request.use(
  async (config) => {
    if (!config.secure) return config;
    const accessToken = tokenStorage.get() || null;
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    } else {
      // TODO: 로그인이 필요하다는 Toast Message
      console.error("액세스 토큰이 존재하지 않습니다");
      window.location.replace("/login");
      throw new Error("액세스 토큰이 존재하지 않습니다");
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        // TODO: refreshToken 관련은 차후 순위로 개발할 예정
        // 액세스 토큰 재발급 API
        const { data } = await axios.post("토큰 재발급 path", null, {
          withCredentials: true, // (토큰을 cookie에 넣었을 경우 사용됨)
        });

        // 새로 발급 받은 액세스 토큰 저장
        const newAccessToken = data.accessToken;
        tokenStorage.set(newAccessToken);

        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
        return axiosInstance(originalRequest); // 이전 요청 재시도
      } catch (refreshError) {
        // TODO: 재발급 실패시, 로그인 화면으로 이동
        console.error("리프레쉬 토큰 요청에 실패했습니다.", error);
        localStorage.removeItem("access_token"); // TODO: 토큰, 유저 정보 모두 삭제
        window.location.replace("/login");

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

/**
 * TODO: http-client.ts Api 클래스로 instance를 생성(+ interceptor가 적용된 api 인스턴스를 주입)
 * - 아래 코드는 Api 연동 시에 주석 처리를 제거할 예정입니다.
 */
// export const api = new Api({
//   baseUrl: import.meta.env.VITE_API_URL,
//   instance: axiosInstance,
// });
