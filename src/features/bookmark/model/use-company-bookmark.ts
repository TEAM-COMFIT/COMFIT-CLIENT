import { useQueryClient } from "@tanstack/react-query";
import { useCallback, useState } from "react";

import { companyQueryKey } from "@/shared/api/config/query-key";

import { usePostBookmark } from "../api/use-post-bookmark.mutation";

import type { GetCompanyResponseDto } from "@/shared/api/generate/http-client";

interface UseCompanyBookmarkParams {
  companyId: number;
  initialIsBookmarked: boolean;
}

const updateCompanyBookmarkCache = (
  previousData: GetCompanyResponseDto | undefined,
  isLiked: boolean
) => {
  if (!previousData) {
    return previousData;
  }

  return {
    ...previousData,
    isLiked,
  };
};

export const useCompanyBookmark = ({
  companyId,
  initialIsBookmarked,
}: UseCompanyBookmarkParams) => {
  const queryClient = useQueryClient();
  const [localIsBookmarked, setLocalIsBookmarked] = useState<boolean | null>(
    null
  );
  const [isBookmarkErrorOpen, setIsBookmarkErrorOpen] = useState(false);

  const isBookmarked = localIsBookmarked ?? initialIsBookmarked;

  const updateDetailQuery = useCallback(() => {
    queryClient.setQueryData<GetCompanyResponseDto | undefined>(
      companyQueryKey.detail(companyId),
      (previousData) => updateCompanyBookmarkCache(previousData, true)
    );
  }, [companyId, queryClient]);

  const { mutate: addBookmark, isPending: isAddingBookmark } = usePostBookmark({
    onSuccess: () => {
      updateDetailQuery();
      queryClient.invalidateQueries({
        queryKey: companyQueryKey.detail(companyId),
      });
    },
    onError: () => {
      setLocalIsBookmarked(null);
      setIsBookmarkErrorOpen(true);
    },
  });

  const handleBookmarkClick = useCallback(() => {
    if (isBookmarked || isAddingBookmark) {
      return;
    }

    setLocalIsBookmarked(true);
    addBookmark(companyId);
  }, [addBookmark, companyId, isAddingBookmark, isBookmarked]);

  const closeBookmarkError = useCallback(() => {
    setIsBookmarkErrorOpen(false);
  }, []);

  return {
    isBookmarked,
    isAddingBookmark,
    isBookmarkErrorOpen,
    handleBookmarkClick,
    closeBookmarkError,
  };
};
