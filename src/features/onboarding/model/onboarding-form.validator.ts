import type { EducationTypeCode } from "@/features/onboarding";
import type { SearchItem } from "@/shared/ui/search-auto-complete/types";

const hasAllPriorities = (
  map: Record<number, unknown>,
  maxPriority: number = 3,
) => {
  for (let p = 1; p <= maxPriority; p += 1) {
    if (!map[p]) return false;
  }
  return true;
};

export const isOnboardingFormComplete = (params: {
  selectedEducation: EducationTypeCode | null;
  selectedUniversity: SearchItem | null;
  industry: Record<number, unknown>;
  job: Record<number, unknown>;
}) => {
  const { selectedEducation, selectedUniversity, industry, job } = params;

  const hasEducation = Boolean(selectedEducation);
  const hasUniversity = Boolean(selectedUniversity);

  const hasIndustryAll = hasAllPriorities(industry, 3);
  const hasJobAll = hasAllPriorities(job, 3);

  return hasEducation && hasUniversity && hasIndustryAll && hasJobAll;
};
