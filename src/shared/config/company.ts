// 산업
export const INDUSTRY = {
  CONSUMER_GOODS: "소비재 / FMCG",
  IT: "IT 플랫폼 / IT 서비스",
  MEDIA_CONTENTS: "콘텐츠 / 미디어 / 엔터",
  RETAIL: "커머스 / 리테일",
  LIFE_STYLE: "패션 / 뷰티 / 라이프스타일",
  FOOD: "푸드 / F&B",
  TRAVEL: "모빌리티 / 트래블 / O2O",
  FINANCE: "금융 / 핀테크",
  FITNESS: "헬스케어 / 웰니스",
} as const;

export type IndustryCode = keyof typeof INDUSTRY;
export type IndustryLabel = (typeof INDUSTRY)[IndustryCode];

export const INDUSTRY_LABEL_TO_CODE: Record<IndustryLabel, IndustryCode> =
  Object.entries(INDUSTRY).reduce(
    (acc, [code, label]) => {
      acc[label as IndustryLabel] = code as IndustryCode;
      return acc;
    },
    {} as Record<IndustryLabel, IndustryCode>
  );

export interface IndustryFilterOption {
  id: number;
  code: IndustryCode;
  label: IndustryLabel;
}

export const FILTER_INDUSTRY: IndustryFilterOption[] = [
  { id: 2, code: "CONSUMER_GOODS", label: INDUSTRY.CONSUMER_GOODS },
  { id: 3, code: "IT", label: INDUSTRY.IT },
  { id: 4, code: "MEDIA_CONTENTS", label: INDUSTRY.MEDIA_CONTENTS },
  { id: 5, code: "RETAIL", label: INDUSTRY.RETAIL },
  { id: 6, code: "LIFE_STYLE", label: INDUSTRY.LIFE_STYLE },
  { id: 7, code: "FOOD", label: INDUSTRY.FOOD },
  { id: 8, code: "TRAVEL", label: INDUSTRY.TRAVEL },
  { id: 9, code: "FINANCE", label: INDUSTRY.FINANCE },
  { id: 10, code: "FITNESS", label: INDUSTRY.FITNESS },
];

// 기업 규모
export const COMPANY_SIZE = {
  LARGE: "대기업",
  STARTUP: "스타트업",
  PUBLIC_CORP: "공기업",
  MID_LARGE: "중견기업",
  SME: "중소기업",
  FOREIGN: "외국기업",
  PUBLIC_ORG: "공공기관",
  ETC: "기타",
} as const;

export type CompanySizeCode = keyof typeof COMPANY_SIZE;
export type CompanySizeLabel = (typeof COMPANY_SIZE)[CompanySizeCode];

export const COMPANY_SIZE_LABEL_TO_CODE: Record<
  CompanySizeLabel,
  CompanySizeCode
> = Object.entries(COMPANY_SIZE).reduce(
  (acc, [code, label]) => {
    acc[label as CompanySizeLabel] = code as CompanySizeCode;
    return acc;
  },
  {} as Record<CompanySizeLabel, CompanySizeCode>
);

export interface CompanySizeFilterOption {
  id: number;
  code: CompanySizeCode;
  label: CompanySizeLabel;
}

export const FILTER_COMPANY_SIZE: CompanySizeFilterOption[] = [
  { id: 2, code: "LARGE", label: COMPANY_SIZE.LARGE },
  { id: 3, code: "STARTUP", label: COMPANY_SIZE.STARTUP },
  { id: 4, code: "PUBLIC_CORP", label: COMPANY_SIZE.PUBLIC_CORP },
  { id: 5, code: "MID_LARGE", label: COMPANY_SIZE.MID_LARGE },
  { id: 6, code: "SME", label: COMPANY_SIZE.SME },
  { id: 7, code: "FOREIGN", label: COMPANY_SIZE.FOREIGN },
  { id: 8, code: "PUBLIC_ORG", label: COMPANY_SIZE.PUBLIC_ORG },
  { id: 9, code: "ETC", label: COMPANY_SIZE.ETC },
];
