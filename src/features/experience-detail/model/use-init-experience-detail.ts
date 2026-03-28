import { useExperienceDetailStore } from "../store/experience.store";

import type { ExperienceMode } from "../types/experience-detail.types";

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
