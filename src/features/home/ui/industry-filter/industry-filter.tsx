import {
  INDUSTRY_FILTER_OPTIONS,
  type IndustryFilterCode,
} from "@/features/home/config/filter-constant";
import { INDUSTRY } from "@/shared/config/company";
import { Dropdown } from "@/shared/ui/dropdown/dropdown";

interface IndustryFilterProps {
  value: IndustryFilterCode | null;
  isTouched: boolean;
  onChange: (value: IndustryFilterCode) => void;
}

const IndustryFilter = ({
  value,
  isTouched,
  onChange,
}: IndustryFilterProps) => {
  let triggerLabel = "산업";

  if (value) {
    triggerLabel = INDUSTRY[value];
  } else if (isTouched) {
    triggerLabel = "전체";
  }

  return (
    <Dropdown type="full">
      <Dropdown.Trigger>{triggerLabel}</Dropdown.Trigger>
      <Dropdown.Menu>
        {INDUSTRY_FILTER_OPTIONS.map((option) => (
          <Dropdown.Item key={option.id} onClick={() => onChange(option.code)}>
            {option.label}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export { IndustryFilter };
