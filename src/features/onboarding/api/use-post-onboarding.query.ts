import { useMutation } from "@tanstack/react-query";

import { api } from "@/shared/api/axios-instance";

// 요청 데이터 타입 정의
export interface OnboardingRequest {
  educationLevel?: string;
  firstIndustry?: string;
  secondIndustry?: string;
  thirdIndustry?: string;
  firstJob?: string;
  secondJob?: string;
  thirdJob?: string;
  universityId?: number;
}

export const postOnboarding = async (data: OnboardingRequest) => {
  const response = await api.onBoarding.addUserInfo(data);
  return response.result;
};

export const usePostOnboarding = () => {
  return useMutation({
    mutationFn: (data: OnboardingRequest) => postOnboarding(data),

    onSuccess: () => {
      console.log("온보딩 성공");
    },
    onError: (error) => {
      console.error("온보딩 실패:", error);
      alert("다시 하여라");
    },
  });
};
