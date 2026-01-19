export const INDUSTRY_TYPE = {
  CONSUMER_FMCG: "소비재/FMCG",
  PLATFORM_IT_SERVICE: "플랫폼/IT서비스",
  COMMERCE_RETAIL: "커머스/리테일",
  FASHION_BEAUTY_LIFESTYLE: "패션/뷰티/라이프스타일",
  FOOD_FNB: "푸드/F&B",
  MOBILITY_TRAVEL_O2O: "모빌리티/트래블/O2O",
  FINANCE_FINTECH: "금융/핀테크",
  CONTENTS_MEDIA_ENTERTAINMENT: "콘텐츠/미디어/엔터",
  HEALTHCARE_WELLNESS: "헬스케어/웰니스",
} as const;

export type IndustryTypeCode = keyof typeof INDUSTRY_TYPE;
export type IndustryTypeLabel = (typeof INDUSTRY_TYPE)[IndustryTypeCode];

export const INDUSTRY_LABEL_TO_CODE: Record<
  IndustryTypeLabel,
  IndustryTypeCode
> = Object.entries(INDUSTRY_TYPE).reduce(
  (acc, [code, label]) => {
    acc[label as IndustryTypeLabel] = code as IndustryTypeCode;
    return acc;
  },
  {} as Record<IndustryTypeLabel, IndustryTypeCode>,
);

export interface IndustryFilterOption {
  id: number;
  code: IndustryTypeCode;
  label: IndustryTypeLabel;
}

export const FILTER_INDUSTRY_TYPE: IndustryFilterOption[] = Object.entries(
  INDUSTRY_TYPE,
).map(([code, label], index) => ({
  id: index + 1,
  code: code as IndustryTypeCode,
  label: label as IndustryTypeLabel,
}));

export const JOB_TYPE = {
  MARKETING_STRATEGY_PLANNING: "마케팅전략/기획",
  BRAND_MARKETING: "브랜드마케팅",
  DIGITAL_MARKETING: "디지털마케팅",
  CONTENT_MARKETING: "콘텐츠마케팅",
  VIRAL_MARKETING: "바이럴 마케팅",
  PERFORMANCE_MARKETING: "퍼포먼스마케팅",
  B2B_MARKETING: "B2B마케팅",
  CRM_MARKETING: "CRM마케팅",
  PRODUCT_MARKETING: "프로덕트마케팅",
  PARTNERSHIP_MARKETING: "제휴마케팅",
  GLOBAL_MARKETING: "글로벌마케팅",
} as const;

export type JobTypeCode = keyof typeof JOB_TYPE;
export type JobTypeLabel = (typeof JOB_TYPE)[JobTypeCode];

export const JOB_LABEL_TO_CODE: Record<JobTypeLabel, JobTypeCode> =
  Object.entries(JOB_TYPE).reduce(
    (acc, [code, label]) => {
      acc[label as JobTypeLabel] = code as JobTypeCode;
      return acc;
    },
    {} as Record<JobTypeLabel, JobTypeCode>,
  );

export interface JobFilterOption {
  id: number;
  code: JobTypeCode;
  label: JobTypeLabel;
}

export const FILTER_JOB_TYPE: JobFilterOption[] = Object.entries(JOB_TYPE).map(
  ([code, label], index) => ({
    id: index + 1,
    code: code as JobTypeCode,
    label: label as JobTypeLabel,
  }),
);

export const INDUSTRY_OPTIONS = FILTER_INDUSTRY_TYPE.map((o) => o.label);
export const JOB_OPTIONS = FILTER_JOB_TYPE.map((o) => o.label);

export type IndustryOption = IndustryTypeLabel;
export type JobOption = JobTypeLabel;

export const getIndustryCodeByLabel = (label: IndustryTypeLabel) =>
  INDUSTRY_LABEL_TO_CODE[label];

export const getJobCodeByLabel = (label: JobTypeLabel) =>
  JOB_LABEL_TO_CODE[label];

export const getIndustryLabelByCode = (code: IndustryTypeCode) =>
  INDUSTRY_TYPE[code];

export const getJobLabelByCode = (code: JobTypeCode) => JOB_TYPE[code];
