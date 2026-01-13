import {
  IconArrowLeft,
  IconArrowRight,
  IconDoubleArrowLeft,
  IconDoubleArrowRight,
} from "@/shared/assets/icons";

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
    canGoPrevBlock,
    canGoNextBlock,
    hasPrevious,
    hasNext,
    goToPage,
    pageActions,
    showDoubleArrows,
  } = usePagination({ currentPage, totalPage, onPageChange });

  if (totalPage <= 0) return null;

  return (
    <nav aria-label="페이지네이션">
      <ul className={styles.paginationWrapper}>
        {showDoubleArrows && (
          <li>
            <button
              type="button"
              onClick={pageActions.goPrevBlock}
              disabled={!canGoPrevBlock}
              aria-label="이전 블록"
              className={styles.buttonVariants({
                variant: "arrow",
                active: canGoPrevBlock,
              })}
            >
              <IconDoubleArrowLeft />
            </button>
          </li>
        )}
        <li>
          <button
            type="button"
            onClick={pageActions.goPrevPage}
            disabled={!hasPrevious}
            aria-label="이전 페이지"
            className={styles.buttonVariants({
              variant: "arrow",
              active: hasPrevious,
            })}
          >
            <IconArrowLeft />
          </button>
        </li>

        {pageNumbers.map((page) => (
          <li key={page}>
            <button
              type="button"
              aria-current={page === currentPage ? "page" : undefined}
              className={styles.buttonVariants({
                variant: "number",
                active: page === currentPage,
              })}
              onClick={() => goToPage(page)}
            >
              {page}
            </button>
          </li>
        ))}
        <li>
          <button
            type="button"
            onClick={pageActions.goNextPage}
            disabled={!hasNext}
            aria-label="다음 페이지"
            className={styles.buttonVariants({
              variant: "arrow",
              active: hasNext,
            })}
          >
            <IconArrowRight />
          </button>
        </li>

        {showDoubleArrows && (
          <li>
            <button
              type="button"
              onClick={pageActions.goNextBlock}
              disabled={!canGoNextBlock}
              aria-label="다음 블록"
              className={styles.buttonVariants({
                variant: "arrow",
                active: canGoNextBlock,
              })}
            >
              <IconDoubleArrowRight />
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export { Pagination };
