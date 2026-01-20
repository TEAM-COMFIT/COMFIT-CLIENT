export const JOB_TYPE = {
  MARKETING_STRATEGY: "마케팅전략/기획",
  BRAND_MARKETING: "브랜드마케팅",
  DIGITAL_MARKETING: "디지털마케팅",
  CONTENT_MARKETING: "콘텐츠마케팅",
  VIRAL_MARKETING: "바이럴/인플루언서마케팅",
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
    {} as Record<JobTypeLabel, JobTypeCode>
  );

export const getJobLabelByCode = (code: JobTypeCode) => JOB_TYPE[code];

export const getJobCodeByLabel = (label: JobTypeLabel) =>
  JOB_LABEL_TO_CODE[label];

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
  })
);

export const JOB_OPTIONS = FILTER_JOB_TYPE.map(
  (o) => o.label
) as JobTypeLabel[];
