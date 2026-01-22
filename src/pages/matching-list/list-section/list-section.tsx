import { MatchingItem } from "@/features/matching-list";
import { Pagination } from "@/shared/ui";

import * as styles from "./list-section.css";

import type { MatchingItemType } from "@/features/matching-list";
interface ListSectionProps {
  matchingList: MatchingItemType[];
  totalPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}
const ListSection = ({
  matchingList,
  totalPage,
  currentPage,
  onPageChange,
}: ListSectionProps) => {
  return (
    <div className={styles.listWrapper}>
      <div className={styles.list} aria-label="매칭 경험 목록">
        {matchingList.map((item) => (
          <MatchingItem
            key={item.id}
            companyName={item.companyName}
            matchingId={item.id}
            createdAt={item.createdAt}
            title={item.experienceTitle}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPage={totalPage}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export { ListSection };
