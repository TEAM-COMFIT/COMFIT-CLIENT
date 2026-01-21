import {
  EXPERIENCE_TYPE,
  EXPERIENCE_LABEL_TO_CODE as SHARED_LABEL_TO_CODE,
  FILTER_EXPERIENCE_TYPE,
} from "@/shared/config/experience";

import type { ExperienceType } from "../types/experience-detail.types";

export const EXPERIENCE_TYPE_OPTIONS: Record<ExperienceType, string> =
  EXPERIENCE_TYPE;

export const EXPERIENCE_LABEL_TO_CODE: Record<string, ExperienceType> =
  SHARED_LABEL_TO_CODE;

export const EXPERIENCE_TYPE_LIST: Array<{
  code: ExperienceType;
  label: string;
}> = FILTER_EXPERIENCE_TYPE.map(({ code, label }) => ({ code, label }));
