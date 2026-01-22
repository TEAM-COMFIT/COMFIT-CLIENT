import { useNavigate } from "react-router-dom";

import { ROUTES } from "@/app/routes/paths";
import { ERROR } from "@/shared/assets/images";
import { Pagination, Tag } from "@/shared/ui";

import * as styles from "./experience-list-container.css";

import type { ExperienceList } from "@/features/experience/type/experience";

interface ExperienceListContainerProps {
  data?: ExperienceList;
  onPageChange: (page: number) => void;
}

const ExperienceListContainer = ({
  data,
  onPageChange,
}: ExperienceListContainerProps) => {
  const navigate = useNavigate();

  const isEmpty = data?.content.length === 0;

  return (
    <section
      className={styles.container}
      aria-live="polite"
      aria-label="경험 리스트"
    >
      {isEmpty ? (
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
      ) : (
        <div className={styles.grid}>
          {data?.content.map((experience) => (
            <button
              key={experience.id}
              type="button"
              className={styles.card}
              onClick={() =>
                navigate(ROUTES.EXPERIENCE_DETAIL(String(experience.id)))
              }
            >
              <div className={styles.cardHeader}>
                <span className={styles.title}>{experience.title}</span>
                {experience.isDefault && (
                  <div className={styles.tag}>
                    <Tag type="secondary">기본 경험</Tag>
                  </div>
                )}
              </div>
              <span className={styles.date}>{experience.updatedAt}</span>
            </button>
          ))}
        </div>
      )}

      {!!data?.totalElements && (
        <div className={styles.pagination}>
          <Pagination
            currentPage={data.currentPage}
            totalPage={data.totalPage}
            onPageChange={onPageChange}
          />
        </div>
      )}
    </section>
  );
};

export { ExperienceListContainer };
