import { useCallback } from "react";

import { useExperienceDetailStore } from "../store/experience.store";

import type { ExperienceMode } from "../types/experience-detail.types";

export const useInitExperienceDetail = () => {
  const current = useExperienceDetailStore((s) => s.current);
  const { setMode, setCurrent, resetDraft, setDefaultExperienceId } =
    useExperienceDetailStore((s) => s.actions);

  const init = useCallback(
    (mode: ExperienceMode, experienceId?: string) => {
      if (
        current &&
        experienceId &&
        String(current.experienceId) === experienceId
      ) {
        setMode(mode);
        return;
      }

      setMode(mode);

      if (mode === "create") {
        setCurrent(null);
        resetDraft();
        setDefaultExperienceId(null);
        return;
      }

      if (!experienceId) {
        setCurrent(null);
        resetDraft();
        return;
      }
    },
    [current, setMode, setCurrent, resetDraft, setDefaultExperienceId]
  );

  return init;
};

export const useResetExperienceDetail = () => {
  const { setMode, setCurrent, resetDraft, setDefaultExperienceId } =
    useExperienceDetailStore((s) => s.actions);

  const reset = useCallback(() => {
    setMode("view");
    setCurrent(null);
    resetDraft();
    setDefaultExperienceId(null);
  }, [setMode, setCurrent, resetDraft, setDefaultExperienceId]);

  return reset;
};

export const initExperienceDetail = (
  mode: ExperienceMode,
  experienceId?: string
) => {
  const { current, actions } = useExperienceDetailStore.getState();

  if (
    current &&
    experienceId &&
    String(current.experienceId) === experienceId
  ) {
    actions.setMode(mode);
    return;
  }

  actions.setMode(mode);

  if (mode === "create") {
    actions.setCurrent(null);
    actions.resetDraft();
    actions.setDefaultExperienceId(null);
    return;
  }

  if (!experienceId) {
    actions.setCurrent(null);
    actions.resetDraft();
    return;
  }
};

export const resetExperienceDetail = () => {
  const { actions } = useExperienceDetailStore.getState();
  actions.setMode("view");
  actions.setCurrent(null);
  actions.resetDraft();
  actions.setDefaultExperienceId(null);
};
