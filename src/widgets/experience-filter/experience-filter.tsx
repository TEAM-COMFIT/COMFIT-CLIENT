import { EXPERIENCE_TYPE } from "@/shared/config/experience";
import { Dropdown } from "@/shared/ui";

import { EXPERIENCE_FILTER_OPTIONS } from "./filter-experience-constant";

import type { ExperienceTypeCode } from "@/shared/config/experience";

interface ExperienceFilterProps {
  value: string | null;
  onChange: (value: string) => void;
  isTouched?: boolean;
  hasTotal?: boolean;
}

const ExperienceFilter = ({
  value,
  onChange,
  isTouched = false,
  hasTotal = true,
}: ExperienceFilterProps) => {
  let triggerLabel = "경험 유형";
  if (value) triggerLabel = EXPERIENCE_TYPE[value as ExperienceTypeCode];
  else if (isTouched && hasTotal) triggerLabel = "전체";

  const options = hasTotal
    ? [{ id: 0, code: undefined, label: "전체" }, ...EXPERIENCE_FILTER_OPTIONS]
    : EXPERIENCE_FILTER_OPTIONS;

  return (
    <Dropdown size="medium">
      <Dropdown.Trigger>{triggerLabel}</Dropdown.Trigger>

      <Dropdown.Menu>
        {options.map((option) => (
          <Dropdown.Item
            key={option.id}
            onClick={() => onChange(option.code ?? "")}
          >
            {option.label}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export { ExperienceFilter };
