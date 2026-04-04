import { useMutation, useQueryClient } from "@tanstack/react-query";

import { api } from "@/shared/api/axios-instance";
import { meQueryKey } from "@/shared/api/config/query-key";

export const deleteBookmark = async (companyId: number) => {
  await api.me.removeBookmark(companyId);
};

interface UseDeleteBookmarkOptions {
  onSuccess?: () => void;
  onError?: (error: unknown) => void;
}

export const useDeleteBookmark = (options?: UseDeleteBookmarkOptions) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (companyId: number) => deleteBookmark(companyId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: meQueryKey.all(),
      });
      options?.onSuccess?.();
    },
    onError: options?.onError,
  });
};
