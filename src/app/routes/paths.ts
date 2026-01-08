export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  ONBOARDING: "/onboarding",
  COMPANY: (id = ":id") => `/company/${id}`, // 기업 상세
  EXPERIENCE_MATCHING: "/experience-matching", // 경험x기업 매칭

  MATCHING_LIST: "/matching", // 경험x기업 매칭 결과 리스트
  MATCHING_DETAIL: (id = ":id") => `/matching/${id}`, // 매칭 결과 상세

  EXPERIENCE: "/experience", // 경험 목록
  EXPERIENCE_CREATE: "/experience/create", // 경험 생성
  EXPERIENCE_DETAIL: (id = ":id") => `/experience/${id}`, // 경험 상세
  EXPERIENCE_EDIT: (id = ":id") => `/experience/${id}/edit`, // 경험 수정

  MYPAGE: "/mypage",
  BOOKMARK: "/bookmark",
};
