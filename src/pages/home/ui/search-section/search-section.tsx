import { useMemo, useState, useEffect } from "react";

import { ScaleFilter, IndustryFilter } from "@/features/home/ui";
import { homeBanner, Logo } from "@/shared/assets/images";
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
  // TODO: 서버에서 받아오는 데이터(추후 해당 값으로 변경 필요) -> queryparams로 페이지네이션 처리
  const [page, setPage] = useState(1);
  const totalPage = 11;
  const totalElements = 105;

  const [params, setParams] = useState<CompanySearchParamsType>({});

  // 검색 query param 변경 핸들러
  const updateParams = (patch: Partial<CompanySearchParamsType>) => {
    setParams((prev) => ({
      ...prev,
      ...patch,
    }));
  };

  // TODO: API 호출용 파라미터. 실제 API 연동 시 사용 예정
  const requestParams = useMemo(() => {
    return {
      keyword: params.keyword,
      industry: params.industry,
      scale: params.scale,
      sort: params.sort,
      page: params.page,
      isRecruited: params.isRecruited,
    };
  }, [params]);

  // TODO: mock 데이터. api 연동 후 삭제 예정
  interface MockCompany {
    id: number;
    name: string;
    industry: IndustryCode;
    scale: ScaleCode;
    logo: string;
    isRecruited: boolean;
    likeCounts: number;
  }

  const MOCK_COMPANY_LIST: MockCompany[] = [
    {
      id: 1,
      name: "쿠팡",
      industry: "CONSUMER_GOODS",
      scale: "LARGE",
      logo: Logo,
      isRecruited: false,
      likeCounts: 0,
    },
    {
      id: 2,
      name: "하하하하하하",
      industry: "IT",
      scale: "LARGE",
      logo: Logo,
      isRecruited: false,
      likeCounts: 0,
    },
    {
      id: 3,
      name: "㈜레진엔터테인먼트",
      industry: "MEDIA_CONTENTS",
      scale: "LARGE",
      logo: Logo,
      isRecruited: true,
      likeCounts: 0,
    },
    {
      id: 4,
      name: "㈜컴퓨존",
      industry: "IT",
      scale: "MID_LARGE",
      logo: Logo,
      isRecruited: true,
      likeCounts: 0,
    },
    {
      id: 5,
      name: "㈜엘림넷",
      industry: "IT",
      scale: "MID_LARGE",
      logo: Logo,
      isRecruited: false,
      likeCounts: 0,
    },
    {
      id: 6,
      name: "(주)사람인에이치에스",
      industry: "LIFE_STYLE",
      scale: "MID_LARGE",
      logo: Logo,
      isRecruited: true,
      likeCounts: 0,
    },
    {
      id: 7,
      name: "휴먼웍스",
      industry: "IT",
      scale: "MID_LARGE",
      logo: Logo,
      isRecruited: false,
      likeCounts: 0,
    },
    {
      id: 8,
      name: "㈜폴라리스오피스",
      industry: "IT",
      scale: "SME",
      logo: Logo,
      isRecruited: true,
      likeCounts: 0,
    },
  ];

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

            <p className={styles.toggle}>
              총 {totalElements}개 | 채용중인 기업만
            </p>

            <Toggle
              checked={params.isRecruited ?? false}
              onCheckedChange={(isRecruited) => updateParams({ isRecruited })}
            />
          </div>

          {/* 카드 리스트 (mock) */}
          <div className={styles.companyGridStyle}>
            {MOCK_COMPANY_LIST.map((item) => (
              <CompanyCard
                key={item.id}
                id={item.id}
                companyName={item.name}
                industry={item.industry}
                scale={item.scale}
                logoUrl={item.logo}
              />
            ))}
          </div>

          {/* 페이지네이션 */}
          <Pagination
            currentPage={page}
            totalPage={totalPage}
            onPageChange={(page) => updateParams({ page })}
          />
        </div>
      </section>
    </>
  );
};

export { SearchSection };
