import type { ExperienceType } from "../types";

export const EXPERIENCE_TYPE_OPTIONS: Record<ExperienceType, string> = {
  INTERNSHIP: "인턴/실무",
  PROJECT: "공모전/프로젝트",
  EDUCATION: "수업/교육",
  ETC: "개인 활동",
} as const;

export const EXPERIENCE_LABEL_TO_CODE: Record<string, ExperienceType> = {
  "인턴/실무": "INTERNSHIP",
  "공모전/프로젝트": "PROJECT",
  "수업/교육": "EDUCATION",
  "개인 활동": "ETC",
} as const;

export const EXPERIENCE_TYPE_LIST: Array<{ code: ExperienceType; label: string }> = [
  { code: "INTERNSHIP", label: EXPERIENCE_TYPE_OPTIONS.INTERNSHIP },
  { code: "PROJECT", label: EXPERIENCE_TYPE_OPTIONS.PROJECT },
  { code: "EDUCATION", label: EXPERIENCE_TYPE_OPTIONS.EDUCATION },
  { code: "ETC", label: EXPERIENCE_TYPE_OPTIONS.ETC },
];
