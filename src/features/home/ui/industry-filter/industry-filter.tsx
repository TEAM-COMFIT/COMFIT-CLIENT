import { INDUSTRY, FILTER_INDUSTRY } from "@/shared/config/company";
import { Dropdown } from "@/shared/ui/dropdown/dropdown";

import type { IndustryCode } from "@/shared/config/company";
interface IndustryFilterProps {
  values: IndustryCode[];
  onChange: (value: IndustryCode) => void;
}

const IndustryFilter = ({ values, onChange }: IndustryFilterProps) => {
  const renderTriggerLabel = () => {
    if (values.length === 0) {
      return <span>기업 규모</span>;
    }

    const firstLabel = INDUSTRY[values[0]];
    const extraCount = values.length - 1;

    return (
      <div>
        <span>기업 규모 </span>
        <span>
          {firstLabel} {extraCount > 0 && `외 ${extraCount}`}
        </span>
      </div>
    );
  };

  return (
    <Dropdown size="full">
      <Dropdown.Trigger>{renderTriggerLabel()}</Dropdown.Trigger>
      <Dropdown.Menu>
        {FILTER_INDUSTRY.map((option) => (
          <Dropdown.Item key={option.id} onClick={() => onChange(option.code)}>
            {option.label}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export { IndustryFilter };
