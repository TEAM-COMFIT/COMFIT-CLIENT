import { FILTER_EXPERIENCE_TYPE } from "@/shared/config";

import type { ExperienceTypeCode } from "@/shared/config";

export type ExperienceFilterCode = ExperienceTypeCode | null;

export const EXPERIENCE_FILTER_OPTIONS = [...FILTER_EXPERIENCE_TYPE];
