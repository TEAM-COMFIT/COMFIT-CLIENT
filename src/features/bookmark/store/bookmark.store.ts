import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface BookmarkState {
  bookmarkOverrides: Record<number, boolean>;
  setBookmarkOverride: (companyId: number, isBookmarked: boolean) => void;
  clearBookmarkOverride: (companyId: number) => void;
}

export const useBookmarkStore = create(
  persist<BookmarkState>(
    (set) => ({
      bookmarkOverrides: {},
      setBookmarkOverride: (companyId, isBookmarked) =>
        set((state) => ({
          bookmarkOverrides: {
            ...state.bookmarkOverrides,
            [companyId]: isBookmarked,
          },
        })),
      clearBookmarkOverride: (companyId) =>
        set((state) => {
          const nextOverrides = { ...state.bookmarkOverrides };
          delete nextOverrides[companyId];

          return {
            bookmarkOverrides: nextOverrides,
          };
        }),
    }),
    {
      name: "bookmark",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
