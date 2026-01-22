import type { GetExperienceDetailResponse } from "@/features/experience-detail/api/use-get-experience-detail.query";
import type { ExperienceEntity } from "@/features/experience-detail/types/experience-detail.types";

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
