import { useSuspenseQuery } from "@tanstack/react-query";

import { api } from "@/shared/api/axios-instance";

import type { GetCompanyResponseDto } from "@/shared/api/generate/http-client";

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

// /// 예시 코드
export const getInfo = async (id: number) => {
  const response = await api.companies.getSuggestionCompany(id, {
    secure: false,
  });
  return response.result as unknown as GetCompanyResponseDto[];
};

export const useGetCompany = (id: number) => {
  return useSuspenseQuery({
    queryKey: ["suggestion-company", id],
    queryFn: () => getInfo(id),
  });
};
