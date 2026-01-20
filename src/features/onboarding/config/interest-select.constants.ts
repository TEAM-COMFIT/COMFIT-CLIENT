const UNKNOWN_LABEL = "알 수 없음";

export const INDUSTRY_CODE_TO_LABEL = {
  CONSUMER_GOODS: "소비재/FMCG",
  IT: "플랫폼/IT 서비스",
  MEDIA_CONTENTS: "콘텐츠/미디어/엔터",
  RETAIL: "커머스/리테일",
  LIFESTYLE: "패션,뷰티,라이프스타일",
  FOOD: "푸드/F&B",
  TRAVEL: "모빌리티/트래블/O2O",
  FINANCE: "금융/핀테크",
  FITNESS: "헬스케어/웰니스",
} as const;

export type IndustryCode = keyof typeof INDUSTRY_CODE_TO_LABEL;
export type IndustryLabel = (typeof INDUSTRY_CODE_TO_LABEL)[IndustryCode];

export const JOB_CODE_TO_LABEL = {
  MARKETING_STRATEGY: "마케팅전략/기획",
  BRAND_MARKETING: "브랜드마케팅",
  DIGITAL_MARKETING: "디지털마케팅",
  CONTENT_MARKETING: "콘텐츠마케팅",
  VIRAL_INFLUENCER_MARKETING: "바이럴/인플루언서마케팅",
  PERFORMANCE_MARKETING: "퍼포먼스마케팅",
  B2B_MARKETING: "B2B마케팅",
  CRM_MARKETING: "CRM마케팅",
  PRODUCT_MARKETING: "프로덕트마케팅",
  PARTNERSHIP_MARKETING: "제휴마케팅",
  GLOBAL_MARKETING: "글로벌마케팅",
} as const;

export type JobCode = keyof typeof JOB_CODE_TO_LABEL;
export type JobLabel = (typeof JOB_CODE_TO_LABEL)[JobCode];

const INDUSTRY_LABELS = Object.values(
  INDUSTRY_CODE_TO_LABEL
) as IndustryLabel[];
const JOB_LABELS = Object.values(JOB_CODE_TO_LABEL) as JobLabel[];

export const getIndustryLabel = (value?: string): string => {
  if (!value) return UNKNOWN_LABEL;
  if (value in INDUSTRY_CODE_TO_LABEL) {
    return INDUSTRY_CODE_TO_LABEL[value as IndustryCode];
  }
  if (INDUSTRY_LABELS.includes(value as IndustryLabel)) {
    return value;
  }
  return UNKNOWN_LABEL;
};

export const getJobLabel = (value?: string): string => {
  if (!value) return UNKNOWN_LABEL;
  if (value in JOB_CODE_TO_LABEL) {
    return JOB_CODE_TO_LABEL[value as JobCode];
  }
  if (JOB_LABELS.includes(value as JobLabel)) {
    return value;
  }
  return UNKNOWN_LABEL;
};
