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
  };
}

let alertIdCounter = 0;

const useExperienceAlertStore = create<ExperienceAlertState>((set, get) => ({
  alerts: [],
  actions: {
    show: (variant, title, description) => {
      const { alerts } = get();
      const lastAlert = alerts[alerts.length - 1];

      const isDuplicate =
        lastAlert != null &&
        lastAlert.variant === variant &&
        lastAlert.title === title &&
        lastAlert.description === description;

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
  },
}));

const showAlert = (
  variant: AlertVariant,
  title: string,
  description: string
) => {
  useExperienceAlertStore.getState().actions.show(variant, title, description);
};

export const showValidationError = (title: string, description: string) => {
  showAlert("error", title, description);
};

export const showSaveError = () => {
  showAlert("error", "오류", EXPERIENCE_MESSAGES.API.SAVE_FAILED);
};

export const showDeleteError = () => {
  showAlert("error", "오류", EXPERIENCE_MESSAGES.API.DELETE_FAILED);
};

export const showDefaultSettingError = () => {
  showAlert("error", "오류", EXPERIENCE_MESSAGES.API.DEFAULT_SETTING_FAILED);
};

export const showSaveSuccess = (title?: string) => {
  showAlert("success", title ?? "완료", EXPERIENCE_MESSAGES.SUCCESS.SAVED);
};

export const showDeleteSuccess = () => {
  showAlert("success", "완료", EXPERIENCE_MESSAGES.SUCCESS.DELETED);
};

export const useExperienceAlerts = () =>
  useExperienceAlertStore((s) => s.alerts);

export const useExperienceAlertActions = () =>
  useExperienceAlertStore((s) => s.actions);