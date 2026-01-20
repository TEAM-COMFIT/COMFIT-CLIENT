import type { CompanyInfo } from "../type";

export const FIELD_CONFIG: { label: string; key: keyof CompanyInfo }[] = [
  { label: "기업명", key: "name" },
  { label: "산업분야", key: "industry" },
  { label: "채용 공고 웹사이트 URL", key: "recruitUrl" },
  { label: "기업 웹사이트 URL", key: "companyUrl" },
];
