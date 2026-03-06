import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { useGetAiReportList } from "@/features/matching-list/api/use-get-matching-list";
import { ICON_MATCH, ERROR } from "@/shared/assets/images";
import { Search } from "@/shared/ui";

import { ListSection } from "./list-section/list-section";
import * as styles from "./matching-list-page.css";

const MatchingListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const keyword = searchParams.get("keyword") || "";

  const { data, isLoading } = useGetAiReportList({
    page: currentPage,
    keyword,
  });
  const { content = [], totalPage = 1 } = data ?? {};

  const showEmptyState = !isLoading && content.length === 0;
  const showList = content.length > 0;

  const [searchValue, setSearchValue] = useState(keyword);

  const handleSearch = (newKeyword: string) => {
    setSearchParams({
      keyword: newKeyword,
      page: "1",
    });
  };

  const handlePageChange = (page: number) => {
    setSearchParams({
      keyword,
      page: String(page),
    });
  };

  const handleSearchChange = (keyword: string) => {
    setSearchValue(keyword);
  };

  useEffect(() => {
    setSearchValue(keyword);
  }, [keyword]);

  return (
    <main className={styles.container}>
      {/* header 섹션 */}
      <div className={styles.headerWrapper}>
        <div className={styles.headerLeft}>
          <img
            className={styles.matchIcon}
            src={ICON_MATCH}
            alt="Match Icon"
            aria-hidden
          />
          <div className={styles.headerText}>
            <h1 className={styles.title}>매칭 경험 목록</h1>
            <p className={styles.description}>
              AI가 분석한 경험 매칭 결과를 확인해보세요.
            </p>
          </div>
        </div>

        <Search
          placeholder="기업명 검색"
          size="small"
          value={searchValue}
          onChange={handleSearchChange}
          onSearch={handleSearch}
        />
      </div>
      {/* 매칭 아이템 리스트 섹션 */}
      {showList ? (
        <ListSection
          matchingList={content}
          totalPage={totalPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      ) : showEmptyState ? (
        <div className={styles.emptyState}>
          <img
            className={styles.emptyImage}
            src={ERROR}
            alt="등록된 경험이 없습니다"
          />
          <p className={styles.emptyTitle}>"검색 결과가 없습니다"</p>
          <p className={styles.emptyDescription}>
            {keyword
              ? "다른 검색어로 다시 시도해보세요."
              : "경험 등록하기 버튼을 눌러 경험을 등록해보세요."}
          </p>
        </div>
      ) : null}
    </main>
  );
};

export { MatchingListPage };
