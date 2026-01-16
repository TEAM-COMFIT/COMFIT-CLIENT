import { INDUSTRY_OPTIONS } from "../../config/interest-select.constants";

import { InterestSelectBase } from "./interest-select-base";

export const IndustryInterestSelect = () => {
  return (
    <InterestSelectBase
      variant="industry"
      title="1순위 관심 산업"
      options={INDUSTRY_OPTIONS}
    />
  );
};
