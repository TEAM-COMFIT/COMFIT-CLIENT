import { useMutation, useQueryClient } from "@tanstack/react-query";

import { api } from "@/shared/api/axios-instance";
import { experienceQueryKey } from "@/shared/api/config/query-key";

import type { ExperienceRequestDto } from "@/shared/api/generate/http-client";

export interface PostExperienceResponse {
  experienceId: number;
}

export const postExperience = async (
  body: ExperienceRequestDto
): Promise<PostExperienceResponse> => {
  const response = await api.experiences.createExperience(body);
  return { experienceId: response.result };
};

interface UsePostExperienceOptions {
  onSuccess?: (data: PostExperienceResponse) => void;
  onError?: (error: unknown) => void;
}

export const usePostExperience = (options?: UsePostExperienceOptions) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: ExperienceRequestDto) => postExperience(body),
    onSuccess: (data: PostExperienceResponse) => {
      queryClient.invalidateQueries({
        queryKey: experienceQueryKey.lists(),
      });
      options?.onSuccess?.(data);
    },
    onError: options?.onError,
  });
};
