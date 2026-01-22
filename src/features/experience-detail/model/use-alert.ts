import { create } from "zustand";

import { EXPERIENCE_MESSAGES } from "../config/messages";

import type { AlertVariant } from "@/shared/ui/alert";

interface AlertItem {
  id: string;
  variant: AlertVariant;
  title: string;
  description: string;
}

interface ExperienceAlertState {
  alerts: AlertItem[];
  actions: {
    show: (variant: AlertVariant, title: string, description: string) => void;
    close: (id: string) => void;
    closeAll: () => void;
  };
}

let alertIdCounter = 0;

export const useExperienceAlertStore = create<ExperienceAlertState>(
  (set, get) => ({
    alerts: [],
    actions: {
      show: (variant, title, description) => {
        const { alerts } = get();
        const isDuplicate = alerts.some(
          (a) =>
            a.variant === variant &&
            a.title === title &&
            a.description === description
        );
        if (isDuplicate) return;

        const id = `exp-alert-${++alertIdCounter}`;
        set((state) => ({
          alerts: [...state.alerts, { id, variant, title, description }],
        }));
      },
      close: (id) => {
        set((state) => ({
          alerts: state.alerts.filter((a) => a.id !== id),
        }));
      },
      closeAll: () => {
        set({ alerts: [] });
      },
    },
  })
);

export const showExperienceError = (message: string) => {
  const { show } = useExperienceAlertStore.getState().actions;
  show("error", "오류", message);
};

export const showExperienceSuccess = (message: string, title = "완료") => {
  const { show } = useExperienceAlertStore.getState().actions;
  show("success", title, message);
};

export const showExperienceInfo = (message: string) => {
  const { show } = useExperienceAlertStore.getState().actions;
  show("info", "안내", message);
};

export const showExperienceWarning = (message: string) => {
  const { show } = useExperienceAlertStore.getState().actions;
  show("warning", "주의", message);
};

export const showValidationError = (title: string, description: string) => {
  const { show } = useExperienceAlertStore.getState().actions;
  show("error", title, description);
};

export const showSaveError = () => {
  showExperienceError(EXPERIENCE_MESSAGES.API.SAVE_FAILED);
};

export const showDeleteError = () => {
  showExperienceError(EXPERIENCE_MESSAGES.API.DELETE_FAILED);
};

export const showDefaultSettingError = () => {
  showExperienceError(EXPERIENCE_MESSAGES.API.DEFAULT_SETTING_FAILED);
};

export const showSaveSuccess = (title?: string) => {
  showExperienceSuccess(EXPERIENCE_MESSAGES.SUCCESS.SAVED, title);
};

export const showDeleteSuccess = () => {
  showExperienceSuccess(EXPERIENCE_MESSAGES.SUCCESS.DELETED);
};

export const useExperienceAlerts = () =>
  useExperienceAlertStore((s) => s.alerts);

export const useExperienceAlertActions = () =>
  useExperienceAlertStore((s) => s.actions);
