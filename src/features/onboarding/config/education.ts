// 학력종류
export const EDUCATION_TYPE = {
  HIGH_SCHOOL: "고등학교 졸업",
  BACHELOR_STUDENT: "학사 재학",
  BACHELOR: "학사 졸업",
  MASTER_STUDENT: "석사 이상",
} as const;

export type EducationTypeCode = keyof typeof EDUCATION_TYPE;
export type EducationTypeLabel = (typeof EDUCATION_TYPE)[EducationTypeCode];

export const EDUCATION_LABEL_TO_CODE: Record<
  EducationTypeLabel,
  EducationTypeCode
> = Object.entries(EDUCATION_TYPE).reduce(
  (acc, [code, label]) => {
    acc[label as EducationTypeLabel] = code as EducationTypeCode;
    return acc;
  },
  {} as Record<EducationTypeLabel, EducationTypeCode>
);

export interface EducationFilterOption {
  id: number;
  code: EducationTypeCode;
  label: EducationTypeLabel;
}

export const FILTER_EDUCATION_TYPE: EducationFilterOption[] = Object.entries(
  EDUCATION_TYPE
).map(([code, label], index) => ({
  id: index + 1,
  code: code as EducationTypeCode,
  label: label as EducationTypeLabel,
}));
