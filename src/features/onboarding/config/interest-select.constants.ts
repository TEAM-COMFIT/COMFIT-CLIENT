export const INDUSTRY_OPTIONS = [
  "소비재/FMCG",
  "플랫폼/IT서비스",
  "커머스/리테일",
  "패션/뷰티/라이프스타일",
  "푸드/F&B",
  "모빌리티/트래블/O2O",
  "금융/핀테크",
  "콘텐츠/미디어/엔터",
  "헬스케어/웰니스",
] as const;

export const JOB_OPTIONS = [
  "마케팅전략/기획",
  "브랜드마케팅",
  "디지털마케팅",
  "콘텐츠마케팅",
  "바이럴 마케팅",
  "퍼포먼스마케팅",
  "B2B마케팅",
  "CRM마케팅",
  "프로덕트마케팅",
  "제휴마케팅",
  "글로벌마케팅",
] as const;

export type IndustryOption = (typeof INDUSTRY_OPTIONS)[number];
export type JobOption = (typeof JOB_OPTIONS)[number];
