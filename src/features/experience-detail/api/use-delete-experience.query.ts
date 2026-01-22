import { useMutation, useQueryClient } from "@tanstack/react-query";

import { api } from "@/shared/api/axios-instance";
import { experienceQueryKey } from "@/shared/api/config/query-key";

export const deleteExperience = async (experienceId: number): Promise<void> => {
  await api.experiences.deleteExperience(experienceId);
};

interface UseDeleteExperienceOptions {
  onSuccess?: () => void;
  onError?: (error: unknown) => void;
}

export const useDeleteExperience = (options?: UseDeleteExperienceOptions) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (experienceId: number) => deleteExperience(experienceId),
    onSuccess: (_, experienceId) => {
      queryClient.removeQueries({
        queryKey: experienceQueryKey.detail(experienceId),
      });
      queryClient.invalidateQueries({
        queryKey: experienceQueryKey.lists(),
      });
      options?.onSuccess?.();
    },
    onError: options?.onError,
  });
};
