import axios from "axios";

const SERVER_URL = import.meta.env.VITE_API_URL;

// TODO: 현재는 axios로 instance를 생성하지만, http-client.ts Api 클래스로 instance를 생성하도록 수정할 예정입니다.
export const api = axios.create({
  baseURL: `${SERVER_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  async (config) => {
    // TODO: 액세스 토큰 가져오는 로직은 utils/token로 대체 예정
    const accessToken = localStorage.getItem("access_token") || null;
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

api.interceptors.response.use(
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
        localStorage.setItem("access_token", newAccessToken);

        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
        return api(originalRequest); // 이전 요청 재시도
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
