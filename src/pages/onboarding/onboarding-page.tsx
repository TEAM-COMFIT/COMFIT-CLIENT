import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ROUTES } from "@/app/routes/paths";
import { useInterestSelectStore } from "@/features/onboarding";
import { usePostOnboarding } from "@/features/onboarding/api/use-post-onboarding.query";
import { labelToCodeJob } from "@/features/onboarding/config/job";
import { isOnboardingFormComplete } from "@/features/onboarding/lib/onboarding-form.validator";
import { OnboardingLogo } from "@/shared/assets/images";
import { labelToCodeIndustry } from "@/shared/config";
import { Button } from "@/shared/ui";
import { Alert } from "@/shared/ui/alert";

import * as s from "./onboarding-page.css";
import { SelectSection } from "./ui/select-section";

import type { EducationTypeCode } from "@/features/onboarding";
import type { SearchItem } from "@/shared/ui/search-auto-complete/types";

const OnboardingPage = () => {
  const navigate = useNavigate();
  const { mutate } = usePostOnboarding();

  const [selectedEducation, setSelectedEducation] =
    useState<EducationTypeCode | null>(null);
  const [selectedUniversity, setSelectedUniversity] =
    useState<SearchItem | null>(null);

  const industry = useInterestSelectStore((s) => s.industry);
  const job = useInterestSelectStore((s) => s.job);

  const isFormComplete = useMemo(
    () =>
      isOnboardingFormComplete({
        selectedEducation,
        selectedUniversity,
        industry,
        job,
      }),
    [selectedEducation, selectedUniversity, industry, job]
  );

  const handleSelectionSubmit = () => {
    if (!isFormComplete) return;

    const requestBody = {
      educationLevel: selectedEducation ?? undefined,
      universityId: Number(selectedUniversity?.id ?? 0),

      firstIndustry: labelToCodeIndustry(industry[1]),
      secondIndustry: labelToCodeIndustry(industry[2]) || undefined,
      thirdIndustry: labelToCodeIndustry(industry[3]) || undefined,

      firstJob: labelToCodeJob(job[1]),
      secondJob: labelToCodeJob(job[2]) || undefined,
      thirdJob: labelToCodeJob(job[3]) || undefined,
    };
    mutate(requestBody, {
      onSuccess: () => {
        navigate(ROUTES.HOME);
      },
    });
  };

  return (
    <div className={s.page}>
      <div className={s.card}>
        <div className={s.inner}>
          <div className={s.titleBlock}>
            <h1 className={s.title}>
              <img className={s.logo} src={OnboardingLogo} alt="Comfit" />에
              오신걸 환영합니다
            </h1>
            <p className={s.subtitle}>
              몇 가지만 답변 주시면 지원자님을 위한 맞춤 정보를 더 빠르게 드릴
              수 있어요
            </p>
          </div>

          <SelectSection
            selectedEducation={selectedEducation}
            setSelectedEducation={setSelectedEducation}
            selectedUniversity={selectedUniversity}
            setSelectedUniversity={setSelectedUniversity}
          />

          <div className={s.buttonWrap}>
            <Button
              variant="primary"
              size="full"
              disabled={!isFormComplete}
              onClick={handleSelectionSubmit}
            >
              작성 완료
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { OnboardingPage };
