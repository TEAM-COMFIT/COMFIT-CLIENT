import {
  startTransition,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import type {
  SearchItem,
  UseAutocompleteOptions,
  UseAutocompleteReturn,
} from "./types";

function useDebouncedValue<T>(value: T, delay: number) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const id = window.setTimeout(() => setDebounced(value), delay);
    return () => window.clearTimeout(id);
  }, [value, delay]);

  return debounced;
}

export function useAutocomplete(
  options: UseAutocompleteOptions
): UseAutocompleteReturn {
  const {
    fetchItems,
    debounceMs = 300,
    minQueryLength = 2,
    maxItems = 4,
  } = options;

  const effectiveMaxItems = Math.min(maxItems, 4);

  const [query, setQuery] = useState("");
  const debouncedQuery = useDebouncedValue(query, debounceMs);

  const [isOpen, setIsOpen] = useState(false);

  const [items, setItems] = useState<SearchItem[]>([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const [selected, setSelected] = useState<SearchItem | null>(null);

  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );
  const [isFetching, setIsFetching] = useState(false);

  const requestSeq = useRef(0);
  const lastRequestedQueryRef = useRef<string>("");

  const selectedCompanyIdRef = useRef<string | null>(null);

  const queryRef = useRef(query);
  useEffect(() => {
    queryRef.current = query;
  }, [query]);

  const wasOpenRef = useRef(false);
  useEffect(() => {
    wasOpenRef.current = isOpen;
  }, [isOpen]);

  const open = useCallback(() => {
    lastRequestedQueryRef.current = "";
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    requestSeq.current += 1;

    const wasOpen = wasOpenRef.current;
    const currentQuery = queryRef.current.trim();

    const isTypingClose = currentQuery.length < minQueryLength;

    if (wasOpen && !isTypingClose && selected) {
      setQuery(selected.label);
    }

    setIsOpen(false);
    setItems([]);
    setHighlightedIndex(-1);
    setErrorMessage(undefined);
    setIsFetching(false);
  }, [minQueryLength, selected]);

  const clearSelected = useCallback(() => {
    setSelected(null);
    selectedCompanyIdRef.current = null;
  }, []);

  const selectItem = useCallback(
    (item: SearchItem) => {
      setSelected(item);
      selectedCompanyIdRef.current = item.id;
      setQuery(item.label);
      close();
    },
    [close]
  );

  const canSearch = useMemo(() => {
    return debouncedQuery.trim().length >= minQueryLength;
  }, [debouncedQuery, minQueryLength]);

  const state = useMemo<"idle" | "loading" | "success" | "error">(() => {
    if (!isOpen) return "idle";
    if (!canSearch) return "idle";
    if (isFetching) return "loading";
    if (errorMessage) return "error";
    return "success";
  }, [canSearch, errorMessage, isFetching, isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    if (!canSearch) return;

    const trimmedQuery = debouncedQuery.trim();

    if (lastRequestedQueryRef.current === trimmedQuery) return;
    lastRequestedQueryRef.current = trimmedQuery;

    const seq = ++requestSeq.current;

    startTransition(() => {
      setIsFetching(true);
      setErrorMessage(undefined);
    });

    fetchItems(trimmedQuery)
      .then((res) => {
        if (seq !== requestSeq.current) return;

        const nextItems = res;

        startTransition(() => {
          setItems(nextItems);
          setHighlightedIndex(nextItems.length ? 0 : -1);
        });
      })
      .catch(() => {
        if (seq !== requestSeq.current) return;

        startTransition(() => {
          setItems([]);
          setHighlightedIndex(-1);
          setErrorMessage("기업 검색에 실패했습니다. 다시 시도해주세요.");
        });
      })
      .finally(() => {
        if (seq !== requestSeq.current) return;

        startTransition(() => {
          setIsFetching(false);
        });
      });
  }, [canSearch, debouncedQuery, fetchItems, isOpen, effectiveMaxItems]);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (!isOpen) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setHighlightedIndex((prev) => {
          if (!items.length) return -1;
          return Math.min(prev + 1, items.length - 1);
        });
        return;
      }

      if (e.key === "ArrowUp") {
        e.preventDefault();
        setHighlightedIndex((prev) => {
          if (!items.length) return -1;
          return Math.max(prev - 1, 0);
        });
        return;
      }

      if (e.key === "Enter") {
        if (highlightedIndex >= 0 && highlightedIndex < items.length) {
          e.preventDefault();
          selectItem(items[highlightedIndex]);
        }
        return;
      }

      if (e.key === "Escape") {
        e.preventDefault();
        close();
      }
    },
    [close, highlightedIndex, isOpen, items, selectItem]
  );

  return {
    query,
    setQuery,

    isOpen,
    open,
    close,

    state,
    items,
    highlightedIndex,
    setHighlightedIndex,

    selected,
    selectItem,
    clearSelected,

    errorMessage,
    onKeyDown,
  };
}
