import { useState } from "react";

import { EducationSelect } from "@/features/onboarding";
import { Tag } from "@/shared/ui";

import type { EducationTypeCode } from "@/features/onboarding";

const OnboardingPage = () => {
  const [selectedEducation, setSelectedEducation] =
    useState<EducationTypeCode | null>(null);

  return (
    <div>
      <h1>Welcome to the Onboarding Page</h1>
      <Tag>푸드/F&B</Tag>
      <Tag xlabel>푸드/F&B</Tag>
      <Tag type="register">인턴/실무</Tag>
      <EducationSelect
        value={selectedEducation}
        onChange={setSelectedEducation}
      />
    </div>
  );
};

export { OnboardingPage };
