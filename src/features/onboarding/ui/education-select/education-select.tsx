import {
  EDUCATION_TYPE,
  FILTER_EDUCATION_TYPE,
} from "@/features/onboarding/config/education";
import { Select } from "@/shared/ui";

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
      <Select.Trigger hasValue={value !== null}>{triggerLabel}</Select.Trigger>

      <Select.Menu>
        {FILTER_EDUCATION_TYPE.map((item) => (
          <Select.Item key={item.id} onClick={() => onChange(item.code)}>
            {item.label}
          </Select.Item>
        ))}
      </Select.Menu>
    </Select>
  );
};

export { EducationSelect };
