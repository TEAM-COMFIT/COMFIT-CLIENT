import { useMutation } from "@tanstack/react-query";

import { api } from "@/shared/api/axios-instance";

import type {
  CommonApiResponse,
  CustomErrorResponse,
  OnBoardingRequestDTO,
} from "@/shared/api/generate/http-client";
import type { AxiosError } from "axios";

const postOnboarding = async (data: OnBoardingRequestDTO) => {
  const response = await api.onBoarding.addUserInfo(data);
  return response.result;
};

const usePostOnboarding = () => {
  return useMutation<
    CommonApiResponse,
    AxiosError<CustomErrorResponse>,
    OnBoardingRequestDTO
  >({
    mutationFn: (data: OnBoardingRequestDTO) => postOnboarding(data),
    onSuccess: () => {},
    onError: (error) => {
      console.error("온보딩 실패:", error);
    },
  });
};

export { usePostOnboarding };
