// src/hooks/usePagination.ts
import { useMemo } from "react";

interface UsePaginationArgs {
  currentPage: number;
  totalPages: number;
  blockSize: number;
  onPageChange: (page: number) => void;
}

export const usePagination = ({
  currentPage,
  totalPages,
  onPageChange,
  blockSize,
}: UsePaginationArgs) => {
  // 현재 블럭 계산
  const blockIndex = Math.floor((currentPage - 1) / blockSize);
  const blockStart = blockIndex * blockSize + 1;
  const blockEnd = Math.min(blockStart + blockSize - 1, totalPages);

  // 이동 가능 여부
  const hasPrevious = currentPage > 1;
  const hasNext = currentPage < totalPages;

  const hasPrevBlock = blockStart > 1;
  const hasNextBlock = blockEnd < totalPages;

  // 페이지 숫자 배열
  const pageNumbers = useMemo(
    () =>
      Array.from(
        { length: blockEnd - blockStart + 1 },
        (_, i) => blockStart + i
      ),
    [blockStart, blockEnd]
  );

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    if (page === currentPage) return;

    onPageChange(page);
  };

  const goPrevPage = () => hasPrevious && goToPage(currentPage - 1);
  const goNextPage = () => hasNext && goToPage(currentPage + 1);

  const goPrevBlock = () => {
    if (!hasPrevBlock) return;
    goToPage(Math.max(1, blockStart - blockSize));
  };
  const goNextBlock = () => {
    if (!hasNextBlock) return;
    goToPage(blockStart + blockSize);
  };

  return {
    blockStart,
    blockEnd,
    pageNumbers,
    showDoubleArrows: totalPages > blockSize,

    hasPrevious,
    hasNext,
    hasPrevBlock,
    hasNextBlock,

    goToPage,
    goPrevPage,
    goNextPage,
    goPrevBlock,
    goNextBlock,
  };
};
