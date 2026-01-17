import { JOB_OPTIONS } from "../../config/interest-select.constants";

import { InterestSelectBase } from "./interest-select-base";

interface JobInterestSelectProps {
  priority?: number;
}

export const JobInterestSelect = ({ priority = 1 }: JobInterestSelectProps) => {
  return (
    <InterestSelectBase
      variant="job"
      title={`${priority}순위 관심 직무`}
      options={JOB_OPTIONS}
    />
  );
};
