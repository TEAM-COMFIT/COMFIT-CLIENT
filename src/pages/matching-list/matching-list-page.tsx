import { useState } from "react";

import { MatchingItem } from "@/features/matching-list/ui/matching-item";
import { ICON_MATCH } from "@/shared/assets/images";
import { Search, Pagination } from "@/shared/ui";

import * as styles from "./matching-list-page.css";

const MatchingListPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  // TODO: 서버에서 받아오는 데이터(추후 해당 값으로 변경 필요)
  const [page, setPage] = useState(1);
  const totalPage = 12;

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
          value={searchTerm}
          onChange={setSearchTerm}
          onSearch={handleSearch}
        />
      </div>
      {/* 매칭 아이템 리스트 섹션 */}
      <div className={styles.listWrapper}>
        <div className={styles.list}>
          <MatchingItem
            matchingId={1}
            companyName="기업명"
            createdAt="2025-12-28"
            title="하나둘셋다하나둘셋넷다하나둘셋다하나둘셋넷다하나둘셋다하나둘셋넷다"
          />
          <MatchingItem
            matchingId={1}
            companyName="기업명"
            createdAt="2025-12-28"
            title="저는 지금 이채영입니다. 나는 지금 진유빈입니다. "
          />
          <MatchingItem
            matchingId={1}
            companyName="(주) 레진엔터테인ㅇ먼트언쩌구"
            createdAt="2025-12-28"
            title="래블업 인턴 경험"
          />
          <MatchingItem
            matchingId={1}
            companyName="기업명"
            createdAt="2025-12-28"
            title="하나둘셋다하나둘셋넷다하나둘셋다하나둘셋넷다하나둘셋다하나둘셋넷다30자여도 무너지지 않습니다."
          />
        </div>
        <Pagination
          currentPage={page}
          totalPage={totalPage}
          onPageChange={setPage}
        />
      </div>
    </main>
  );
};

export { MatchingListPage };
