import { ERROR, SEARCH_IMG } from "@/shared/assets/images";

import * as styles from "./bookmark-empty-state.css";

type BookmarkEmptyStateType = "bookmark" | "search";

interface BookmarkEmptyStateProps {
  type: BookmarkEmptyStateType;
}

const EMPTY_STATE_CONTENT = {
  bookmark: {
    image: ERROR,
    alt: "북마크한 기업이 없습니다",
    title: "북마크한 기업이 없습니다",
    description: "관심 있는 기업을 탐색하고 북마크해 보세요.",
  },
  search: {
    image: SEARCH_IMG,
    alt: "검색 결과가 없습니다",
    title: "검색 결과가 없습니다",
    description: "다른 키워드로 다시 검색해 보세요.",
  },
} as const;

const BookmarkEmptyState = ({ type }: BookmarkEmptyStateProps) => {
  const { image, alt, title, description } = EMPTY_STATE_CONTENT[type];
  const titleId = `${type}-empty-state-title`;

  return (
    <section className={styles.emptyContent} aria-labelledby={titleId}>
      <img className={styles.emptyImage} src={image} alt={alt} />
      <h2 id={titleId} className={styles.emptyTitle}>
        {title}
      </h2>
      <p className={styles.emptyDescription}>{description}</p>
    </section>
  );
};

export { BookmarkEmptyState };
