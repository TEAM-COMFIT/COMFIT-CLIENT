import { Select } from "@/shared/ui";

import { EDUCATION_TYPE } from "../../config/education";

import type { EducationTypeCode } from "../../config/education";

interface EducationSelectProps {
  value: EducationTypeCode | null;
  onChange: (value: EducationTypeCode) => void;
}

const EducationSelect = ({ value, onChange }: EducationSelectProps) => {
  const triggerLabel =
    value === null ? "최종학력을 선택하세요" : EDUCATION_TYPE[value];

  return (
    <Select>
      <Select.Trigger>{triggerLabel}</Select.Trigger>

      <Select.Menu>
        {Object.entries(EDUCATION_TYPE).map(([code, label]) => (
          <Select.Item
            key={code}
            onClick={() => onChange(code as keyof typeof EDUCATION_TYPE)}
          >
            {label}
          </Select.Item>
        ))}
      </Select.Menu>
    </Select>
  );
};

export { EducationSelect };
