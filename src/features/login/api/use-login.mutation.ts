import { useMutation, useSuspenseQuery } from "@tanstack/react-query";

import { api } from "@/shared/api/axios-instance";

import type { GetSuggestionCompanyData } from "@/shared/api/generate/http-client";

// API 요청 함수
export const getLogin = (code: string) => {
  return api.oauth.kakaoCallback({ code }, { secure: false });
};

export const useLogin = () => {
  return useMutation({
    mutationFn: (code: string) => getLogin(code),
  });
};

/// 예시 코드
export const useGet = () => {
  return useSuspenseQuery({
    queryKey: ["suggestion-company", "1"],
    queryFn: () => getInfo(),
  });
};
export const getInfo = async () => {
  const response = await api.companies.getSuggestionCompany(1, {
    secure: false,
  });

  // 템플릿 수정을 안 해서 response가 { result: ... } 형태라면:
  return response.result as unknown as GetSuggestionCompanyData[];

  // 템플릿 수정을 해서 response가 바로 result 내용물이라면:
  //return response as unknown as GetSuggestionCompanyData[];
};
