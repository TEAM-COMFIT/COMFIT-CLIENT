import { create } from "zustand";

import type {
  DefaultExperience,
  ExperienceEntity,
  ExperienceMode,
  ExperienceUpsertBody,
} from "../types/experience-detail.types";

const initialDraft: ExperienceUpsertBody = {
  title: "",
  type: null,
  startAt: null,
  endAt: null,
  situation: "",
  task: "",
  action: "",
  result: "",
  isDefault: false,
};

type State = {
  mode: ExperienceMode;

  current: ExperienceEntity | null;

  draft: ExperienceUpsertBody;

  defaultExperience: DefaultExperience;

  isSubmitting: boolean;

  actions: {
    setMode: (m: ExperienceMode) => void;

    setCurrent: (v: ExperienceEntity | null) => void;

    resetDraft: () => void;

    hydrateDraftFromCurrent: () => void;

    setDraftField: <K extends keyof ExperienceUpsertBody>(
      key: K,
      value: ExperienceUpsertBody[K]
    ) => void;

    setDefaultExperienceId: (experienceId: number | null) => void;

    toggleDraftDefault: () => void;

    setCurrentDefault: (isDefault: boolean) => void;

    setIsSubmitting: (v: boolean) => void;
  };
};

export const useExperienceDetailStore = create<State>((set, get) => ({
  mode: "view",
  current: null,
  draft: initialDraft,
  defaultExperience: { experienceId: null },
  isSubmitting: false,

  actions: {
    setMode: (m) => set({ mode: m }),

    setCurrent: (v) => set({ current: v }),

    resetDraft: () => set({ draft: initialDraft }),

    hydrateDraftFromCurrent: () => {
      const cur = get().current;
      if (!cur) return;
      const { experienceId: _id, ...rest } = cur;
      set({ draft: rest });
    },

    setDraftField: (key, value) =>
      set((s) => ({ draft: { ...s.draft, [key]: value } })),

    setDefaultExperienceId: (experienceId) =>
      set({ defaultExperience: { experienceId } }),

    toggleDraftDefault: () => {
      const { draft } = get();

      const next = !draft.isDefault;

      set({ draft: { ...draft, isDefault: next } });
    },

    setCurrentDefault: (isDefault) => {
      const { current, draft } = get();
      if (current) {
        set({
          current: { ...current, isDefault },
          draft: { ...draft, isDefault },
        });
      }
    },

    setIsSubmitting: (v) => set({ isSubmitting: v }),
  },
}));

export { initialDraft };
