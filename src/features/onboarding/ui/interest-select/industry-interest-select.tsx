import { INDUSTRY_OPTIONS } from "@features/onboarding/config/interest-select.constants";
import {
  useDisabledOptions,
  useInterestActions,
  useInterestSelection,
} from "@features/onboarding/model/interest-select/selectors";
import { InterestSelectBase } from "@features/onboarding/ui/interest-select/interest-select-base";

import type { Priority } from "@features/onboarding/model/interest-select/store";

interface IndustryInterestSelectProps {
  priority?: Priority;
}

export const IndustryInterestSelect = ({
  priority = 1,
}: IndustryInterestSelectProps) => {
  const selected = useInterestSelection("industry", priority);
  const disabledOptions = useDisabledOptions("industry", priority);
  const { setSelection } = useInterestActions();

  return (
    <InterestSelectBase
      variant="industry"
      title={`${priority}순위 관심 산업`}
      required={priority === 1}
      options={INDUSTRY_OPTIONS}
      selected={selected as (typeof INDUSTRY_OPTIONS)[number] | null}
      disabledOptions={disabledOptions as (typeof INDUSTRY_OPTIONS)[number][]}
      onSelect={(value) =>
        setSelection({
          variant: "industry",
          priority,
          value: value as string | null,
        })
      }
    />
  );
};
