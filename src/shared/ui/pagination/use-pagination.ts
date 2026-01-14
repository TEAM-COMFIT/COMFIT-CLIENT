// src/hooks/usePagination.ts
import { useMemo } from "react";

interface UsePaginationArgs {
  currentPage: number;
  totalPage: number;
  blockSize?: number;
  onPageChange: (page: number) => void;
}

export const usePagination = ({
  currentPage,
  totalPage,
  onPageChange,
  blockSize = 10,
}: UsePaginationArgs) => {
  // 현재 블럭 계산
  const blockIndex = Math.floor((currentPage - 1) / blockSize);
  const blockStart = blockIndex * blockSize + 1;
  const blockEnd = Math.min(blockStart + blockSize - 1, totalPage);

  // 꺽쇠 활성화 여부
  const hasPrevious = currentPage > 1;
  const hasNext = currentPage < totalPage;

  // 쌍꺽쇠 버튼 활성화 여부
  const canGoPrevBlock = blockStart > 1;
  const canGoNextBlock = blockEnd < totalPage;

  // 페이지 숫자 배열
  const pageNumbers = useMemo(
    () =>
      Array.from(
        { length: blockEnd - blockStart + 1 },
        (_, i) => blockStart + i
      ),
    [blockStart, blockEnd]
  );

  // 페이지 이동 함수
  const goToPage = (page: number) => {
    if (page < 1 || page > totalPage) return;
    if (page === currentPage) return;

    onPageChange(page);
  };

  const pageActions = {
    /* 단일 꺽쇠 */
    goPrevPage: () => {
      if (hasPrevious) goToPage(currentPage - 1);
    },
    goNextPage: () => {
      if (hasNext) goToPage(currentPage + 1);
    },

    /* 쌍꺽쇠 (블록 이동) */
    goPrevBlock: () => {
      if (!canGoPrevBlock) return;

      const prevBlockStart = blockStart - blockSize;
      goToPage(prevBlockStart >= 1 ? prevBlockStart : 1);
    },
    goNextBlock: () => {
      if (!canGoNextBlock) return;

      const nextBlockStart = blockStart + blockSize;
      goToPage(nextBlockStart <= totalPage ? nextBlockStart : totalPage);
    },
  };
  return {
    blockStart,
    blockEnd,
    pageNumbers,
    showDoubleArrows: totalPage > blockSize,

    hasPrevious,
    hasNext,
    canGoPrevBlock,
    canGoNextBlock,

    goToPage,
    pageActions,
  };
};
