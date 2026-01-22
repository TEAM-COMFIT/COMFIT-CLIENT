import { useMutation, useQueryClient } from "@tanstack/react-query";

import { api } from "@/shared/api/axios-instance";
import { experienceQueryKey } from "@/shared/api/config/query-key";

import type { ExperienceRequestDto } from "@/shared/api/generate/http-client";

export interface CreateExperienceResponse {
  experienceId: number;
}

export const createExperience = async (
  body: ExperienceRequestDto
): Promise<CreateExperienceResponse> => {
  const response = await api.experiences.createExperience(body);
  return { experienceId: response.result };
};

interface UseCreateExperienceOptions {
  onSuccess?: (data: CreateExperienceResponse) => void;
  onError?: (error: unknown) => void;
}

export const useCreateExperience = (options?: UseCreateExperienceOptions) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: ExperienceRequestDto) => createExperience(body),
    onSuccess: (data: CreateExperienceResponse) => {
      queryClient.invalidateQueries({
        queryKey: experienceQueryKey.lists(),
      });
      options?.onSuccess?.(data);
    },
    onError: options?.onError,
  });
};
