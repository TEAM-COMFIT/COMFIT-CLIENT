import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { tokenStorage } from "@/shared/lib/auth/token-storage";

const KakaoLoginPage = () => {
  const navigate = useNavigate();

  // 로딩 상태를 직접 관리 (React Query의 isPending 대체)
  const [isLoading, setIsLoading] = useState(false);

  const code = new URL(window.location.href).searchParams.get("code");
  const isCalledRef = useRef(false);

  useEffect(() => {
    // 1. 코드가 없거나 이미 호출했다면 실행하지 않음
    if (!code || isCalledRef.current) return;

    // 2. 호출 플래그 세우기 (React StrictMode 중복 호출 방지)
    isCalledRef.current = true;
    const SERVER_URL = import.meta.env.VITE_API_URL;
    const loginProcess = async () => {
      setIsLoading(true);
      console.log("인가 코드:", code);

      try {
        const response = await axios.get(
          `${SERVER_URL}/api/v1/oauth/kakao/callback`,
          {
            params: {
              code: code,
            },
          }
        );

        const result = response.data?.result || response.data;
        const { accessToken } = result;
        console.log(response);
        if (accessToken) {
          tokenStorage.set(accessToken);
          navigate("/", { replace: true });
        } else {
          throw new Error("Access Token이 응답에 없습니다.");
        }
      } catch (error) {
        console.error("로그인 에러 발생:", error);
        alert("로그인에 실패했습니다. 다시 시도해주세요.");
        navigate("/login", { replace: true });
      } finally {
        setIsLoading(false);
      }
    };

    loginProcess();
  }, [code, navigate]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {isLoading ? "로그인 처리 중입니다..." : "잠시만 기다려주세요."}
    </div>
  );
};

export { KakaoLoginPage };
