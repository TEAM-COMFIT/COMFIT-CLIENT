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
  { id: 1, code: "CONSUMER_GOODS", label: INDUSTRY.CONSUMER_GOODS },
  { id: 2, code: "IT", label: INDUSTRY.IT },
  { id: 3, code: "MEDIA_CONTENTS", label: INDUSTRY.MEDIA_CONTENTS },
  { id: 4, code: "RETAIL", label: INDUSTRY.RETAIL },
  { id: 5, code: "LIFE_STYLE", label: INDUSTRY.LIFE_STYLE },
  { id: 6, code: "FOOD", label: INDUSTRY.FOOD },
  { id: 7, code: "TRAVEL", label: INDUSTRY.TRAVEL },
  { id: 8, code: "FINANCE", label: INDUSTRY.FINANCE },
  { id: 9, code: "FITNESS", label: INDUSTRY.FITNESS },
];

// 기업 규모 (Scale)
export const SCALE = {
  LARGE: "대기업",
  STARTUP: "스타트업",
  PUBLIC_CORP: "공기업",
  MID_LARGE: "중견기업",
  SME: "중소기업",
  FOREIGN: "외국기업",
  PUBLIC_ORG: "공공기관",
  ETC: "기타",
} as const;

export type ScaleCode = keyof typeof SCALE;
export type ScaleLabel = (typeof SCALE)[ScaleCode];

export const SCALE_LABEL_TO_CODE: Record<ScaleLabel, ScaleCode> =
  Object.entries(SCALE).reduce(
    (acc, [code, label]) => {
      acc[label as ScaleLabel] = code as ScaleCode;
      return acc;
    },
    {} as Record<ScaleLabel, ScaleCode>
  );

export interface ScaleFilterOption {
  id: number;
  code: ScaleCode;
  label: ScaleLabel;
}

export const FILTER_SCALE: ScaleFilterOption[] = [
  { id: 1, code: "LARGE", label: SCALE.LARGE },
  { id: 2, code: "STARTUP", label: SCALE.STARTUP },
  { id: 3, code: "PUBLIC_CORP", label: SCALE.PUBLIC_CORP },
  { id: 4, code: "MID_LARGE", label: SCALE.MID_LARGE },
  { id: 5, code: "SME", label: SCALE.SME },
  { id: 6, code: "FOREIGN", label: SCALE.FOREIGN },
  { id: 7, code: "PUBLIC_ORG", label: SCALE.PUBLIC_ORG },
  { id: 8, code: "ETC", label: SCALE.ETC },
];
