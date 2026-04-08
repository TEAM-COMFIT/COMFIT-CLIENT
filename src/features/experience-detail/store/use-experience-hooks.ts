import { useExperienceDetailStore } from "./experience.store";

export const useExperienceMode = () => useExperienceDetailStore((s) => s.mode);

export const useExperienceCurrent = () =>
  useExperienceDetailStore((s) => s.current);

export const useExperienceDraft = () =>
  useExperienceDetailStore((s) => s.draft);

export const useExperienceActions = () =>
  useExperienceDetailStore((s) => s.actions);

export const useIsDraftDefault = () =>
  useExperienceDetailStore((s) => s.draft.isDefault);
