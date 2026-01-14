import { EXPERIENCE_TYPE } from "@/shared/config/experience";
import Dropdown from "@/shared/ui/dropdown/dropdown";

import type { ExperienceTypeCode } from "@/shared/config/experience";

interface ExperienceFilterProps {
  value: ExperienceTypeCode | null;
  onChange: (value: ExperienceTypeCode) => void;
}

const ExperienceFilter = ({ value, onChange }: ExperienceFilterProps) => {
  const triggerLabel = value === null ? "경험종류" : EXPERIENCE_TYPE[value];

  return (
    <Dropdown type="medium">
      <Dropdown.Trigger>{triggerLabel}</Dropdown.Trigger>

      <Dropdown.Menu>
        {Object.entries(EXPERIENCE_TYPE).map(([code, label]) => (
          <Dropdown.Item
            key={code}
            onClick={() => onChange(code as ExperienceTypeCode)}
          >
            {label}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ExperienceFilter;
