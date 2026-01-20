import { MatchingItem } from "@/features/matching-list/ui/matching-item";
import { Pagination } from "@/shared/ui";

import * as styles from "./list-section.css";

import type { MatchingItemDto } from "../matching-list-page";

interface ListSectionProps {
  matchingList: MatchingItemDto[];
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
