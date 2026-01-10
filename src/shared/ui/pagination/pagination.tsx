import IconArrowLeft from "@icons/arrow_left.svg?react";
import IconArrowRight from "@icons/arrow_right.svg?react";
import IconDoubleArrowLeft from "@icons/double_arrow_left.svg?react";
import IconDoubleArrowRight from "@icons/double_arrow_right.svg?react";

import * as styles from "./pagination.css";
import { usePagination } from "./use-pagination";

interface PaginationProps {
  currentPage: number;
  totalPage: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalPage,
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
  } = usePagination({ currentPage, totalPage, onPageChange });

  if (totalPage <= 0) return null;

  return (
    <div className={styles.paginationWrapper}>
      {showDoubleArrows && (
        <button onClick={handleDoubleArrowLeftClick} disabled={!hasPrevDouble}>
          <IconDoubleArrowLeft
            className={styles.buttonVariants({
              variant: "arrow",
              active: hasPrevDouble,
            })}
          />
        </button>
      )}

      <button onClick={handleArrowLeftClick} disabled={!hasPrevious}>
        <IconArrowLeft
          className={styles.buttonVariants({
            variant: "arrow",
            active: hasPrevious,
          })}
        />
      </button>

      {pageNumbers.map((page) => (
        <button
          key={page}
          aria-current={page === currentPage ? "page" : undefined}
          className={styles.buttonVariants({
            variant: "number",
            active: page === currentPage,
          })}
          onClick={() => goToPage(page)}
        >
          {page}
        </button>
      ))}

      <button onClick={handleArrowRightClick} disabled={!hasNext}>
        <IconArrowRight
          className={styles.buttonVariants({
            variant: "arrow",
            active: hasNext,
          })}
        />
      </button>

      {showDoubleArrows && (
        <button onClick={handleDoubleArrowRightClick} disabled={!hasNextDouble}>
          <IconDoubleArrowRight
            className={styles.buttonVariants({
              variant: "arrow",
              active: hasNextDouble,
            })}
          />
        </button>
      )}
    </div>
  );
};

export { Pagination };
