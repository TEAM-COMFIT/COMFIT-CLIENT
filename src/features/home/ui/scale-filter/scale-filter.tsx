import { FILTER_SCALE, SCALE } from "@/shared/config/company";
import Dropdown from "@/shared/ui/dropdown/dropdown";

import type { ScaleCode } from "@/shared/config/company";

interface CompanySizeFilterProps {
  value: ScaleCode | null;
  onChange: (value: ScaleCode) => void;
}

const CompanySizeFilter = ({ value, onChange }: CompanySizeFilterProps) => {
  const triggerLabel = value === null ? "기업 규모" : SCALE[value];

  return (
    <Dropdown type="large">
      <Dropdown.Trigger>{triggerLabel}</Dropdown.Trigger>

      <Dropdown.Menu>
        {FILTER_SCALE.map((option) => (
          <Dropdown.Item key={option.id} onClick={() => onChange(option.code)}>
            {option.label}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default CompanySizeFilter;
