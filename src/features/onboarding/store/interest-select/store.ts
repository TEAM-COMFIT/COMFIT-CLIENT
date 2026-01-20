import { create } from "zustand";

export type InterestVariant = "industry" | "job";
export type Priority = 1 | 2 | 3;

type State = {
  industry: Record<Priority, string | null>;
  job: Record<Priority, string | null>;
};

type Actions = {
  setSelection: (params: {
    variant: InterestVariant;
    priority: Priority;
    value: string | null;
  }) => void;
  resetVariant: (variant: InterestVariant) => void;
};

const initialRankState: Record<Priority, string | null> = {
  1: null,
  2: null,
  3: null,
};

export const useInterestSelectStore = create<State & { actions: Actions }>(
  (set) => ({
    industry: { ...initialRankState },
    job: { ...initialRankState },

    actions: {
      setSelection: ({ variant, priority, value }) => {
        set((prev) => ({
          ...prev,
          [variant]: {
            ...prev[variant],
            [priority]: value,
          },
        }));
      },

      resetVariant: (variant) => {
        set((prev) => ({
          ...prev,
          [variant]: { ...initialRankState },
        }));
      },
    },
  })
);
