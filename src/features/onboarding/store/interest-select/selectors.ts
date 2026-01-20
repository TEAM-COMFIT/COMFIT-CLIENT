import { useShallow } from "zustand/react/shallow";

import { useInterestSelectStore } from "./store";

import type { InterestVariant, Priority } from "./store";

export const useInterestSelection = (
  variant: InterestVariant,
  priority: Priority
) => useInterestSelectStore((s) => s[variant][priority]);

export const useDisabledOptions = (
  variant: InterestVariant,
  priority: Priority
) =>
  useInterestSelectStore(
    useShallow((s) => {
      const all = s[variant];

      // 현재 priority를 제외한 다른 모든 순위에서 선택된 값들을 비활성화
      const picked = Object.entries(all)
        .filter(([p]) => Number(p) !== priority)
        .map(([, v]) => v)
        .filter(Boolean) as string[];

      return picked;
    })
  );

export const useInterestActions = () =>
  useInterestSelectStore((s) => s.actions);
