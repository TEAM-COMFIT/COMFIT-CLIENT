import { useMemo, useState } from "react";

import { CompanyIssue } from "@/features/company-detail";
import { DatePicker } from "@/features/experience-detail";
import { MajorCompanyCard } from "@/features/home/ui";
import {
  IndustryInterestSelect,
  JobInterestSelect,
} from "@/features/onboarding";
import { IconDash } from "@/shared/assets/icons";
import { Company } from "@/shared/assets/images";
import { Alert } from "@/shared/ui/alert";
import { useAlert } from "@/shared/ui/alert/use-alert";
import { Search } from "@/shared/ui/index";
import { CompanyGridContainer } from "@/shared/ui/pagination/company-list-container";
import { MatchingListContainer } from "@/shared/ui/pagination/matching-list-container";
import { SearchAutocomplete } from "@/shared/ui/search-auto-complete/search-auto-complete";
import { Textfield } from "@/shared/ui/textfield";
import { CompanyCard } from "@/widgets";
import Heart from "@icons/heart.svg?react";
import KERORO from "@images/comfit_web_status.jpg";

import { appContainer } from "./home-page.css";

import type { SearchItem } from "@/shared/ui/search-auto-complete/types";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const HomePage = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date);

    // 종료일이 있고, 새로 선택한 시작일이 종료일보다 이후라면 종료일 초기화
    if (date && endDate && date > endDate) {
      setEndDate(null);
    }
  };
  const handleEndDateChange = (date: Date | null) => {
    setEndDate(date);
  };

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

  const [selectedUniversity, setSelectedUniversity] =
    useState<SearchItem | null>(null);
  const [selectedHomeCompany, setSelectedHomeCompany] =
    useState<SearchItem | null>(null);
  const [selectedMatchingCompany, setSelectedMatchingCompany] =
    useState<SearchItem | null>(null);

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
  const [value, setValue] = useState("");
  const { alertState, actions } = useAlert({
    defaultOpen: true,
    defaultVariant: "info",
    defaultTitle: "Info",
    defaultDescription: "날짜 형식이 올바르지 않습니다.",
  });
  const [description, setDescription] = useState("");
  const isEdit = true;

  return (
    <div
      className={appContainer}
      style={{ padding: 24, display: "grid", gap: 28 }}
    >
      <h1>프리텐다드</h1>
      <p>카카오로 시작하기</p>

      {/* Search 공통 컴포넌트 임시 확인 영역 */}
      <div style={{ margin: "2.4rem 0" }}>
        <Search
          size="full"
          value={value}
          onChange={setValue}
          onSearch={(v: string) => {
            if (import.meta.env.DEV) {
              console.warn("search:", v);
            }
          }}
          placeholder="Search"
        />
      </div>

      {/* 사이즈별 확인 */}
      <Search size="large" placeholder="Large" />
      <div style={{ height: "1.2rem" }} />
      <Search size="medium" placeholder="Medium" />
      <div style={{ height: "1.2rem" }} />
      <Search size="small" placeholder="Small" />

      <CompanyCard
        logoUrl={KERORO}
        id={1}
        companyName="LG 전자"
        industry={"MEDIA_CONTENTS"}
        scale={"LARGE"}
      />

      <CompanyGridContainer />
      <MatchingListContainer />

      <img src={KERORO} alt="Keroro" width={400} />
      <div
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <DatePicker
          selectedDate={startDate}
          onChangeSelectedDate={handleStartDateChange}
          placeholder="시작일"
        />
        <IconDash aria-hidden="true" focusable="false" />
        <DatePicker
          selectedDate={endDate}
          onChangeSelectedDate={handleEndDateChange}
          placeholder="종료일"
          minDate={startDate ?? undefined}
        />
      </div>

      <section aria-label="최근 6개월 주요 이슈 및 마케팅 캠페인">
        <CompanyIssue
          issueURL="https://github.com/TEAM-COMFIT/COMFIT-CLIENT"
          date="2024.12"
          title="콘텐츠 포맷 다각화"
          description="CJ ENM은 OTT 시청 환경 변화에 대응해 기존 방송 편성 중심 콘텐츠 외에도 숏폼·디지털 전용 콘텐츠 포맷을 확대하고 있다. 특히 일부 콘텐츠는 방송 편성과 분리된 디지털 플랫폼 우선 배포를 전제로 기획되며, 플랫폼별 소비 특성에 맞춘 포맷 실험이 진행되고 있다."
        />

        <CompanyIssue
          issueURL="https://github.com/TEAM-COMFIT/COMFIT-SERVER"
          date="2024.12"
          title="글로벌 콘텐츠 IP 확장 전략"
          description="CJ ENM은 자체 제작 콘텐츠의 해외 유통을 확대하며, 글로벌 플랫폼과의 협업을 통해 콘텐츠 IP의 포맷 수출 및 글로벌 동시 공개 사례를 늘리고 있다. 이를 통해 국내 시장 중심의 콘텐츠 유통 구조를 넘어, 글로벌 시장을 고려한 제작·유통 전략을 지속적으로 강화하고 있다."
        />

        <CompanyIssue
          issueURL="https://github.com/TEAM-COMFIT/COMFIT-CLIENT"
          date="2024.12"
          title="글로벌 공동 제작 프로젝트 확대"
          description="글로벌 제작사 및 플랫폼과의 공동 제작 프로젝트를 통해 제작 초기 단계부터 해외 시장을 고려한 협업 모델을 확대하고 있다. 일부 프로젝트는 국내 방영 이후 해외 유통이 아닌, 글로벌 공개를 전제로 제작 구조를 설계하는 방식으로 진행되고 있다."
        />
      </section>
      {/* 온보딩 자동완성 search */}
      <section style={{ display: "grid", gap: 10 }}>
        <h2 style={{ margin: 0, fontSize: 14, fontWeight: 600 }}>
          온보딩 Search
        </h2>

        <SearchAutocomplete
          variant="onboarding"
          placeholder="대학교를 검색하세요"
          fetchItems={fetchUniversities}
          selectedItem={selectedUniversity}
          setSelectedItem={setSelectedUniversity}
          onSelect={setSelectedUniversity}
          onClear={() => setSelectedUniversity(null)}
        />
      </section>

      {/* 홈 자동완성 search */}
      <section style={{ display: "grid", gap: 10 }}>
        <h2 style={{ margin: 0, fontSize: 14, fontWeight: 600 }}>홈 Search</h2>

        <SearchAutocomplete
          variant="home"
          placeholder="지원하고 싶은 기업을 검색해보세요"
          fetchItems={fetchCompanies}
          selectedItem={selectedHomeCompany}
          setSelectedItem={setSelectedHomeCompany}
          onSelect={setSelectedHomeCompany}
          onClear={() => setSelectedHomeCompany(null)}
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
          selectedItem={selectedMatchingCompany}
          setSelectedItem={setSelectedMatchingCompany}
          onSelect={setSelectedMatchingCompany}
          onClear={() => setSelectedMatchingCompany(null)}
        />
      </section>

      <Heart aria-label="좋아요" />

      {/* Alert 공통 컴포넌트 확인용 버튼 */}
      <div style={{ display: "flex", gap: 8 }}>
        <button
          onClick={() =>
            actions.open("error", "Error", "날짜 형식이 올바르지 않습니다.")
          }
        >
          Error
        </button>
        <button
          onClick={() =>
            actions.open("success", "Success", "저장이 완료되었습니다.")
          }
        >
          Success
        </button>
        <button
          onClick={() =>
            actions.open("warning", "Warning", "입력값을 다시 확인해주세요.")
          }
        >
          Warning
        </button>
        <button
          onClick={() =>
            actions.open("info", "Info", "회원님의 정보를 조회합니다.")
          }
        >
          Info
        </button>
      </div>

      {alertState.open && (
        <Alert
          variant={alertState.variant}
          title={alertState.title}
          description={alertState.description}
          onClose={actions.close}
        />
      )}
      {/* 관심 분야 선택 컴포넌트 확인용 */}
      <section style={{ marginTop: 40, display: "grid", gap: 40 }}>
        <IndustryInterestSelect />
        <JobInterestSelect />
      </section>
      <Textfield
        type="jobDescription"
        placeholder="자기소개를 입력해주세요."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        mode={isEdit ? "edit" : "view"}
      />
      <p>하하코드래빗아 한번일해보거라</p>

      <MajorCompanyCard
        id={1}
        companyName="IBK 기업은행"
        scale="LARGE"
        type="medium"
        imgUrl={Company}
      />

      <MajorCompanyCard
        id={2}
        companyName="컴핏"
        scale="PUBLIC_CORP"
        type="large"
        imgUrl={Company}
      />
    </div>
  );
};

export { HomePage };
