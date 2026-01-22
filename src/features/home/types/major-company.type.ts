import type { ScaleCode, IndustryCode } from "@/shared/config";
export interface MajorCompanyType {
  id: number;
  name: string;
  industry: IndustryCode;
  scale: ScaleCode;
  logo: string;
  photoUrl: string;
}
