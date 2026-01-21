import { getIndustryLabel, type IndustryCode } from "@/shared/config";

import type { CompanyInfo } from "../type";

interface FieldConfigItem {
  label: string;
  key: keyof CompanyInfo;
  format?: (value: string) => string;
  isLink?: boolean;
}

export const FIELD_CONFIG: FieldConfigItem[] = [
  {
    label: "기업명",
    key: "name",
  },
  {
    label: "산업군",
    key: "industry",
    format: (value: string) => `#${getIndustryLabel(value as IndustryCode)}`,
  },
  {
    label: "채용 공고",
    key: "recruitUrl",
    isLink: true,
  },
  {
    label: "홈페이지",
    key: "companyUrl",
    isLink: true,
  },
] as const;
