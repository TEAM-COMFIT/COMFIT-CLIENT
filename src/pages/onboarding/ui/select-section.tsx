import { useState } from "react";

import {
  EducationSelect,
  IndustryInterestSelect,
  JobInterestSelect,
} from "@/features/onboarding";
// import { fetchUniversitiesMock } from "@/features/onboarding/api/university.mock";
import { useGetUniversity } from "@/features/onboarding/api/use-get-university.query";
import { SearchAutocomplete } from "@/shared/ui/search-auto-complete/search-auto-complete";

import * as s from "../onboarding-page.css";

import type { EducationTypeCode } from "@/features/onboarding";
import type { SearchItem } from "@/shared/ui/search-auto-complete/types";

interface SelectSectionProps {
  selectedEducation: EducationTypeCode | null;
  setSelectedEducation: (value: EducationTypeCode | null) => void;
  selectedUniversity: SearchItem | null;
  setSelectedUniversity: (value: SearchItem | null) => void;
}

const SelectSection = ({
  selectedEducation,
  setSelectedEducation,
  selectedUniversity,
  setSelectedUniversity,
}: SelectSectionProps) => {
  const [universitySearch, setUniversitySearch] = useState("");
  const { data, isLoading } = useGetUniversity({
    keyword: universitySearch,
  });

  return (
    <>
      <div className={s.field}>
        <div className={s.label}>
          최종학력 <span className={s.required}>*</span>
        </div>
        <EducationSelect
          value={selectedEducation}
          onChange={setSelectedEducation}
        />
      </div>

      <div className={s.universityField}>
        <div className={s.label}>
          대학교 <span className={s.required}>*</span>
        </div>
        <SearchAutocomplete
          variant="onboarding"
          placeholder="대학교를 검색하세요"
          items={Array.isArray(data) ? data : []}
          isLoading={isLoading} // 로딩 상태 주입
          onQueryChange={setUniversitySearch} // 컴포넌트 내부에서 디바운스 후 호출됨
          selectedItem={selectedUniversity}
          setSelectedItem={setSelectedUniversity}
          onSelect={setSelectedUniversity}
          onClear={() => {
            setSelectedUniversity(null);
            setUniversitySearch("");
          }}
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
    </>
  );
};

export { SelectSection };
