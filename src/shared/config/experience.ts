// 경험종류
export const EXPERIENCE_TYPE = {
  INTERNSHIP: "인턴/실무",
  PROJECT: "공모전/프로젝트",
  EDUCATION: "수업/교육",
  ETC: "개인활동",
} as const;

export type ExperienceTypeCode = keyof typeof EXPERIENCE_TYPE;
export type ExperienceTypeLabel = (typeof EXPERIENCE_TYPE)[ExperienceTypeCode];

export const EXPERIENCE_LABEL_TO_CODE: Record<
  ExperienceTypeLabel,
  ExperienceTypeCode
> = Object.entries(EXPERIENCE_TYPE).reduce(
  (acc, [code, label]) => {
    acc[label as ExperienceTypeLabel] = code as ExperienceTypeCode;
    return acc;
  },
  {} as Record<ExperienceTypeLabel, ExperienceTypeCode>
);

export interface ExperienceFilterOption {
  id: number;
  code: ExperienceTypeCode;
  label: ExperienceTypeLabel;
}

export const FILTER_EXPERIENCE_TYPE: ExperienceFilterOption[] = [
  { id: 1, code: "INTERNSHIP", label: EXPERIENCE_TYPE.INTERNSHIP },
  { id: 2, code: "PROJECT", label: EXPERIENCE_TYPE.PROJECT },
  { id: 3, code: "EDUCATION", label: EXPERIENCE_TYPE.EDUCATION },
  { id: 4, code: "ETC", label: EXPERIENCE_TYPE.ETC },
];
