// src/hooks/usePagination.ts
import { useMemo } from "react";

interface UsePaginationArgs {
  currentPage: number;
  totalPage: number;
  onPageChange: (page: number) => void;
}

export const usePagination = ({
  currentPage,
  totalPage,
  onPageChange,
}: UsePaginationArgs) => {
  const BLOCK_SIZE = 10; // 한 블럭에 보여줄 페이지 수(10개로 고정)

  // 현재 블럭 계산
  const blockIndex = Math.floor((currentPage - 1) / BLOCK_SIZE);
  const blockStart = blockIndex * BLOCK_SIZE + 1;
  const blockEnd = Math.min(blockStart + BLOCK_SIZE - 1, totalPage);

  // 꺽쇠 활성화 여부
  // TODO: 백엔드에서 넘겨줌
  const hasPrevious = currentPage > 1;
  const hasNext = currentPage < totalPage;

  // 쌍꺽쇠 버튼 활성화 여부
  const currentBlock = Math.ceil(currentPage / BLOCK_SIZE);
  const totalBlocks = Math.ceil(totalPage / BLOCK_SIZE);

  const hasPrevDouble = currentPage !== 1;
  const hasNextDouble = currentBlock < totalBlocks;

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

  const handleArrowLeftClick = () => hasPrevious && goToPage(currentPage - 1);
  const handleArrowRightClick = () => hasNext && goToPage(currentPage + 1);

  // 쌍꺽쇠 왼쪽 클릭 핸들러
  const handleDoubleArrowLeftClick = () => {
    if (currentPage === 1) return;

    const prevBlockStart = blockStart - BLOCK_SIZE;
    if (prevBlockStart >= 1) {
      onPageChange(prevBlockStart);
    } else {
      onPageChange(1);
    }
  };

  // 쌍꺽쇠 오른쪽 클릭 핸들러
  const handleDoubleArrowRightClick = () => {
    const nextBlockStart = blockStart + BLOCK_SIZE;

    if (nextBlockStart <= totalPage) {
      onPageChange(nextBlockStart);
    } else {
      onPageChange(totalPage);
    }
  };

  return {
    blockStart,
    blockEnd,
    pageNumbers,
    showDoubleArrows: totalPage > BLOCK_SIZE,

    hasPrevious,
    hasNext,
    hasPrevDouble,
    hasNextDouble,

    goToPage,
    handleArrowLeftClick,
    handleArrowRightClick,
    handleDoubleArrowLeftClick,
    handleDoubleArrowRightClick,
  };
};
