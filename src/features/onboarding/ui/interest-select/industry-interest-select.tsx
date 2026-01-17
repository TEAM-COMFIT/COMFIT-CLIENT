import { INDUSTRY_OPTIONS } from "../../config/interest-select.constants";

import { InterestSelectBase } from "./interest-select-base";

interface IndustryInterestSelectProps {
  priority?: number;
}

export const IndustryInterestSelect = ({
  priority = 1,
}: IndustryInterestSelectProps) => {
  return (
    <InterestSelectBase
      variant="industry"
      title={`${priority}순위 관심 산업`}
      options={INDUSTRY_OPTIONS}
    />
  );
};
