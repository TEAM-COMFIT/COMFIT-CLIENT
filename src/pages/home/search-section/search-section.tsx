import { useState, useEffect } from "react";

import { useGetCompanies } from "@/features/home/api/companies.query";
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
  const [params, setParams] = useState<CompanySearchParamsType>({});
  // TODO: 서버에서 받아오는 데이터(추후 해당 값으로 변경 필요) -> queryparams로 페이지네이션 처리
  const { data } = useGetCompanies(params);

  const [searchValue, setSearchValue] = useState("");

  // 검색 query param 변경 핸들러
  const updateParams = (patch: Partial<CompanySearchParamsType>) => {
    setParams((prev) => ({
      ...prev,
      ...patch,
    }));
  };

  useEffect(() => {
    console.log("Search params changed:", params);
  }, [params]);

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
              onSearch={(keyword) => updateParams({ keyword })}
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
              onChange={(industry) => updateParams({ industry })}
            />

            <ScaleFilter
              value={params.scale ?? null}
              onChange={(scale) => updateParams({ scale })}
            />

            <p className={styles.toggle}>총 {1}개 | 채용중인 기업만</p>

            <Toggle
              checked={params.isRecruited ?? true}
              onCheckedChange={(isRecruited) => updateParams({ isRecruited })}
            />
          </div>

          {/* 카드 리스트 (mock) */}
          <div className={styles.companyGridStyle}>
            {data?.content?.map(({ id, name, industry, scale, logo }) => (
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

          {/* 페이지네이션 */}
          <Pagination
            currentPage={data?.currentPage ?? 1}
            totalPage={data?.totalPage ?? 1}
            onPageChange={(page) => updateParams({ page })}
          />
        </div>
      </section>
    </>
  );
};

export { SearchSection };
