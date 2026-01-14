// 학력종류
export const EDUCATION_TYPE = {
  HIGH_SCHOOL: "고졸",
  BACHELOR_STUDENT: "학사 재학",
  BACHELOR: "학사 졸업",
  MASTER_STUDENT: "석사 재학",
  MASTER: "석사 졸업",
  DOCTOR_STUDENT: "박사 재학",
  DOCTOR: "박사",
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

export const FILTER_EDUCATION_TYPE: EducationFilterOption[] = [
  { id: 1, code: "HIGH_SCHOOL", label: EDUCATION_TYPE.HIGH_SCHOOL },
  { id: 2, code: "BACHELOR_STUDENT", label: EDUCATION_TYPE.BACHELOR_STUDENT },
  { id: 3, code: "BACHELOR", label: EDUCATION_TYPE.BACHELOR },
  { id: 4, code: "MASTER_STUDENT", label: EDUCATION_TYPE.MASTER_STUDENT },
  { id: 5, code: "MASTER", label: EDUCATION_TYPE.MASTER },
  { id: 6, code: "DOCTOR_STUDENT", label: EDUCATION_TYPE.DOCTOR_STUDENT },
  { id: 7, code: "DOCTOR", label: EDUCATION_TYPE.DOCTOR },
];
