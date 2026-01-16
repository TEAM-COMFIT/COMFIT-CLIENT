import { JOB_OPTIONS } from "../../config/interest-select.constants";

import { InterestSelectBase } from "./interest-select-base";

export const JobInterestSelect = () => {
  return (
    <InterestSelectBase
      variant="job"
      title="1순위 관심 직무"
      options={JOB_OPTIONS}
    />
  );
};
