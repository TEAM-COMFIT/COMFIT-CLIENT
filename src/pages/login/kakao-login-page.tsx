import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAuthStore } from "@/app/store";
import { useLogin } from "@/features/login/api/use-login.query";

const KakaoLoginPage = () => {
  const navigate = useNavigate();
  const { actions } = useAuthStore();

  const code = new URL(window.location.href).searchParams.get("code");

  if (!code) {
    navigate("/login");
    throw new Error("코드가 존재하지 않습니다");
  }

  const { data } = useLogin(code);

  useEffect(() => {
    const result = data.result || data;
    if (result && result.accessToken) {
      actions.login(result.accessToken);
      navigate(result.isNew ? "/onboarding" : "/", { replace: true });
    } else {
      navigate("/login", { replace: true });
    }
  }, [data, navigate, actions]);

  return <></>;
};

export { KakaoLoginPage };
