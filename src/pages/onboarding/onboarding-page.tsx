import { useMemo, useState } from "react";

import {
  EducationSelect,
  IndustryInterestSelect,
  JobInterestSelect,
  useInterestSelectStore,
} from "@/features/onboarding";
import comfitLogo from "@/shared/assets/images/comfit_onboarding_logo.png";
import { SearchAutocomplete } from "@/shared/ui/search-auto-complete/search-auto-complete";
import { Button } from "@shared/ui/button/button";

import * as s from "./onboarding-page.css";

import type { EducationTypeCode } from "@/features/onboarding";
import type { SearchItem } from "@/shared/ui/search-auto-complete/types";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const OnboardingPage = () => {
  const [selectedEducation, setSelectedEducation] =
    useState<EducationTypeCode | null>(null);
  const [selectedUniversity, setSelectedUniversity] =
    useState<SearchItem | null>(null);

  const industry = useInterestSelectStore((s) => s.industry);
  const job = useInterestSelectStore((s) => s.job);

  const universities = useMemo<SearchItem[]>(
    () => [
      { id: "u-1", label: "서울대학교" },
      { id: "u-2", label: "서울시립대학교" },
      { id: "u-3", label: "서울과학기술대학교" },
      { id: "u-4", label: "서울여자대학교" },
      { id: "u-5", label: "서울교육대학교" },
      { id: "u-6", label: "명지대학교" },
    ],
    [],
  );

  const fetchUniversities = async (query: string): Promise<SearchItem[]> => {
    await sleep(250);
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return universities.filter((x) => x.label.toLowerCase().includes(q));
  };

  const isFormComplete = useMemo(() => {
    const hasEducation = Boolean(selectedEducation);
    const hasUniversity = Boolean(selectedUniversity);

    const hasIndustryAll =
      Boolean(industry[1]) && Boolean(industry[2]) && Boolean(industry[3]);

    const hasJobAll = Boolean(job[1]) && Boolean(job[2]) && Boolean(job[3]);

    return hasEducation && hasUniversity && hasIndustryAll && hasJobAll;
  }, [selectedEducation, selectedUniversity, industry, job]);

  return (
    <div className={s.page}>
      <div className={s.container}>
        <div className={s.card}>
          <div className={s.inner}>
            <div className={s.titleBlock}>
              <h1 className={s.title}>
                <img className={s.logo} src={comfitLogo} alt="Comfit" />
                에 오신걸 환영합니다
              </h1>
              <p className={s.subtitle}>
                몇 가지만 답변 주시면 지원자님을 위한 맞춤 정보를 더 빠르게 드릴 수 있어요
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
                fetchItems={fetchUniversities}
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
                onClick={() => {
                  if (!isFormComplete) return;
                  // TODO: 제출 로직
                }}
              >
                작성 완료
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { OnboardingPage };
