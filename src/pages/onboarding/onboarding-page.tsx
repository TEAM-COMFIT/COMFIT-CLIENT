import { useMemo, useState } from "react";

import {
  EducationSelect,
  IndustryInterestSelect,
  JobInterestSelect,
  useInterestSelectStore,
} from "@/features/onboarding";
import { fetchUniversitiesMock } from "@/features/onboarding/api/university.mock";
import { isOnboardingFormComplete } from "@/features/onboarding/lib/onboarding-form.validator";
import { OnboardingLogo } from "@/shared/assets/images";
import { Button } from "@/shared/ui";
import { SearchAutocomplete } from "@/shared/ui/search-auto-complete/search-auto-complete";

import * as s from "./onboarding-page.css";

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

          <div className={s.field}>
            <div className={s.label}>
              최종학력 <span className={s.required}>*</span>
            </div>
            <EducationSelect
              value={selectedEducation}
              onChange={setSelectedEducation}
            />
          </div>

          <div className={s.field}>
            <div className={s.label}>
              대학교 <span className={s.required}>*</span>
            </div>
            <SearchAutocomplete
              variant="onboarding"
              placeholder="대학교를 검색하세요"
              fetchItems={fetchUniversitiesMock}
              selectedItem={selectedUniversity}
              setSelectedItem={setSelectedUniversity}
              onSelect={setSelectedUniversity}
              onClear={() => setSelectedUniversity(null)}
            />
          </div>

          <div className={s.sectionGroup}>
            <IndustryInterestSelect priority={1} />
            <IndustryInterestSelect priority={2} />
            <IndustryInterestSelect priority={3} />

            <JobInterestSelect priority={1} />
            <JobInterestSelect priority={2} />
            <JobInterestSelect priority={3} />
          </div>

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
