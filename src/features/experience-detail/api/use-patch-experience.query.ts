import { useMutation, useQueryClient } from "@tanstack/react-query";

import { api } from "@/shared/api/axios-instance";
import { experienceQueryKey } from "@/shared/api/config/query-key";

import type { ExperienceRequestDto } from "@/shared/api/generate/http-client";

export const patchExperience = async (
  experienceId: number,
  body: ExperienceRequestDto
): Promise<void> => {
  await api.experiences.updateExperience(experienceId, body);
};

interface UsePatchExperienceOptions {
  onSuccess?: () => void;
  onError?: (error: unknown) => void;
}

export const usePatchExperience = (options?: UsePatchExperienceOptions) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      experienceId,
      body,
    }: {
      experienceId: number;
      body: ExperienceRequestDto;
    }) => patchExperience(experienceId, body),
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
