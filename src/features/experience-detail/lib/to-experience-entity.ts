import type { GetExperienceDetailResponse } from "../api";
import type { ExperienceEntity } from "../types/experience-detail.types";

export const toExperienceEntity = (
  response: GetExperienceDetailResponse
): ExperienceEntity => ({
  experienceId: response.experienceId,
  title: response.title,
  type: response.type,
  startAt: response.startAt,
  endAt: response.endAt,
  situation: response.situation,
  task: response.task,
  action: response.action,
  result: response.result,
  isDefault: response.isDefault,
});
