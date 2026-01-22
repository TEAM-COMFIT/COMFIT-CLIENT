import { FILTER_INDUSTRY, FILTER_SCALE } from "@/shared/config";

import type { IndustryCode, ScaleCode } from "@/shared/config";

// 전체 선택을 위한 타입 확장
export type IndustryFilterCode = IndustryCode | undefined;
export type ScaleFilterCode = ScaleCode | undefined;

// Industry 필터 옵션 (맨 앞에 '전체' 추가)
export const INDUSTRY_FILTER_OPTIONS = [
  { id: 0, code: undefined, label: "전체" },
  ...FILTER_INDUSTRY,
];

// Scale 필터 옵션 (맨 앞에 '전체' 추가)
export const SCALE_FILTER_OPTIONS = [
  { id: 0, code: undefined, label: "전체" },
  ...FILTER_SCALE,
];
