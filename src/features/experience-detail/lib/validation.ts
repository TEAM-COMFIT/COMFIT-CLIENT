import { parseYMD } from "@/shared/lib/format-date";

import { EXPERIENCE_MESSAGES } from "../config";

import type { ExperienceUpsertBody } from "../types/experience-detail.types";

type ValidationResult =
  | { ok: true }
  | { ok: false; toastMessage: string };

const isBlank = (v: string) => v.trim().length === 0;

const STAR_MAX_LENGTH = {
  situation: 200,
  task: 200,
  action: 500,
  result: 300,
} as const;

export const validateExperienceDraft = (draft: ExperienceUpsertBody): ValidationResult => {
  // 1) 제목 2~30
  const titleLen = draft.title.trim().length;
  if (titleLen < 2 || titleLen > 30) {
    return { ok: false, toastMessage: EXPERIENCE_MESSAGES.VALIDATION.TITLE_LENGTH };
  }

  // 2) 경험 유형 필수
  if (!draft.type) {
    return { ok: false, toastMessage: EXPERIENCE_MESSAGES.VALIDATION.TYPE_REQUIRED };
  }

  // 3) 날짜 필수 + 형식 + start<=end
  if (!draft.startAt || !draft.endAt) {
    return { ok: false, toastMessage: EXPERIENCE_MESSAGES.VALIDATION.DATE_FORMAT };
  }

  const start = parseYMD(draft.startAt);
  const end = parseYMD(draft.endAt);

  if (!start || !end) {
    return { ok: false, toastMessage: EXPERIENCE_MESSAGES.VALIDATION.DATE_FORMAT };
  }

  if (start.getTime() > end.getTime()) {
    return { ok: false, toastMessage: EXPERIENCE_MESSAGES.VALIDATION.DATE_FORMAT };
  }

  // 4) STAR 필드 모두 비어있는 경우
  if (
    isBlank(draft.situation) &&
    isBlank(draft.task) &&
    isBlank(draft.action) &&
    isBlank(draft.result)
  ) {
    return { ok: false, toastMessage: EXPERIENCE_MESSAGES.VALIDATION.CONTENT_REQUIRED };
  }

  // 5) STAR 필드 최대 글자 수 초과
  if (
    draft.situation.length > STAR_MAX_LENGTH.situation ||
    draft.task.length > STAR_MAX_LENGTH.task ||
    draft.action.length > STAR_MAX_LENGTH.action ||
    draft.result.length > STAR_MAX_LENGTH.result
  ) {
    return { ok: false, toastMessage: EXPERIENCE_MESSAGES.VALIDATION.CONTENT_MAX_EXCEEDED };
  }

  return { ok: true };
};
