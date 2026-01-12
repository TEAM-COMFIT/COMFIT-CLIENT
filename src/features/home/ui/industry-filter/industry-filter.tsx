import { FILTER_INDUSTRY, INDUSTRY } from "@/shared/config/company";
import { Dropdown } from "@/shared/ui";

import type { IndustryCode } from "@/shared/config/company";

interface IndustryFilterProps {
  value: IndustryCode | null;
  onChange: (value: IndustryCode) => void;
}

const IndustryFilter = ({ value, onChange }: IndustryFilterProps) => {
  const triggerLabel = value === null ? "산업" : INDUSTRY[value];

  return (
    <Dropdown type="full">
      <Dropdown.Trigger>{triggerLabel}</Dropdown.Trigger>

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

export default IndustryFilter;
