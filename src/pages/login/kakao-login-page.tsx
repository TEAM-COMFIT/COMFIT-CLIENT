import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { useAuthStore } from "@/app/store";
import { useLogin } from "@/features/login/api/use-login.mutation";
import { tokenStorage } from "@/shared/lib/auth/token-storage";

const KakaoLoginPage = () => {
  const navigate = useNavigate();
  const { actions } = useAuthStore();
  const { mutate: login } = useLogin();

  // 인가 코드(code) 가져오기
  const code = new URL(window.location.href).searchParams.get("code");
  const isCalledRef = useRef(false);

  useEffect(() => {
    if (!code || isCalledRef.current) return;
    isCalledRef.current = true;

    login(code, {
      onSuccess: (response) => {
        const accessToken = response.result as string;

        //console.log("로그인 성공!");

        if (accessToken) {
          tokenStorage.set(accessToken);
          actions.login(accessToken);
          navigate("/", { replace: true });
        }
      },
      onError: (error) => {
        console.error("로그인 실패:", error);
        alert("로그인에 실패했습니다.");
        navigate("/login", { replace: true });
      },
    });
  }, [code, login, navigate, actions]);

  return <div></div>;
};

export { KakaoLoginPage };
