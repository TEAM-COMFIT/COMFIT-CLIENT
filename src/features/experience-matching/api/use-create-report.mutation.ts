import { useMutation } from "@tanstack/react-query";

import { api } from "@/shared/api/axios-instance";

import type { MatchExperienceRequestDto } from "@/shared/api/generate/http-client";

export const createReport = async (data: MatchExperienceRequestDto) => {
  const response = await api.aiReports.matchExperience(data);
  return response.result;
};

export const useCreateReport = () => {
  return useMutation({
    mutationFn: (data: MatchExperienceRequestDto) => createReport(data),
  });
};
