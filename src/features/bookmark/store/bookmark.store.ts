import { create } from "zustand";

interface BookmarkState {
  bookmarkOverrides: Record<number, boolean>;
  setBookmarkOverride: (companyId: number, isBookmarked: boolean) => void;
  clearBookmarkOverride: (companyId: number) => void;
}

export const useBookmarkStore = create<BookmarkState>((set) => ({
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
}));
