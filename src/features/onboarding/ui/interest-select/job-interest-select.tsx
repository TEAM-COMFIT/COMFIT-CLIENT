import { JOB_OPTIONS } from "@features/onboarding/config/interest-select.constants";
import {
  useDisabledOptions,
  useInterestActions,
  useInterestSelection,
} from "@features/onboarding/model/interest-select/selectors";
import { InterestSelectBase } from "@features/onboarding/ui/interest-select/interest-select-base";

import type { Priority } from "@features/onboarding/model/interest-select/store";

interface JobInterestSelectProps {
  priority?: Priority;
}

export const JobInterestSelect = ({ priority = 1 }: JobInterestSelectProps) => {
  const selected = useInterestSelection("job", priority);
  const disabledOptions = useDisabledOptions("job", priority);
  const { setSelection } = useInterestActions();

  return (
    <InterestSelectBase
      variant="job"
      title={`${priority}순위 관심 직무`}
      required={priority === 1}
      options={JOB_OPTIONS}
      selected={selected as (typeof JOB_OPTIONS)[number] | null}
      disabledOptions={disabledOptions as (typeof JOB_OPTIONS)[number][]}
      onSelect={(value) =>
        setSelection({
          variant: "job",
          priority,
          value: value as string | null,
        })
      }
    />
  );
};
