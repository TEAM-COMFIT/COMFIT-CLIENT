import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ROUTES } from "@/app/routes/paths";
import {
  BOOKMARK_MOCK_ROWS,
  BOOKMARK_PAGE_SIZE,
  BookmarkEmptyState,
  BookmarkTable,
} from "@/features/bookmark";
import IconBookmarkBefore from "@/shared/assets/icons/icon_bookmark_before.svg?react";
import IconTrashOff from "@/shared/assets/icons/icon_trash_off.svg?react";
import { Button, Modal, Pagination, Search } from "@/shared/ui";

import * as styles from "./bookmark-page.css";

const BookmarkPage = () => {
  const navigate = useNavigate();

  const [rows, setRows] = useState(BOOKMARK_MOCK_ROWS);
  const [searchInput, setSearchInput] = useState("");
  const [keyword, setKeyword] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const filteredRows = useMemo(() => {
    if (!keyword) return rows;

    const normalizedKeyword = keyword.toLowerCase();
    return rows.filter((row) =>
      row.companyName.toLowerCase().includes(normalizedKeyword)
    );
  }, [keyword, rows]);

  const totalPage = Math.ceil(filteredRows.length / BOOKMARK_PAGE_SIZE);
  const paginationTotalPage = Math.max(totalPage, 1);
  const resolvedCurrentPage = Math.min(currentPage, paginationTotalPage);

  const currentPageRows = useMemo(() => {
    const startIndex = (resolvedCurrentPage - 1) * BOOKMARK_PAGE_SIZE;
    return filteredRows.slice(startIndex, startIndex + BOOKMARK_PAGE_SIZE);
  }, [filteredRows, resolvedCurrentPage]);

  const visibleIds = useMemo(
    () => currentPageRows.map((row) => row.id),
    [currentPageRows]
  );

  const isAllSelected =
    visibleIds.length > 0 && visibleIds.every((id) => selectedIds.includes(id));

  const isDeleteDisabled = selectedIds.length === 0;
  const isBookmarkEmpty = rows.length === 0;
  const isSearchResultEmpty = rows.length > 0 && filteredRows.length === 0;
  const showPagination = !isBookmarkEmpty && !isSearchResultEmpty;

  const handleSearch = (value: string) => {
    const trimmedValue = value.trim();

    if (value.length > 0 && trimmedValue.length === 0) {
      return;
    }

    setKeyword(trimmedValue);
    setCurrentPage(1);
    setSelectedIds([]);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleToggleAll = (checked: boolean) => {
    if (checked) {
      setSelectedIds((prev) => Array.from(new Set([...prev, ...visibleIds])));
      return;
    }

    setSelectedIds((prev) => prev.filter((id) => !visibleIds.includes(id)));
  };

  const handleToggleRow = (rowId: number, checked: boolean) => {
    setSelectedIds((prev) =>
      checked
        ? Array.from(new Set([...prev, rowId]))
        : prev.filter((id) => id !== rowId)
    );
  };

  const handleOpenDeleteModal = () => {
    if (isDeleteDisabled) return;
    setIsDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  const handleDeleteConfirm = () => {
    setRows((prev) => prev.filter((row) => !selectedIds.includes(row.id)));
    setSelectedIds([]);
    setIsDeleteModalOpen(false);
  };

  const handleClickCompany = (companyId: number) => {
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
              disabled={isDeleteDisabled}
              onClick={handleOpenDeleteModal}
              aria-label="북마크 삭제"
            >
              <IconTrashOff className={styles.trashIcon} aria-hidden="true" />
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

      <Modal isOpen={isDeleteModalOpen} onClose={handleCloseDeleteModal}>
        <Modal.XButton />
        <Modal.Content>
          <Modal.Title>선택한 북마크를 삭제할까요?</Modal.Title>
        </Modal.Content>
        <Modal.Buttons>
          <Button
            variant="secondary"
            size="large"
            onClick={handleDeleteConfirm}
          >
            삭제하기
          </Button>
          <Button
            variant="primary"
            size="large"
            onClick={handleCloseDeleteModal}
          >
            취소하기
          </Button>
        </Modal.Buttons>
      </Modal>
    </main>
  );
};

export { BookmarkPage };
