import IconArrowLeft from "@icons/arrow_left_black.svg?react";
import IconArrowLeftGray from "@icons/arrow_left_gray.svg?react";
import IconArrowRight from "@icons/arrow_right_black.svg?react";
import IconArrowRightGray from "@icons/arrow_right_gray.svg?react";
import IconDoubleArrowLeft from "@icons/double_arrow_left_black.svg?react";
import IconDoubleArrowLeftGray from "@icons/double_arrow_left_gray.svg?react";
import IconDoubleArrowRight from "@icons/double_arrow_right_black.svg?react";
import IconDoubleArrowRightGray from "@icons/double_arrow_right_gray.svg?react";

import * as styles from "./pagination.css";
import { usePagination } from "./use-pagination";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const {
    pageNumbers,
    hasPrevDouble,
    hasNextDouble,
    hasPrevious,
    hasNext,
    handleDoubleArrowLeftClick,
    handleDoubleArrowRightClick,
    handleArrowLeftClick,
    handleArrowRightClick,
    goToPage,
    showDoubleArrows,
  } = usePagination({ currentPage, totalPages, onPageChange });

  if (totalPages <= 0) return null;

  return (
    <div className={styles.paginationWrapper}>
      {showDoubleArrows && (
        <button
          className={`${styles.iconButton} ${!hasPrevDouble ? styles.iconButtonDisabled : ""}`}
          onClick={handleDoubleArrowLeftClick}
          disabled={!hasPrevDouble}
        >
          {hasPrevDouble ? (
            <IconDoubleArrowLeft />
          ) : (
            <IconDoubleArrowLeftGray />
          )}
        </button>
      )}

      <button
        className={`${styles.iconButton} ${!hasPrevious ? styles.iconButtonDisabled : ""}`}
        onClick={handleArrowLeftClick}
        disabled={!hasPrevious}
      >
        {hasPrevious ? <IconArrowLeft /> : <IconArrowLeftGray />}
      </button>

      {pageNumbers.map((page) => (
        <button
          key={page}
          className={`${styles.pageButton} ${page === currentPage ? styles.activePage : ""}`}
          onClick={() => goToPage(page)}
        >
          {page}
        </button>
      ))}

      <button
        className={`${styles.iconButton} ${!hasNext ? styles.iconButtonDisabled : ""}`}
        onClick={handleArrowRightClick}
        disabled={!hasNext}
      >
        {hasNext ? <IconArrowRight /> : <IconArrowRightGray />}
      </button>

      {showDoubleArrows && (
        <button
          className={`${styles.iconButton} ${!hasNextDouble ? styles.iconButtonDisabled : ""}`}
          onClick={handleDoubleArrowRightClick}
          disabled={!hasNextDouble}
        >
          {hasNextDouble ? (
            <IconDoubleArrowRight />
          ) : (
            <IconDoubleArrowRightGray />
          )}
        </button>
      )}
    </div>
  );
};

export { Pagination };
