import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { useGetCompanies } from "@/features/home";
import { ScaleFilter, IndustryFilter } from "@/features/home/ui";
import { homeBanner } from "@/shared/assets/images";
import { Toggle, Pagination } from "@/shared/ui";
import { Search } from "@/shared/ui/search/search";
import { CompanyCard } from "@/widgets";

import * as styles from "./search-section.css";

import type { IndustryCode, ScaleCode } from "@/shared/config";

const SearchSection = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get("keyword") || "";
  const industry = (searchParams.get("industry") as IndustryCode) || undefined;
  const scale = (searchParams.get("scale") as ScaleCode) || undefined;
  const page = Number(searchParams.get("page")) || 1;
  const isRecruited = searchParams.get("isRecruited") !== "false";

  const params = {
    keyword,
    industry,
    scale,
    page,
    isRecruited,
  };

  const { data, isLoading, isPlaceholderData } = useGetCompanies(params);
  const content = data?.content || [];
  const hasResult = content.length > 0;

  const [searchValue, setSearchValue] = useState(keyword);

  const [isScaleTouched, setIsScaleTouched] = useState(false);
  const [isIndustryTouched, setIsIndustryTouched] = useState(false);

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

    if (!patch.page) {
      newParams.set("page", "1");
    }

    setSearchParams(newParams);
  };

  const handlePageChange = (newPage: number) => {
    if (isPlaceholderData) return;
    updateSearchParams({ page: newPage });
  };

  const handleSearch = (newKeyword: string) => {
    updateSearchParams({ keyword: newKeyword });
  };

  // 검색값 유지
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
              value={industry ?? null}
              isTouched={isIndustryTouched}
              onChange={(newIndustry) => {
                setIsIndustryTouched(true);
                updateSearchParams({ industry: newIndustry });
              }}
            />

            <ScaleFilter
              value={scale}
              isTouched={isScaleTouched}
              onChange={(newScale) => {
                setIsScaleTouched(true);
                updateSearchParams({ scale: newScale });
              }}
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
                {content.map(({ id, name, industry, scale, logo }) => (
                  <CompanyCard
                    key={id}
                    id={id}
                    companyName={name}
                    industry={industry as IndustryCode}
                    scale={scale as ScaleCode}
                    logoUrl={logo}
                  />
                ))}
              </div>
              <Pagination
                currentPage={page}
                totalPage={data?.totalPage ?? 1}
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
