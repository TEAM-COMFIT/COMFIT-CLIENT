import { useCallback, useMemo } from "react";

import { useExperienceDetailStore } from "../store/store";

type DateKey = "startAt" | "endAt";

export const formatToYMD = (date: Date) => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
};

export const parseYMD = (ymd: string) => {
  const [y, m, d] = ymd.split("-").map(Number);
  if (!y || !m || !d) return null;
  return new Date(y, m - 1, d);
};


// store에는 string(YYYY-MM-DD)로 저장하고, UI에는 DatePicker가 쓰기 편한 Date로 내려주기
export const useExperienceDateField = (key: DateKey) => {
  const value = useExperienceDetailStore((s) => s.draft[key]);
  const setDraftField = useExperienceDetailStore((s) => s.actions.setDraftField);

  const selectedDate = useMemo(() => {
    if (!value) return null;
    return parseYMD(value);
  }, [value]);

  const onChangeSelectedDate = useCallback(
    (date: Date) => {
      setDraftField(key, formatToYMD(date));
    },
    [key, setDraftField],
  );

  return { selectedDate, onChangeSelectedDate };
};
