import { useState } from "react";

import { useGetCompanies } from "@/features/home";
import { ScaleFilter, IndustryFilter } from "@/features/home/ui";
import { homeBanner } from "@/shared/assets/images";
import { Toggle, Pagination } from "@/shared/ui";
import { Search } from "@/shared/ui/search/search";
import { CompanyCard } from "@/widgets";

import * as styles from "./search-section.css";

import type { IndustryCode, ScaleCode } from "@/shared/config";

interface CompanySearchParamsType {
  keyword?: string;
  industry?: IndustryCode;
  scale?: ScaleCode;
  sort?: string;
  page?: number;
  isRecruited?: boolean;
}

const SearchSection = () => {
  const [params, setParams] = useState<CompanySearchParamsType>({
    page: 1,
    isRecruited: true,
  });
  const { data, isLoading, isPlaceholderData } = useGetCompanies(params);
  const content = data?.content || [];
  const hasResult = content.length > 0;
  const [searchValue, setSearchValue] = useState("");

  const currentPage = params.page ?? 1;

  // 검색 query param 변경 핸들러
  const updateParams = (patch: Partial<CompanySearchParamsType>) => {
    setParams((prev) => ({
      ...prev,
      ...patch,
    }));
  };

  const handlePageChange = (newPage: number) => {
    if (isPlaceholderData) return;
    updateParams({ page: newPage });
  };

  return (
    <>
      {/* Hero */}
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
              onSearch={(keyword) => updateParams({ keyword, page: 1 })}
            />
          </div>
        </div>
      </section>

      {/* 기업 리스트 */}
      <section className={styles.companyListSection}>
        <div className={styles.container}>
          {/* 필터 */}
          <div className={styles.filterWrapper}>
            <IndustryFilter
              value={params.industry ?? null}
              onChange={(industry) => updateParams({ industry, page: 1 })}
            />

            <ScaleFilter
              value={params.scale ?? null}
              onChange={(scale) => updateParams({ scale, page: 1 })}
            />

            <p className={styles.toggle}>
              총 {data?.totalElements ?? 0}개 | 채용중인 기업만
            </p>

            <Toggle
              checked={params.isRecruited ?? true}
              onCheckedChange={(isRecruited) =>
                updateParams({ isRecruited, page: 1 })
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
                currentPage={currentPage}
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
