import { useMutation, useQueryClient } from "@tanstack/react-query";

import { api } from "@/shared/api/axios-instance";
import { meQueryKey } from "@/shared/api/config/query-key";

export const postBookmark = async (companyId: number) => {
  const response = await api.me.addBookmark(companyId);
  return response.result;
};

interface UsePostBookmarkOptions {
  onSuccess?: (bookmarkId: number) => void;
  onError?: (error: unknown) => void;
}

export const usePostBookmark = (options?: UsePostBookmarkOptions) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (companyId: number) => postBookmark(companyId),
    onSuccess: (bookmarkId: number) => {
      queryClient.invalidateQueries({
        queryKey: meQueryKey.bookmarkCompanyLists(),
      });
      options?.onSuccess?.(bookmarkId);
    },
    onError: options?.onError,
  });
};
