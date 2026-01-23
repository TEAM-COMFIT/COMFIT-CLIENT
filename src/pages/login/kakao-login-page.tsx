import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAuthStore } from "@/app/store";
import { useLogin } from "@/features/login/api/use-login.query";
import { KEY_SPINNER } from "@/shared/assets/gifs";

const KakaoLoginPage = () => {
  const navigate = useNavigate();
  const { actions } = useAuthStore();

  const code = new URL(window.location.href).searchParams.get("code");

  const { data } = useLogin(code ?? "");

  useEffect(() => {
    if (!code) {
      navigate("/login", { replace: true });
      return;
    }
    const result = data.result || data;
    if (result && result.accessToken) {
      actions.login(result.accessToken);
      const targetPath = result.isNew ? "/onboarding" : "/";
      navigate(targetPath, { replace: true });
    } else {
      navigate("/login", { replace: true });
    }
  }, [data, navigate, actions, code]);

  return (
    <div>
      <img src={KEY_SPINNER} alt="로딩중" />
      <div>잠시만 기다려주세요</div>
    </div>
  );
};

export { KakaoLoginPage };
