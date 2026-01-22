import { useCallback, useMemo } from "react";

import { formatDateDash, parseYMD } from "@/shared/lib/format-date";

import { useExperienceDetailStore } from "../store/experience.store";

type DateKey = "startAt" | "endAt";

// store에는 string(YYYY-MM-DD)로 저장하고, UI에는 DatePicker가 쓰기 편한 Date로 내려주기
export const useExperienceDateField = (key: DateKey) => {
  const value = useExperienceDetailStore((s) => s.draft[key]);
  const setDraftField = useExperienceDetailStore(
    (s) => s.actions.setDraftField
  );

  const selectedDate = useMemo(() => {
    if (!value) return null;
    return parseYMD(value);
  }, [value]);

  const onChangeSelectedDate = useCallback(
    (date: Date) => {
      setDraftField(key, formatDateDash(date));
    },
    [key, setDraftField]
  );

  return { selectedDate, onChangeSelectedDate };
};
