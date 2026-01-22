import { useMutation, useQueryClient } from "@tanstack/react-query";

import { api } from "@/shared/api/axios-instance";
import { experienceQueryKey } from "@/shared/api/config/query-key";

import type { ExperienceRequestDto } from "@/shared/api/generate/http-client";

export const updateExperience = async (
  experienceId: number,
  body: ExperienceRequestDto
): Promise<void> => {
  await api.experiences.updateExperience(experienceId, body);
};

interface UseUpdateExperienceOptions {
  onSuccess?: () => void;
  onError?: (error: unknown) => void;
}

export const useUpdateExperience = (options?: UseUpdateExperienceOptions) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      experienceId,
      body,
    }: {
      experienceId: number;
      body: ExperienceRequestDto;
    }) => updateExperience(experienceId, body),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: experienceQueryKey.detail(variables.experienceId),
      });
      queryClient.invalidateQueries({
        queryKey: experienceQueryKey.lists(),
      });
      options?.onSuccess?.();
    },
    onError: options?.onError,
  });
};
