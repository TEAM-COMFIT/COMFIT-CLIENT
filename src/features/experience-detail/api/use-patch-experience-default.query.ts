import { useMutation, useQueryClient } from "@tanstack/react-query";

import { api } from "@/shared/api/axios-instance";
import { experienceQueryKey } from "@/shared/api/config/query-key";

export interface PatchDefaultResponse {
  isDefault: boolean;
}

export const patchExperienceDefault = async (
  experienceId: number
): Promise<PatchDefaultResponse> => {
  const response = await api.experiences.updateDefault(experienceId, {
    format: "json",
  });
  return response.result as PatchDefaultResponse;
};

interface UsePatchExperienceDefaultOptions {
  onSuccess?: (data: PatchDefaultResponse) => void;
  onError?: (error: unknown) => void;
}

export const usePatchExperienceDefault = (
  options?: UsePatchExperienceDefaultOptions
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (experienceId: number) => patchExperienceDefault(experienceId),
    onSuccess: (data, experienceId) => {
      queryClient.invalidateQueries({
        queryKey: experienceQueryKey.detail(experienceId),
      });
      queryClient.invalidateQueries({
        queryKey: experienceQueryKey.lists(),
      });
      options?.onSuccess?.(data);
    },
    onError: options?.onError,
  });
};
