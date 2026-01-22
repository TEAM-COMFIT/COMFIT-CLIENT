import { useMutation, useQueryClient } from "@tanstack/react-query";

import { api } from "@/shared/api/axios-instance";
import { experienceQueryKey } from "@/shared/api/config/query-key";

export interface UpdateDefaultResponse {
  isDefault: boolean;
}

export const updateExperienceDefault = async (
  experienceId: number
): Promise<UpdateDefaultResponse> => {
  const response = await api.experiences.updateDefault(experienceId, {
    format: "json",
  });
  return response.result as UpdateDefaultResponse;
};

interface UseUpdateExperienceDefaultOptions {
  onSuccess?: (data: UpdateDefaultResponse) => void;
  onError?: (error: unknown) => void;
}

export const useUpdateExperienceDefault = (
  options?: UseUpdateExperienceDefaultOptions
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (experienceId: number) => updateExperienceDefault(experienceId),
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
