import { useQueryClient } from "@tanstack/react-query";
import { useCallback, useState } from "react";

import { companyQueryKey } from "@/shared/api/config/query-key";

import { useDeleteBookmark } from "../api/use-delete-bookmark.mutation";
import { usePostBookmark } from "../api/use-post-bookmark.mutation";
import { useBookmarkStore } from "../store/bookmark.store";

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
  const [isBookmarkErrorOpen, setIsBookmarkErrorOpen] = useState(false);
  const bookmarkOverride = useBookmarkStore(
    (state) => state.bookmarkOverrides[companyId]
  );
  const setBookmarkOverride = useBookmarkStore(
    (state) => state.setBookmarkOverride
  );
  const clearBookmarkOverride = useBookmarkStore(
    (state) => state.clearBookmarkOverride
  );

  const isBookmarked = bookmarkOverride ?? initialIsBookmarked;

  const updateDetailQuery = useCallback(
    (nextIsBookmarked: boolean) => {
      queryClient.setQueryData<GetCompanyResponseDto | undefined>(
        companyQueryKey.detail(companyId),
        (previousData) =>
          updateCompanyBookmarkCache(previousData, nextIsBookmarked)
      );
    },
    [companyId, queryClient]
  );

  const { mutate: addBookmark, isPending: isAddingBookmark } = usePostBookmark({
    onSuccess: () => {
      updateDetailQuery(true);
      queryClient.invalidateQueries({
        queryKey: companyQueryKey.detail(companyId),
      });
    },
    onError: () => {
      clearBookmarkOverride(companyId);
      setIsBookmarkErrorOpen(true);
    },
  });

  const { mutate: removeBookmark, isPending: isRemovingBookmark } =
    useDeleteBookmark({
      onSuccess: () => {
        updateDetailQuery(false);
        queryClient.invalidateQueries({
          queryKey: companyQueryKey.detail(companyId),
        });
      },
      onError: () => {
        clearBookmarkOverride(companyId);
        setIsBookmarkErrorOpen(true);
      },
    });

  const isBookmarkPending = isAddingBookmark || isRemovingBookmark;

  const handleBookmarkClick = useCallback(() => {
    if (isBookmarkPending) {
      return;
    }

    if (isBookmarked) {
      setBookmarkOverride(companyId, false);
      removeBookmark(companyId);
      return;
    }

    setBookmarkOverride(companyId, true);
    addBookmark(companyId);
  }, [
    addBookmark,
    companyId,
    isBookmarked,
    isBookmarkPending,
    removeBookmark,
    setBookmarkOverride,
  ]);

  const closeBookmarkError = useCallback(() => {
    setIsBookmarkErrorOpen(false);
  }, []);

  return {
    isBookmarked,
    isBookmarkPending,
    isBookmarkErrorOpen,
    handleBookmarkClick,
    closeBookmarkError,
  };
};
