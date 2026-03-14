import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

import { ROUTES } from "@/app/routes/paths";
import { useGetExperienceList } from "@/features/experience/api/use-experience-list.query";
import { IconExp } from "@/shared/assets/icons";
import { ExperienceFilter } from "@/widgets";

import * as styles from "./experience-page.css";
import { ExperienceListContainer } from "./ui/experience-list-container";

const ExperiencePage = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;
  const type = searchParams.get("type") || "";

  const [isExpTouched, setIsExpTouched] = useState(false);

  const { data } = useGetExperienceList({
    type,
    page: currentPage,
  });

  const handleFilterChange = (value: string) => {
    setIsExpTouched(true);
    setSearchParams({
      type: value,
      page: "1",
    });
  };

  const handlePageChange = (page: number) => {
    setSearchParams({
      type,
      page: String(page),
    });
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

          <ExperienceFilter
            value={type}
            onChange={handleFilterChange}
            isTouched={isExpTouched}
            hasTotal={true}
          />
        </div>
      </section>

      <ExperienceListContainer data={data} onPageChange={handlePageChange} />
    </div>
  );
};

export { ExperiencePage };
