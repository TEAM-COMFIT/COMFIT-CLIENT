import { useMemo } from "react";

import KERORO from "@images/comfit_web_status.jpg";
import { SearchAutocomplete } from "@shared/ui/search-auto-complete/search-auto-complete";

import { appContainer } from "./home-page.css";

import type { SearchItem } from "@shared/ui/search-auto-complete/types";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const HomePage = () => {
  // 목업 데이터 (UI 확인용)
  const universities = useMemo<SearchItem[]>(
    () => [
      { id: "u-1", label: "서울대학교" },
      { id: "u-2", label: "서울시립대학교" },
      { id: "u-3", label: "서울과학기술대학교" },
      { id: "u-4", label: "서울여자대학교" },
      { id: "u-5", label: "서울교육대학교" },
      { id: "u-6", label: "명지대학교" },
    ],
    []
  );

  const companies = useMemo<SearchItem[]>(
    () => [
      { id: "c-1", label: "CJ ENM" },
      { id: "c-2", label: "CJ 제일제당" },
      { id: "c-3", label: "CJ 푸드빌" },
      { id: "c-4", label: "CJ 올리브영" },
      { id: "c-5", label: "CJ 프레시웨이" },
      { id: "c-6", label: "카카오" },
      { id: "c-7", label: "네이버" },
    ],
    []
  );

  // 목업 fetch 함수 (디바운스 + 로딩 상태 확인 가능)
  const fetchUniversities = async (query: string): Promise<SearchItem[]> => {
    await sleep(250);
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return universities.filter((x) => x.label.toLowerCase().includes(q));
  };

  const fetchCompanies = async (query: string): Promise<SearchItem[]> => {
    await sleep(250);
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return companies.filter((x) => x.label.toLowerCase().includes(q));
  };

  return (
    <div
      className={appContainer}
      style={{ padding: 24, display: "grid", gap: 28 }}
    >
      <h1>프리텐다드</h1>
      <p>카카오로 시작하기</p>
      <img src={KERORO} alt="Keroro" width={400} />

      {/* 온보딩 자동완성 search */}
      <section style={{ display: "grid", gap: 10 }}>
        <h2 style={{ margin: 0, fontSize: 14, fontWeight: 600 }}>
          온보딩 Search
        </h2>
        <SearchAutocomplete
          variant="onboarding"
          placeholder="대학교를 검색하세요"
          fetchItems={fetchUniversities}
          onSelect={(item) => console.log("[onboarding] selected:", item)}
        />
      </section>

      {/* 홈 자동완성 search */}
      <section style={{ display: "grid", gap: 10 }}>
        <h2 style={{ margin: 0, fontSize: 14, fontWeight: 600 }}>홈 Search</h2>
        <SearchAutocomplete
          variant="home"
          placeholder="지원하고 싶은 기업을 검색해보세요"
          fetchItems={fetchCompanies}
          onSelect={(item) => console.log("[home] selected:", item)}
          showSelectedTag={false}
        />
      </section>

      {/* 매칭 경험 목록 자동완성 search */}
      <section style={{ display: "grid", gap: 10 }}>
        <h2 style={{ margin: 0, fontSize: 14, fontWeight: 600 }}>
          매칭 경험 목록 Search
        </h2>
        <SearchAutocomplete
          variant="matchingExperienceList"
          placeholder="기업명 검색"
          fetchItems={fetchCompanies}
          onSelect={(item) =>
            console.log("[matchingExperienceList] selected:", item)
          }
          showSelectedTag={false}
        />
      </section>
    </div>
  );
};

export { HomePage };
