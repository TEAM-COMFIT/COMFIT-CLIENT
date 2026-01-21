import type { ExperienceTypeCode } from "@/shared/config";

export interface ExperienceCardData {
  id: number;
  title: string;
  updatedAt: string;
  type: ExperienceTypeCode;
  isDefault?: boolean;
}

export interface ExperienceList {
  content: ExperienceCardData[];
  currentPage: number;
  totalPage: number;
  totalElements: number;
}
