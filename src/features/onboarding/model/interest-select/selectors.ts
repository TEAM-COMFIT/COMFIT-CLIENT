import { useShallow } from "zustand/react/shallow";

import { useInterestSelectStore } from "./store";

import type { InterestVariant, Priority } from "./store";

export const useInterestSelection = (variant: InterestVariant, priority: Priority) =>
  useInterestSelectStore((s) => s[variant][priority]);

export const useDisabledOptions = (variant: InterestVariant, priority: Priority) =>
  useInterestSelectStore(
    useShallow((s) => {
      const all = s[variant];

      // 앞 순위(현재 priority보다 작은 숫자)에서 선택된 값들만 비활성화
      const picked = Object.entries(all)
        .filter(([p]) => Number(p) < priority)
        .map(([, v]) => v)
        .filter(Boolean) as string[];

      return picked;
    }),
  );

export const useInterestActions = () => useInterestSelectStore((s) => s.actions);
