import { parseYMD } from "@/shared/lib/format-date";

import { EXPERIENCE_MESSAGES } from "../config/messages";

import type { ExperienceUpsertBody } from "../types/experience-detail.types";

type ValidationMessage = { title: string; description: string };
type ValidationResult = { ok: true } | ({ ok: false } & ValidationMessage);

const trimmedLength = (v: string) => v.trim().length;

const STAR_MIN_LENGTH = {
  situation: 30,
  task: 30,
  action: 40,
  result: 30,
} as const;

const STAR_MAX_LENGTH = {
  situation: 200,
  task: 200,
  action: 500,
  result: 300,
} as const;

const validateStarField = (
  value: string,
  min: number,
  max: number,
  message: ValidationMessage
): ValidationResult => {
  const len = trimmedLength(value);

  if (len < min) {
    return { ok: false, ...message };
  }

  if (len > max) {
    return {
      ok: false,
      ...EXPERIENCE_MESSAGES.VALIDATION.CONTENT_MAX_EXCEEDED,
    };
  }

  return { ok: true };
};

export const validateExperienceDraft = (
  draft: ExperienceUpsertBody
): ValidationResult => {
  // 1) 제목 2~30
  const titleLen = trimmedLength(draft.title);
  if (titleLen < 2 || titleLen > 30) {
    return {
      ok: false,
      ...EXPERIENCE_MESSAGES.VALIDATION.TITLE_LENGTH,
    };
  }

  // 2) 경험 유형 필수
  if (!draft.type) {
    return {
      ok: false,
      ...EXPERIENCE_MESSAGES.VALIDATION.TYPE_REQUIRED,
    };
  }

  // 3) 날짜 필수 + 형식 + start<=end
  if (!draft.startAt || !draft.endAt) {
    return {
      ok: false,
      ...EXPERIENCE_MESSAGES.VALIDATION.DATE_FORMAT,
    };
  }

  const start = parseYMD(draft.startAt);
  const end = parseYMD(draft.endAt);

  if (!start || !end) {
    return {
      ok: false,
      ...EXPERIENCE_MESSAGES.VALIDATION.DATE_FORMAT,
    };
  }

  if (start.getTime() > end.getTime()) {
    return {
      ok: false,
      ...EXPERIENCE_MESSAGES.VALIDATION.DATE_FORMAT,
    };
  }

  // 4) STAR 각 필드 필수 + 최소/최대 글자 수 검증
  const situationValid = validateStarField(
    draft.situation,
    STAR_MIN_LENGTH.situation,
    STAR_MAX_LENGTH.situation,
    EXPERIENCE_MESSAGES.VALIDATION.SITUATION_REQUIRED
  );
  if (!situationValid.ok) return situationValid;

  const taskValid = validateStarField(
    draft.task,
    STAR_MIN_LENGTH.task,
    STAR_MAX_LENGTH.task,
    EXPERIENCE_MESSAGES.VALIDATION.TASK_REQUIRED
  );
  if (!taskValid.ok) return taskValid;

  const actionValid = validateStarField(
    draft.action,
    STAR_MIN_LENGTH.action,
    STAR_MAX_LENGTH.action,
    EXPERIENCE_MESSAGES.VALIDATION.ACTION_REQUIRED
  );
  if (!actionValid.ok) return actionValid;

  const resultValid = validateStarField(
    draft.result,
    STAR_MIN_LENGTH.result,
    STAR_MAX_LENGTH.result,
    EXPERIENCE_MESSAGES.VALIDATION.RESULT_REQUIRED
  );
  if (!resultValid.ok) return resultValid;

  return { ok: true };
};
