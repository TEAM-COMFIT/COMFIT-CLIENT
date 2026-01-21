import { INDUSTRY_CODE_TO_LABEL } from "@/features/onboarding/config/interest-select.constants";
import { InterestSelectBase } from "@features/onboarding/ui/interest-select/interest-select-base";

interface IndustryInterestSelectProps {
  priority?: number;
}

const industryOptions = Object.values(INDUSTRY_CODE_TO_LABEL);

export const IndustryInterestSelect = ({
  priority = 1,
}: IndustryInterestSelectProps) => {
  return (
    <InterestSelectBase
      variant="industry"
      title={`${priority}순위 관심 산업`}
      options={industryOptions}
    />
  );
};
