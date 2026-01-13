import { useCallback, useState } from "react";

interface UseAlertOptions {
  defaultOpen?: boolean;
}

export const useAlert = (options: UseAlertOptions = {}) => {
  const { defaultOpen = false } = options;
  const [open, setOpen] = useState(defaultOpen);

  const openAlert = useCallback(() => setOpen(true), []);
  const closeAlert = useCallback(() => setOpen(false), []);
  const toggleAlert = useCallback(() => setOpen((v) => !v), []);

  return {
    open,
    actions: {
      open: openAlert,
      close: closeAlert,
      toggle: toggleAlert,
    },
  };
};
