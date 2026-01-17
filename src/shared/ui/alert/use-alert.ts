import { useCallback, useState } from "react";

import type { AlertVariant } from "@/shared/ui/alert";

interface AlertState {
  open: boolean;
  variant: AlertVariant;
  title: string;
  description: string;
}

interface UseAlertOptions {
  defaultOpen?: boolean;
  defaultVariant?: AlertVariant;
  defaultTitle?: string;
  defaultDescription?: string;
}

export const useAlert = (options: UseAlertOptions = {}) => {
  const {
    defaultOpen = false,
    defaultVariant = "info",
    defaultTitle = "",
    defaultDescription = "",
  } = options;

  const [alertState, setAlertState] = useState<AlertState>({
    open: defaultOpen,
    variant: defaultVariant,
    title: defaultTitle,
    description: defaultDescription,
  });

  const openAlert = useCallback(
    (variant: AlertVariant, title: string, description: string) => {
      setAlertState({
        open: true,
        variant,
        title,
        description,
      });
    },
    []
  );

  const closeAlert = useCallback(() => {
    setAlertState((prev) => ({ ...prev, open: false }));
  }, []);

  return {
    alertState,
    actions: {
      open: openAlert,
      close: closeAlert,
    },
  };
};
