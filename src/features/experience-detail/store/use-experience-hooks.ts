import { DEFAULT_BUTTON_LABELS } from "../config";

import { useExperienceDetailStore } from "./experience.store";

export const useExperienceMode = () => useExperienceDetailStore((s) => s.mode);

export const useExperienceCurrent = () => useExperienceDetailStore((s) => s.current);

export const useExperienceDraft = () => useExperienceDetailStore((s) => s.draft);

export const useDefaultExperienceId = () =>
  useExperienceDetailStore((s) => s.defaultExperience.experienceId);

export const useExperienceActions = () =>
  useExperienceDetailStore((s) => s.actions);

export const useIsDraftDefault = () =>
  useExperienceDetailStore((s) => s.draft.isDefault);

export const useDefaultButtonLabel = () => {
  const isDefault = useExperienceDetailStore((s) => s.draft.isDefault);
  return isDefault ? DEFAULT_BUTTON_LABELS.UNSET : DEFAULT_BUTTON_LABELS.SET;
};

export const useShowEditDeleteButtons = () => {
  const mode = useExperienceDetailStore((s) => s.mode);
  const current = useExperienceDetailStore((s) => s.current);
  return mode === "view" && Boolean(current);
};

export const useShowSubmitButton = () => {
  const mode = useExperienceDetailStore((s) => s.mode);
  return mode === "create" || mode === "edit";
};

export const useCurrentExperienceId = () =>
  useExperienceDetailStore((s) => s.current?.experienceId ?? null);
