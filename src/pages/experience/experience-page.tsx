import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ROUTES } from "@/app/routes/paths";
import { useGetExperienctList } from "@/features/experience/api/use-experience-list.query";
import { IconExp } from "@/shared/assets/icons";
import { ExperienceFilter } from "@/widgets";

import * as styles from "./experience-page.css";
import { ExperienceListContainer } from "./ui/experience-list-container";

import type { ExperienceTypeCode } from "@/shared/config/experience";

const ExperiencePage = () => {
  const [filter, setFilter] = useState<ExperienceTypeCode | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const { data } = useGetExperienctList({
    type: filter,
    page: currentPage,
  });

  const handleFilterChange = (value: ExperienceTypeCode | null) => {
    setFilter(value);
    setCurrentPage(1);
  };

  return (
    <div className={styles.page}>
      <section className={styles.header}>
        <div className={styles.headerLeft}>
          <IconExp className={styles.icon} />
          <div className={styles.headerText}>
            <h1 className={styles.title}>경험 등록</h1>
            <p className={styles.description}>
              내가 작성한 경험 리스트를 확인해보세요.
            </p>
          </div>
        </div>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.registerButton}
            onClick={() => navigate(ROUTES.EXPERIENCE_CREATE)}
            aria-label="새 경험 등록 페이지로 이동"
          >
            경험 등록하기
          </button>
          <ExperienceFilter value={filter} onChange={handleFilterChange} />
        </div>
      </section>
      <ExperienceListContainer data={data} onPageChange={setCurrentPage} />
    </div>
  );
};

export { ExperiencePage };
