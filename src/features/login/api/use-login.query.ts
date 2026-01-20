import { useSuspenseQuery } from "@tanstack/react-query";

import { api } from "@/shared/api/axios-instance";

// API 요청 함수
export const getLogin = async (code: string) => {
  const response = await api.oauth.kakaoCallback({ code }, { secure: false });
  return response;
};

export const useLogin = (code: string) => {
  return useSuspenseQuery({
    queryKey: ["kakao-login", code],
    queryFn: () => getLogin(code),
  });
};
