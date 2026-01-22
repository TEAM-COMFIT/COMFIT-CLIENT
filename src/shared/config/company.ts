// 산업
export const INDUSTRY = {
  CONSUMER_GOODS: "소비재/FMCG",
  IT: "IT 플랫폼/IT 서비스",
  MEDIA_CONTENTS: "콘텐츠/미디어/엔터",
  RETAIL: "커머스/리테일",
  LIFE_STYLE: "패션/뷰티/라이프스타일",
  FOOD: "푸드/F&B",
  TRAVEL: "모빌리티/트래블/O2O",
  FINANCE: "금융/핀테크",
  FITNESS: "헬스케어/웰니스",
} as const;

export type IndustryCode = keyof typeof INDUSTRY; // 키값 리스트
export type IndustryLabel = (typeof INDUSTRY)[IndustryCode]; // value(label) 리스트

// INDUSTRY_LABEL_TO_CODE: 라벨 <-> 키 역방향 객체
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

// {0: '소비재/FMCG', 1: 'IT 플랫폼/IT 서비스', ...} 형태
export const INDUSTRY_OPTIONS = FILTER_INDUSTRY.map(
  (o) => o.label
) as IndustryLabel[];

// 코드로 한글 라벨 얻기
export const getIndustryLabel = (code: IndustryCode): IndustryLabel => {
  if (code in INDUSTRY) {
    return INDUSTRY[code];
  }
  console.warn(`존재하지 않는 IndustryCode: ${code}`);

  return "알 수 없음" as IndustryLabel;
};

export const getIndustryCode = (label: IndustryLabel): IndustryCode => {
  if (label in INDUSTRY_LABEL_TO_CODE) {
    return INDUSTRY_LABEL_TO_CODE[label];
  }
  return "알 수 없음" as IndustryCode; // 기본값 혹은 에러 처리
};

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

export const getScaleLabel = (code: ScaleCode): ScaleLabel => {
  if (code in SCALE) {
    return SCALE[code];
  }
  return "알 수 없음" as ScaleLabel;
};

export const labelToCodeIndustry = (
  label: string | null | undefined
): IndustryCode | "" => {
  if (!label) return "";
  if (label in INDUSTRY_LABEL_TO_CODE) {
    return INDUSTRY_LABEL_TO_CODE[label as IndustryLabel];
  }
  return "";
};

// 규모 코드 변환 유틸 (string 타입을 수용하되 안전하게 반환)
export const labelToCodeScale = (
  label: string | null | undefined
): ScaleCode | "" => {
  if (!label) return "";
  if (label in SCALE_LABEL_TO_CODE) {
    return SCALE_LABEL_TO_CODE[label as ScaleLabel];
  }
  return "";
};
