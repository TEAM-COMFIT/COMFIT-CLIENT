import { JOB_CODE_TO_LABEL } from "@/features/onboarding/config/interest-select.constants";
import { InterestSelectBase } from "@features/onboarding/ui/interest-select/interest-select-base";

interface JobInterestSelectProps {
  priority?: number;
}

const jobOptions = Object.values(JOB_CODE_TO_LABEL);

export const JobInterestSelect = ({ priority = 1 }: JobInterestSelectProps) => {
  return (
    <InterestSelectBase
      variant="job"
      title={`${priority}순위 관심 직무`}
      options={jobOptions}
    />
  );
};
