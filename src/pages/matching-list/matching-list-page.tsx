import { useState } from "react";

import { ICON_MATCH, COMPANY_DETAIL } from "@/shared/assets/images";
import { Search } from "@/shared/ui";

import { ListSection } from "./list-section/list-section";
import * as styles from "./matching-list-page.css";

export interface MatchingItemDto {
  id: number;
  companyName: string;
  experienceTitle: string;
  createdAt: string; // YYYY-MM-DD
}

const MOCK_MATCHING_LIST: MatchingItemDto[] = [
  {
    id: 1,
    companyName: "LG 전자",
    experienceTitle: "인스타그램 마케팅 콘텐츠 기획 및 운영",
    createdAt: "2025-04-21",
  },
  {
    id: 2,
    companyName: "LG 전자",
    experienceTitle: "브랜드 캠페인 성과 분석",
    createdAt: "2025-04-20",
  },
  {
    id: 3,
    companyName: "삼성전자",
    experienceTitle: "SNS 광고 집행 및 리포트 작성",
    createdAt: "2025-04-18",
  },
  {
    id: 4,
    companyName: "카카오",
    experienceTitle: "카카오 채널 운영 및 이벤트 기획",
    createdAt: "2025-04-17",
  },
];

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
  // const { data } = useGetMatchingList(params);

  const handleSearch = (keyword: string) => {
    setParams({ keyword, page: 1 });
    console.log("검색어:", params);
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
        <div className={styles.titleSection}>
          <div className={styles.matchIcon}>
            <img src={ICON_MATCH} alt="Match Icon" aria-hidden="true" />
          </div>

          <div className={styles.titleWrapper}>
            <h1 className={styles.title}>매칭 경험 목록</h1>
            <p className={styles.subTitle}>
              AI가 분석한 경험 매칭 결과를 확인해보세요.
            </p>
          </div>
        </div>
        <Search
          placeholder="기업명 검색"
          size="small"
          value={params.keyword}
          onChange={(keyword) => setParams((prev) => ({ ...prev, keyword }))}
          onSearch={handleSearch}
        />
      </div>
      {/* 매칭 아이템 리스트 섹션 */}
      <ListSection
        matchingList={MOCK_MATCHING_LIST}
        totalPage={1}
        currentPage={params.page}
        onPageChange={handlePageChange}
      />
      <img
        src={COMPANY_DETAIL}
        alt="Company Detail"
        style={{ border: "1px solid red" }}
      />
    </main>
  );
};

export { MatchingListPage };
