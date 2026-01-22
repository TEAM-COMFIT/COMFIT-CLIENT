import { SCALE } from "@/shared/config/company";
import { Dropdown } from "@/shared/ui/dropdown/dropdown";

import { SCALE_FILTER_OPTIONS } from "../../config/filter-constant";

import type { ScaleFilterCode } from "@/features/home/config/filter-constant";
interface ScaleFilterProps {
  value: ScaleFilterCode;
  isTouched: boolean;
  onChange: (value: ScaleFilterCode) => void;
}

const ScaleFilter = ({ value, isTouched, onChange }: ScaleFilterProps) => {
  let triggerLabel = "기업 규모";

  if (value) {
    triggerLabel = SCALE[value];
  } else if (isTouched) {
    triggerLabel = "전체";
  }
  return (
    <Dropdown type="large">
      <Dropdown.Trigger>{triggerLabel}</Dropdown.Trigger>
      <Dropdown.Menu>
        {SCALE_FILTER_OPTIONS.map((option) => (
          <Dropdown.Item key={option.id} onClick={() => onChange(option.code)}>
            {option.label}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export { ScaleFilter };
