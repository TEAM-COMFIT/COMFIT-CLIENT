import { useQuery } from "@tanstack/react-query";

import { api } from "@/shared/api/axios-instance";
import { experienceQueryKey } from "@/shared/api/config/query-key";

export interface GetExperienceDetailResponse {
  experienceId: number;
  title: string;
  isDefault: boolean;
  type: "INTERNSHIP" | "PROJECT" | "EDUCATION" | "ETC";
  startAt: string;
  endAt: string;
  situation: string;
  task: string;
  action: string;
  result: string;
}

export const getExperienceDetail = async (
  experienceId: number
): Promise<GetExperienceDetailResponse> => {
  const response = await api.experiences.getExperience(experienceId);
  return {
    experienceId,
    ...response.result,
  } as GetExperienceDetailResponse;
};

interface UseGetExperienceDetailOptions {
  experienceId: number;
  enabled?: boolean;
}

export const useGetExperienceDetail = ({
  experienceId,
  enabled = true,
}: UseGetExperienceDetailOptions) => {
  return useQuery({
    queryKey: experienceQueryKey.detail(experienceId),
    queryFn: () => getExperienceDetail(experienceId),
    staleTime: 5 * 60 * 1000,
    enabled: enabled && experienceId > 0,
  });
};
