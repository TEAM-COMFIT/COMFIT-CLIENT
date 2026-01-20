import { DEFAULT_BUTTON_LABELS } from "../config";

import { useExperienceDetailStore } from "./store";

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

export const useDraftTitle = () =>
  useExperienceDetailStore((s) => s.draft.title);

export const useDraftType = () =>
  useExperienceDetailStore((s) => s.draft.type);

export const useDraftStartAt = () =>
  useExperienceDetailStore((s) => s.draft.startAt);

export const useDraftEndAt = () =>
  useExperienceDetailStore((s) => s.draft.endAt);

export const useDraftSituation = () =>
  useExperienceDetailStore((s) => s.draft.situation);

export const useDraftTask = () =>
  useExperienceDetailStore((s) => s.draft.task);

export const useDraftAction = () =>
  useExperienceDetailStore((s) => s.draft.action);

export const useDraftResult = () =>
  useExperienceDetailStore((s) => s.draft.result);
