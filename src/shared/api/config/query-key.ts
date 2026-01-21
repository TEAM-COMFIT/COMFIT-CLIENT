// 대학 관련 API (University)
export const universityQueryKey = {
  all: () => ["university"],
  list: (keyword: string) => [...universityQueryKey.all(), keyword],
};

// 경험 관련 API (experience)
export const experienceQueryKey = {
  all: () => ["experiene"],
  lists: () => [...experienceQueryKey.all(), "list"], // 모든 경험 리스트
  list: (type: string, page: number) => [
    ...experienceQueryKey.lists(),
    type,
    page,
  ], // type, page 조건에 따른 경험 리스트
  detail: (experienceId: number) => [...experienceQueryKey.all(), experienceId], // 특정 경험(id)의 세부 조회
};

// 사용자 관련 API (me)
export const meQueryKey = {
  all: () => ["me"],
  profile: () => [...meQueryKey.all(), "profile"], // 사용자 프로필 조회
  onboarding: () => [...meQueryKey.all(), "onboarding"], // 온보딩 상태 조회
};

// AI-Report 관련 API (AI-Report)
export const aiReportsQueryKey = {
  all: () => ["aiReports"],
  list: (page: number, keyword?: string) => [
    ...experienceQueryKey.all(),
    page,
    keyword,
  ], // page, keyword에 따른 AI report 리스트
  detail: (reportId: number) => [...aiReportsQueryKey.all(), reportId], // 특정 AI report 상세 조회
  experiences: () => [...aiReportsQueryKey.all(), "experiences"], // 분석 전, 경험 조회. (experienceQueryKey.lists)와 다름
  company: (companyId: number) => [
    ...aiReportsQueryKey.all(),
    "company",
    companyId,
  ], // 분석 전, 기업 정보 조회.
};

// 기업 관련 API (Company)
export const companyQueryKey = {
  all: () => ["company"],
  keyword: (keyword: string) => [...companyQueryKey.all(), keyword], // 특정 키워드의 상세 조회
  search: (
    keyword: string,
    industry: string,
    scale: string,
    sort: string,
    page: number,
    inRequired: boolean
  ) => [
    ...companyQueryKey.all(),
    keyword,
    industry,
    scale,
    sort,
    page,
    inRequired,
  ], // 기업 필터링 조회
  detail: (companyId: number) => [...companyQueryKey.all(), companyId], // 기업 상세 조회
  suggestion: (companyId: number) => [...companyQueryKey.all(), companyId], // 추천 기업 조회
  major: (rank: number) => [...companyQueryKey.all(), rank], // 주요 기업 조회(홈)
};
