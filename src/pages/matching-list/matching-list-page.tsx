import { useState } from "react";

import { useGetAiReportList } from "@/features/matching-list/api/use-matching-list";
import { ICON_MATCH, ERROR } from "@/shared/assets/images";
import { Search } from "@/shared/ui";

import { ListSection } from "./list-section/list-section";
import * as styles from "./matching-list-page.css";

const MatchingListPage = () => {
  interface MatchingListParams {
    keyword?: string;
    page: number;
  }

  const [params, setParams] = useState<MatchingListParams>({
    keyword: "",
    page: 1,
  });

  // TODO: api 연동 예정
  const { data } = useGetAiReportList(params);

  const { content = [], currentPage = 1, totalPage = 1 } = data ?? {};

  const handleSearch = (keyword: string) => {
    setParams({ keyword, page: 1 });
  };

  const handlePageChange = (page: number) => {
    setParams((prev) => ({
      ...prev,
      page,
    }));
  };

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
        {/* <div className={styles.titleSection}>
          <div className={styles.matchIcon}>
            <img src={ICON_MATCH} alt="Match Icon" aria-hidden="true" />
          </div>

          <div className={styles.titleWrapper}>
            <h1 className={styles.title}>매칭 경험 목록</h1>
            <p className={styles.subTitle}>
              AI가 분석한 경험 매칭 결과를 확인해보세요.
            </p>
          </div>
        </div> */}

        <Search
          placeholder="기업명 검색"
          size="small"
          value={params.keyword}
          onChange={(keyword) => setParams((prev) => ({ ...prev, keyword }))}
          onSearch={handleSearch}
        />
      </div>
      {/* 매칭 아이템 리스트 섹션 */}
      {content.length > 0 ? (
        <ListSection
          matchingList={content}
          totalPage={totalPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      ) : (
        <div className={styles.emptyState}>
          <img
            className={styles.emptyImage}
            src={ERROR}
            alt="등록된 경험이 없습니다"
          />
          <p className={styles.emptyTitle}>등록된 경험이 없습니다</p>
          <p className={styles.emptyDescription}>
            경험 등록하기 버튼을 눌러 경험을 등록해보세요.
          </p>
        </div>
      )}
    </main>
  );
};

export { MatchingListPage };
