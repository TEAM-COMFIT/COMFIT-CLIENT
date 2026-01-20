import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ROUTES } from "@/app/routes/paths";
import { IconExp } from "@/shared/assets/icons";
import {
  getExperienceTypeCode,
  type ExperienceTypeCode,
} from "@/shared/config/experience";
import { ExperienceFilter } from "@/widgets";

import { MOCK_EXPERIENCES } from "./experience-mock-data";
import * as styles from "./experience-page.css";
import { ExperienceListContainer } from "./ui/experience-list-container";

const PAGE_SIZE = 6;

const ExperiencePage = () => {
  const [filter, setFilter] = useState<ExperienceTypeCode | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  // TODO: api 연동 후 삭제 예정
  const baseTotalElements = MOCK_EXPERIENCES.length;

  const filteredAll = useMemo(() => {
    if (!filter) return MOCK_EXPERIENCES;
    return MOCK_EXPERIENCES.filter((experience) => {
      const normalizedType = getExperienceTypeCode(experience.type);
      return normalizedType === filter;
    });
  }, [filter]);

  const totalElements = filteredAll.length;
  const totalPage = Math.ceil(totalElements / PAGE_SIZE);
  const safeCurrentPage =
    totalPage === 0 ? 1 : Math.min(currentPage, totalPage);

  const pagedExperiences = useMemo(() => {
    const startIndex = (safeCurrentPage - 1) * PAGE_SIZE;
    return filteredAll.slice(startIndex, startIndex + PAGE_SIZE);
  }, [filteredAll, safeCurrentPage]);

  const summaryResult = useMemo(
    () => ({
      content: pagedExperiences,
      currentPage: safeCurrentPage,
      totalPage,
      totalElements,
    }),
    [pagedExperiences, safeCurrentPage, totalElements, totalPage]
  );
  const responseData = useMemo(
    () => ({
      errorCode: null,
      message: "OK",
      result: summaryResult,
    }),
    [summaryResult]
  );
  // const { data } = useExperienceListQuery("쿼리키", filter, currentPage);

  const handleFilterChange = (value: ExperienceTypeCode) => {
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
          >
            경험 등록하기
          </button>
          {baseTotalElements > 0 && (
            <ExperienceFilter value={filter} onChange={handleFilterChange} />
          )}
        </div>
      </section>

      <ExperienceListContainer
        data={responseData}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export { ExperiencePage };
