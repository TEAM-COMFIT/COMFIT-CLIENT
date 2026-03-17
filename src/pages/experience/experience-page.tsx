import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

import { ROUTES } from "@/app/routes/paths";
import { useGetExperienceList } from "@/features/experience/api/use-experience-list.query";
import { CAT_SPINNER } from "@/shared/assets/gifs";
import { IconExp } from "@/shared/assets/icons";
import { EXPERIENCE_TYPE } from "@/shared/config/experience";
import { ExperienceFilter } from "@/widgets";

import * as styles from "./experience-page.css";
import { ExperienceListContainer } from "./ui/experience-list-container";

const ExperiencePage = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isExpTouched, setIsExpTouched] = useState(false);

  const pageParam = searchParams.get("page");
  const typeParam = searchParams.get("type");

  // url 파라미터 값(page, type) 유효성 검사
  const isInvalidNumber =
    pageParam !== null && (isNaN(Number(pageParam)) || Number(pageParam) < 1);
  const currentPage = isInvalidNumber ? 1 : Number(pageParam) || 1;

  const isValidType = typeParam && typeParam in EXPERIENCE_TYPE;
  const type = isValidType ? typeParam : "";

  const { data, isLoading } = useGetExperienceList({
    type,
    page: currentPage,
  });

  const { totalPage = 1 } = data ?? {};

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

  // 페이지 쿼리스트링 강제 교정
  useEffect(() => {
    const isExceeding = currentPage > totalPage && totalPage > 0;

    // 페이지가 이상하거나 'type'에 정의되지 않은 유형(abc)이 들어온 경우 강제 교정
    if (isInvalidNumber || isExceeding || (typeParam && !isValidType)) {
      const newParams = new URLSearchParams(searchParams);

      if (isInvalidNumber || isExceeding) newParams.set("page", "1");
      if (typeParam && !isValidType) newParams.delete("type");

      setSearchParams(newParams, { replace: true });
    }
  }, [
    currentPage,
    totalPage,
    isInvalidNumber,
    isValidType,
    typeParam,
    searchParams,
    setSearchParams,
  ]);

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

      {isLoading ? (
        <section className={styles.listContainer}>
          <img src={CAT_SPINNER} className={styles.spinner} alt="로딩중" />
          <p className={styles.spinnerText}>기업 정보를 불러오고 있어요</p>
        </section>
      ) : (
        <ExperienceListContainer data={data} onPageChange={handlePageChange} />
      )}
    </div>
  );
};

export { ExperiencePage };
