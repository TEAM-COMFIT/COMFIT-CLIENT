import { useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { ROUTES } from "@/app/routes/paths";
import {
  BookmarkEmptyState,
  BookmarkTable,
  useBookmarkStore,
  useDeleteBookmark,
  useGetBookmarkCompaniesQuery,
} from "@/features/bookmark";
import { IconBookmarkBefore, IconTrash } from "@/shared/assets/icons";
import { modalStore } from "@/shared/model/store";
import { Alert, Button, ModalBasic, Pagination, Search } from "@/shared/ui";

import * as styles from "./bookmark-page.css";

import type { BookmarkRow } from "@/features/bookmark";

const BOOKMARK_QUERY_KEY = "keyword";
const BOOKMARK_PAGE_QUERY_KEY = "page";
const BOOKMARK_DELETE_MODAL_ID = "bookmark-delete-modal";
// 검색 결과 페이징은 서버 페이지 크기 기준을 따릅니다.
const BOOKMARK_PAGE_SIZE = 4;

const BookmarkPage = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedIds, setSelectedIds] = useState<Set<number>>(new Set());
  const [isDeleteErrorOpen, setIsDeleteErrorOpen] = useState(false);
  const setBookmarkOverride = useBookmarkStore(
    (state) => state.setBookmarkOverride
  );

  const keyword = searchParams.get(BOOKMARK_QUERY_KEY)?.trim() ?? "";
  const currentPageParam = Number(searchParams.get(BOOKMARK_PAGE_QUERY_KEY));
  const currentPage =
    Number.isInteger(currentPageParam) && currentPageParam > 0
      ? currentPageParam
      : 1;

  const {
    data: bookmarkCompanies,
    isLoading,
    isFetching,
  } = useGetBookmarkCompaniesQuery(currentPage);
  const { mutateAsync: deleteBookmark, isPending: isDeletingBookmark } =
    useDeleteBookmark();
  const [searchInput, setSearchInput] = useState(keyword);
  const rows = useMemo<BookmarkRow[]>(
    () => bookmarkCompanies?.content ?? [],
    [bookmarkCompanies?.content]
  );

  useEffect(() => {
    setSearchInput(keyword);
  }, [keyword]);

  const filteredRows = useMemo(() => {
    if (!keyword) {
      return rows;
    }

    const normalizedKeyword = keyword.toLowerCase();
    return rows.filter((row) =>
      row.companyName.toLowerCase().includes(normalizedKeyword)
    );
  }, [keyword, rows]);

  const totalPage = keyword
    ? Math.ceil(filteredRows.length / BOOKMARK_PAGE_SIZE)
    : (bookmarkCompanies?.totalPage ?? 0);
  const paginationTotalPage = Math.max(totalPage, 1);
  const resolvedCurrentPage = Math.min(currentPage, paginationTotalPage);

  const currentPageRows = useMemo(() => {
    if (!keyword) {
      return rows;
    }

    const startIndex = (resolvedCurrentPage - 1) * BOOKMARK_PAGE_SIZE;
    return filteredRows.slice(startIndex, startIndex + BOOKMARK_PAGE_SIZE);
  }, [filteredRows, keyword, resolvedCurrentPage, rows]);

  const visibleIds = useMemo(
    () => currentPageRows.map((row) => row.id),
    [currentPageRows]
  );

  const isAllSelected =
    visibleIds.length > 0 && visibleIds.every((id) => selectedIds.has(id));

  const isDeleteDisabled = selectedIds.size === 0;
  const isBookmarkEmpty = !isLoading && !isFetching && rows.length === 0;
  const isSearchResultEmpty = rows.length > 0 && filteredRows.length === 0;
  const showPagination = !isBookmarkEmpty && !isSearchResultEmpty;

  const updateSearchParams = (nextKeyword: string, nextPage: number) => {
    const nextSearchParams = new URLSearchParams(searchParams);

    if (nextKeyword) {
      nextSearchParams.set(BOOKMARK_QUERY_KEY, nextKeyword);
    } else {
      nextSearchParams.delete(BOOKMARK_QUERY_KEY);
    }

    if (nextPage > 1) {
      nextSearchParams.set(BOOKMARK_PAGE_QUERY_KEY, String(nextPage));
    } else {
      nextSearchParams.delete(BOOKMARK_PAGE_QUERY_KEY);
    }

    setSearchParams(nextSearchParams);
  };

  const handleSearch = (value: string) => {
    const trimmedValue = value.trim();

    if (value.length > 0 && trimmedValue.length === 0) {
      setSearchInput(keyword);
      return;
    }

    updateSearchParams(trimmedValue, 1);
    setSelectedIds(new Set());
  };

  const handlePageChange = (page: number) => {
    setSelectedIds(new Set());
    updateSearchParams(keyword, page);
  };

  const handleToggleAll = (checked: boolean) => {
    if (checked) {
      setSelectedIds((prev) => {
        const next = new Set(prev);
        visibleIds.forEach((id) => next.add(id));
        return next;
      });
      return;
    }

    setSelectedIds((prev) => {
      const next = new Set(prev);
      visibleIds.forEach((id) => next.delete(id));
      return next;
    });
  };

  const handleToggleRow = (rowId: number, checked: boolean) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);

      if (checked) {
        next.add(rowId);
      } else {
        next.delete(rowId);
      }

      return next;
    });
  };

  const handleDeleteSelected = async () => {
    const rowsToDelete = rows.filter((row) => selectedIds.has(row.id));
    const deleteResults = await Promise.allSettled(
      rowsToDelete.map((row) => deleteBookmark(row.companyId))
    );

    const succeededRows = rowsToDelete.filter(
      (_, index) => deleteResults[index]?.status === "fulfilled"
    );
    const hasFailedDelete = deleteResults.some(
      (result) => result.status === "rejected"
    );

    if (succeededRows.length > 0) {
      succeededRows.forEach((row) => {
        setBookmarkOverride(row.companyId, false);
      });
    }

    setSelectedIds(new Set());
    modalStore.close(BOOKMARK_DELETE_MODAL_ID);

    if (hasFailedDelete) {
      setIsDeleteErrorOpen(true);
    }
  };

  const handleOpenDeleteModal = () => {
    if (isDeleteDisabled) return;

    modalStore.open(
      <ModalBasic
        icon={
          <IconTrash className={styles.modalTrashIcon} width={48} height={48} />
        }
        title="선택한 북마크를 삭제할까요?"
        subTitle="삭제하면 다시 복구할 수 없어요"
        closeText="취소하기"
        confirmText="삭제하기"
        onClose={() => modalStore.close(BOOKMARK_DELETE_MODAL_ID)}
        onConfirm={handleDeleteSelected}
      />,
      undefined,
      undefined,
      BOOKMARK_DELETE_MODAL_ID
    );
  };

  const handleClickCompany = (companyId: number) => {
    setBookmarkOverride(companyId, true);
    navigate(ROUTES.COMPANY(String(companyId)));
  };

  return (
    <main className={styles.page}>
      <section className={styles.topRow}>
        <div className={styles.headerSection}>
          <IconBookmarkBefore className={styles.titleIcon} aria-hidden="true" />
          <div className={styles.titleWrap}>
            <h1 className={styles.title}>기업 북마크</h1>
            <p className={styles.subtitle}>
              최근 6개월 이내에 스크랩한 기업정보 입니다
            </p>
          </div>
        </div>

        <div className={styles.actionSection}>
          <div className={styles.searchWrap}>
            <Search
              size="small"
              value={searchInput}
              onChange={setSearchInput}
              onSearch={handleSearch}
              placeholder="기업명 검색"
              inputAriaLabel="기업명 검색"
            />
          </div>

          <div className={styles.deleteButtonWrap}>
            <Button
              variant="secondary"
              size="medium"
              disabled={isDeleteDisabled || isDeletingBookmark}
              onClick={handleOpenDeleteModal}
              aria-label="북마크 삭제"
            >
              <IconTrash className={styles.trashIcon} aria-hidden="true" />
            </Button>
          </div>
        </div>
      </section>

      <section className={styles.tableSection}>
        {isBookmarkEmpty ? (
          <BookmarkEmptyState type="bookmark" />
        ) : isSearchResultEmpty ? (
          <BookmarkEmptyState type="search" />
        ) : (
          <BookmarkTable
            rows={currentPageRows}
            selectedIds={selectedIds}
            isAllSelected={isAllSelected}
            onToggleAll={handleToggleAll}
            onToggleRow={handleToggleRow}
            onClickCompany={handleClickCompany}
          />
        )}
      </section>

      {showPagination && (
        <section className={styles.paginationSection}>
          <Pagination
            currentPage={resolvedCurrentPage}
            totalPage={paginationTotalPage}
            onPageChange={handlePageChange}
          />
        </section>
      )}

      {isDeleteErrorOpen ? (
        <Alert
          variant="error"
          title="오류"
          description="북마크 삭제에 실패했습니다"
          onClose={() => setIsDeleteErrorOpen(false)}
        />
      ) : null}
    </main>
  );
};

export { BookmarkPage };
