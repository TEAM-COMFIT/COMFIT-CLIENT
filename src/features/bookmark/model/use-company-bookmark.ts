import { useQueryClient } from "@tanstack/react-query";
import { useCallback, useEffect, useState } from "react";

import { companyQueryKey } from "@/shared/api/config/query-key";
import { isValidCustomError } from "@/shared/api/error-handler";

import { useDeleteBookmark } from "../api/use-delete-bookmark.mutation";
import { usePostBookmark } from "../api/use-post-bookmark.mutation";
import { useBookmarkStore } from "../store/bookmark.store";

import type { GetCompanyResponseDto } from "@/shared/api/generate/http-client";

interface UseCompanyBookmarkParams {
  companyId: number;
  initialIsBookmarked: boolean;
}

const isDuplicateBookmarkError = (error: unknown) =>
  isValidCustomError(error) &&
  error.response.status === 400 &&
  error.response.data.prefix.startsWith("BOOKMARK_");

const updateCompanyBookmarkCache = (
  previousData: GetCompanyResponseDto | undefined,
  isBookmarked: boolean
) => {
  if (!previousData) {
    return previousData;
  }

  return {
    ...previousData,
    isLiked: isBookmarked,
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

  const isBookmarked = bookmarkOverride ?? initialIsBookmarked;

  useEffect(() => {
    if (bookmarkOverride === undefined && initialIsBookmarked) {
      setBookmarkOverride(companyId, true);
    }
  }, [bookmarkOverride, companyId, initialIsBookmarked, setBookmarkOverride]);

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
      setBookmarkOverride(companyId, true);
      updateDetailQuery(true);
    },
    onError: (error) => {
      if (isDuplicateBookmarkError(error)) {
        setBookmarkOverride(companyId, true);
        updateDetailQuery(true);
        return;
      }

      setBookmarkOverride(companyId, false);
      setIsBookmarkErrorOpen(true);
    },
  });

  const { mutate: removeBookmark, isPending: isRemovingBookmark } =
    useDeleteBookmark({
      onSuccess: () => {
        setBookmarkOverride(companyId, false);
        updateDetailQuery(false);
        queryClient.invalidateQueries({
          queryKey: companyQueryKey.detail(companyId),
        });
      },
      onError: () => {
        setBookmarkOverride(companyId, true);
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
