import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { useGetCompanies } from "@/features/home";
import { ScaleFilter, IndustryFilter } from "@/features/home/ui";
import { homeBanner } from "@/shared/assets/images";
// import { SCALE } from "@/shared/config";
import { SCALE, INDUSTRY } from "@/shared/config";
import { Toggle, Pagination } from "@/shared/ui";
import { Search } from "@/shared/ui/search/search";
import { CompanyCard } from "@/widgets";

import * as styles from "./search-section.css";

import type { IndustryCode, ScaleCode } from "@/shared/config";

const SearchSection = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // URL 파라미터 추출
  const keyword = searchParams.get("keyword") || "";
  const pageParam = searchParams.get("page");
  const industryParam = searchParams.get("industry");
  const scaleParam = searchParams.get("scale");
  const recruitedParam = searchParams.get("isRecruited");

  // 다중 선택을 위한 파라미터 파싱 (쉼표 기준 분리)

  const selectedIndustries = industryParam
    ? (industryParam.split(",") as IndustryCode[])
    : [];

  const selectedScales = scaleParam
    ? (scaleParam.split(",") as ScaleCode[])
    : [];

  // 유효성 검사(page, industry, scale, isRecruited)
  const isInvalidPage =
    pageParam !== null && (isNaN(Number(pageParam)) || Number(pageParam) < 1);
  const currentPage = isInvalidPage ? 1 : Number(pageParam) || 1;

  const isValidIndustry =
    industryParam === null ||
    selectedIndustries.every((ind) => Object.keys(INDUSTRY).includes(ind));

  const isValidScale =
    scaleParam === null ||
    selectedScales.every((sc) => Object.keys(SCALE).includes(sc));

  const isRecruited = recruitedParam !== "false";

  const params = {
    keyword,
    industry: selectedIndustries.length > 0 ? selectedIndustries : undefined,
    scale: selectedScales.length > 0 ? selectedScales : undefined,
    page: currentPage,
    isRecruited,
  };

  const { data, isLoading, isPlaceholderData } = useGetCompanies(params);
  const content = data?.content || [];
  const hasResult = content.length > 0;
  const totalPage = data?.totalPage ?? 1;

  const [searchValue, setSearchValue] = useState(keyword);

  // URL 강제 교정
  useEffect(() => {
    if (isLoading) return;

    const isExceedingPage = currentPage > totalPage && totalPage > 0;
    const isInvalidRecruited =
      recruitedParam !== null &&
      recruitedParam !== "true" &&
      recruitedParam !== "false";

    if (
      isInvalidPage ||
      isExceedingPage ||
      !isValidIndustry ||
      !isValidScale ||
      isInvalidRecruited
    ) {
      const newParams = new URLSearchParams(searchParams);

      if (isInvalidPage || isExceedingPage) newParams.set("page", "1");
      if (!isValidIndustry) newParams.delete("industry");
      if (!isValidScale) newParams.delete("scale");
      if (isInvalidRecruited) newParams.set("isRecruited", "true");

      setSearchParams(newParams, { replace: true });
    }
  }, [
    currentPage,
    totalPage,
    isInvalidPage,
    isValidIndustry,
    isValidScale,
    recruitedParam,
    isLoading,
    searchParams,
    setSearchParams,
  ]);

  const updateSearchParams = (
    patch: Record<string, string | number | boolean | undefined>
  ) => {
    const newParams = new URLSearchParams(searchParams);

    Object.entries(patch).forEach(([key, value]) => {
      if (value === undefined || value === "") {
        newParams.delete(key);
      } else {
        newParams.set(key, String(value));
      }
    });

    if (!("page" in patch)) {
      newParams.set("page", "1");
    }

    setSearchParams(newParams);
  };

  const handleToggleFilter = (
    currentList: string[],
    key: "industry" | "scale",
    checkedValue: string
  ) => {
    const nextList = currentList.includes(checkedValue)
      ? currentList.filter((item) => item !== checkedValue)
      : [...currentList, checkedValue];

    updateSearchParams({
      [key]: nextList.length > 0 ? nextList.join(",") : undefined,
    });
  };

  const handlePageChange = (newPage: number) => {
    if (isPlaceholderData) return;
    updateSearchParams({ page: newPage });
  };

  const handleSearch = (newKeyword: string) => {
    updateSearchParams({ keyword: newKeyword });
  };

  useEffect(() => {
    setSearchValue(keyword);
  }, [keyword]);

  return (
    <>
      <section
        className={styles.heroSection}
        style={{ backgroundImage: `url(${homeBanner})` }}
      >
        <div className={styles.heroContent}>
          <p className={styles.subText}>
            마케터를 위한 기업 분석과 자소서 작성 가이드
          </p>
          <h1 className={styles.mainText}>
            기업을 이해하는 깊이만큼,
            <br />
            <span className={styles.highlight}>지원 전략</span>이 달라집니다
          </h1>
          <div className={styles.searchWrapper}>
            <Search
              size="medium"
              placeholder="지원하고 싶은 기업을 검색해보세요"
              value={searchValue}
              onChange={setSearchValue}
              onSearch={handleSearch}
            />
          </div>
        </div>
      </section>

      <section className={styles.companyListSection}>
        <div className={styles.container}>
          <div className={styles.filterWrapper}>
            <IndustryFilter
              values={selectedIndustries}
              onChange={(code) =>
                handleToggleFilter(selectedIndustries, "industry", code)
              }
            />

            {/* <ScaleFilter
              value={scale}
              isTouched={isScaleTouched}
              onChange={(newScale) => {
                setIsScaleTouched(true);
                updateSearchParams({ scale: newScale });
              }}
            /> */}
            <ScaleFilter
              values={selectedScales}
              onChange={(code) =>
                handleToggleFilter(selectedScales, "scale", code)
              }
            />

            <p className={styles.toggle}>
              총 {data?.totalElements ?? 0}개 | 채용중인 기업만
            </p>

            <Toggle
              checked={isRecruited}
              onCheckedChange={(checked) =>
                updateSearchParams({ isRecruited: checked })
              }
            />
          </div>

          {isLoading || hasResult ? (
            <>
              <div className={styles.companyGridStyle}>
                {content.map(
                  ({
                    id,
                    name,
                    industry: itemIndustry,
                    scale: itemScale,
                    logo,
                  }) => (
                    <CompanyCard
                      key={id}
                      id={id}
                      companyName={name}
                      industry={itemIndustry as IndustryCode}
                      scale={itemScale as ScaleCode}
                      logoUrl={logo}
                    />
                  )
                )}
              </div>
              <Pagination
                currentPage={currentPage}
                totalPage={totalPage}
                onPageChange={handlePageChange}
              />
            </>
          ) : (
            <div className={styles.emptyState}>
              <p className={styles.emptyTitle}>검색 결과가 없습니다</p>
              <p className={styles.emptyDescription}>
                다른 키워드로 검색하거나 필터를 변경해 보세요.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export { SearchSection };
