import type { EducationTypeCode } from "@/features/onboarding";
import type { SearchItem } from "@/shared/ui/search-auto-complete/types";

export const isOnboardingFormComplete = (params: {
  selectedEducation: EducationTypeCode | null;
  selectedUniversity: SearchItem | null;
  industry: Record<number, unknown>;
  job: Record<number, unknown>;
  isAgreed: boolean;
}) => {
  const { selectedEducation, selectedUniversity, industry, job, isAgreed } =
    params;

  const hasEducation = Boolean(selectedEducation);
  const hasUniversity = Boolean(selectedUniversity);

  const hasIndustry1 = Boolean(industry[1]);
  const hasJob1 = Boolean(job[1]);

  return hasEducation && hasUniversity && hasIndustry1 && hasJob1 && isAgreed;
};
