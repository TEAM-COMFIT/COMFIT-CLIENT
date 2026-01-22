import type React from "react";

export type SearchAutocompleteVariant =
  | "onboarding"
  | "home"
  | "matchingExperienceList";

export type SearchItem = {
  id: string;
  name: string;
};

export type FetchItems = (query: string) => Promise<SearchItem[]>;

export type AutocompleteState = "idle" | "loading" | "success" | "error";

export type UseAutocompleteOptions = {
  fetchItems: FetchItems;
  debounceMs?: number;
  minQueryLength?: number;
  maxItems?: number;
};

export type UseAutocompleteReturn = {
  query: string;
  setQuery: (v: string) => void;

  isOpen: boolean;
  open: () => void;
  close: () => void;

  state: AutocompleteState;
  items: SearchItem[];
  highlightedIndex: number;
  setHighlightedIndex: (idx: number) => void;

  selected: SearchItem | null;
  selectItem: (item: SearchItem) => void;
  clearSelected: () => void;

  errorMessage?: string;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};
