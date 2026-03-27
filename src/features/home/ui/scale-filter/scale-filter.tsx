import { SCALE, FILTER_SCALE } from "@/shared/config/company";
import { Dropdown } from "@/shared/ui/dropdown/dropdown";

import type { ScaleCode } from "@/shared/config/company";
interface ScaleFilterProps {
  values: ScaleCode[];
  onChange: (value: ScaleCode) => void;
}

const ScaleFilter = ({ values, onChange }: ScaleFilterProps) => {
  const renderTriggerLabel = () => {
    if (values.length === 0) {
      return <span>기업 규모</span>;
    }

    const firstLabel = SCALE[values[0]];
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
    <Dropdown size="large" mode="multiple">
      <Dropdown.Trigger>{renderTriggerLabel()}</Dropdown.Trigger>
      <Dropdown.Menu>
        {FILTER_SCALE.map((option) => (
          <Dropdown.CheckboxItem
            key={option.id}
            onClick={() => onChange(option.code)}
          >
            {option.label}
          </Dropdown.CheckboxItem>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export { ScaleFilter };
