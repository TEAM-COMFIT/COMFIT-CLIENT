import { useMemo, useState } from "react";

import { useInterestSelectStore } from "@/features/onboarding";
import { isOnboardingFormComplete } from "@/features/onboarding/lib/onboarding-form.validator";
import { OnboardingLogo } from "@/shared/assets/images";
import { Button } from "@/shared/ui";

import * as s from "./onboarding-page.css";
import { SelectSection } from "./ui/select-section";

import type { EducationTypeCode } from "@/features/onboarding";
import type { SearchItem } from "@/shared/ui/search-auto-complete/types";

const OnboardingPage = () => {
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

    // 서버 규격에 맞게 데이터 변환
    const requestBody = {
      educationLevel: selectedEducation,
      universityId: selectedUniversity?.id ?? 0,
      // Industry 매핑
      firstIndustry: industry[1] ?? "",
      secondIndustry: industry[2] ?? "",
      thirdIndustry: industry[3] ?? "",
      // Job 매핑
      firstJob: job[1] ?? "",
      secondJob: job[2] ?? "",
      thirdJob: job[3] ?? "",
    };
    // TODO: api mutation 호출
    console.log("서버 전송 데이터:", requestBody);
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
