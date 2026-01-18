import { useCallback, useMemo, useRef } from "react";

import { IconCancel, IconSearch } from "@/shared/assets/icons";
import { Tag } from "@shared/ui/tag/tag";

import * as s from "./search-auto-complete.css";
import { useAutocomplete } from "./use-auto-complete";

import type {
  FetchItems,
  SearchAutocompleteVariant,
  SearchItem,
} from "./types";

interface SearchAutocompleteProps {
  variant: SearchAutocompleteVariant;
  placeholder: string;
  disabled?: boolean;

  fetchItems: FetchItems;

  onSelect?: (item: SearchItem) => void;
  onClear?: () => void;

  maxItems?: number;
  showSelectedTag?: boolean;
  minQueryLength?: number;

  selectedItem?: SearchItem | null;
  setSelectedItem?: (item: SearchItem | null) => void;

  ariaLabel?: string;
}

export const SearchAutocomplete = ({
  variant,
  placeholder,
  disabled = false,
  fetchItems,
  onSelect,
  onClear,
  maxItems = 4,
  showSelectedTag = true,
  minQueryLength = 2,

  selectedItem,
  setSelectedItem,
}: SearchAutocompleteProps) => {
  const {
    query,
    setQuery,
    isOpen,
    open,
    close,

    state,
    items,
    highlightedIndex,
    setHighlightedIndex,

    selected: innerSelected,
    selectItem: innerSelectItem,
    clearSelected: innerClearSelected,

    errorMessage,
    onKeyDown,
  } = useAutocomplete({
    fetchItems,
    debounceMs: 300,
    minQueryLength,
    maxItems,
  });

  const selected = selectedItem ?? innerSelected;

  const inputRef = useRef<HTMLInputElement | null>(null);

  const isLocked = Boolean(selected) && showSelectedTag;
  const hasValue = query.trim().length > 0;

  const rightIconMode = useMemo<"search" | "clear">(() => {
    if (isLocked) return "search";
    return hasValue ? "clear" : "search";
  }, [hasValue, isLocked]);

  const inputValue = useMemo(() => {
    if (showSelectedTag) return selected ? "" : query;
    return selected ? selected.label : query;
  }, [query, selected, showSelectedTag]);

  const inputPlaceholder = useMemo(() => {
    if (showSelectedTag) return selected ? "" : placeholder;
    return placeholder;
  }, [placeholder, selected, showSelectedTag]);

  const handleSelect = useCallback(
    (item: SearchItem) => {
      innerSelectItem(item);
      setSelectedItem?.(item);
      onSelect?.(item);
    },
    [innerSelectItem, onSelect, setSelectedItem]
  );

  const handleClear = useCallback(() => {
    setQuery("");
    innerClearSelected();
    setSelectedItem?.(null);

    close();
    onClear?.();
    window.setTimeout(() => inputRef.current?.focus(), 0);
  }, [setQuery, innerClearSelected, close, onClear, setSelectedItem]);

  const isOnboarding = variant === "onboarding";

  return (
    <div className={s.root}>
      <div className={[s.wrapper, s.wrapperVariant[variant]].join(" ")}>
        <div className={[s.inputShell, s.inputShellVariant[variant]].join(" ")}>
          {showSelectedTag && selected && (
            <Tag type="primary" xlabel onCancel={handleClear}>
              {selected.label}
            </Tag>
          )}

          <input
            ref={inputRef}
            className={s.input}
            placeholder={inputPlaceholder}
            value={inputValue}
            disabled={disabled || isLocked}
            onChange={(e) => {
              if (disabled || isLocked) return;

              const next = e.target.value;
              setQuery(next);

              if (next.trim().length >= minQueryLength) open();
              else close();
            }}
            onFocus={() => {
              if (disabled || isLocked) return;
              if (query.trim().length >= minQueryLength) open();
            }}
            onBlur={() => {
              window.setTimeout(() => close(), 120);
            }}
            onKeyDown={onKeyDown}
          />

          <button
            type="button"
            className={[s.iconButton, s.iconButtonVariant[variant]].join(" ")}
            disabled={disabled}
            onClick={() => {
              if (disabled) return;
              if (isLocked) return;

              if (rightIconMode === "clear") handleClear();
              else {
                inputRef.current?.focus();
                if (query.trim().length >= minQueryLength) open();
              }
            }}
            aria-label={rightIconMode === "clear" ? "지우기" : "검색"}
          >
            {rightIconMode === "clear" ? <IconCancel /> : <IconSearch />}
          </button>
        </div>

        {/* 드롭다운 */}
        {isOpen && !disabled && !isLocked && (
          <div className={[s.list, s.listTopVariant[variant]].join(" ")}>
            {state === "error" && (
              <div className={s.emptyBox}>
                {errorMessage ?? "기업 검색에 실패했습니다. 다시 시도해주세요."}
              </div>
            )}

            {state === "loading" && (
              <div className={s.emptyBox}>검색 중...</div>
            )}

            {state === "success" && items.length === 0 && (
              <div className={s.emptyBox}>
                해당 키워드가 포함된 결과가 없습니다.
              </div>
            )}

            {state === "success" &&
              items.map((it, idx) => {
                const isHighlighted = idx === highlightedIndex;

                return (
                  <div
                    key={it.id}
                    tabIndex={isHighlighted ? 0 : -1}
                    className={[
                      s.item,
                      isHighlighted
                        ? isOnboarding
                          ? s.onboardingItemState.hover
                          : s.itemState.hover
                        : isOnboarding
                          ? s.onboardingItemState.default
                          : s.itemState.default,
                      isOnboarding ? s.onboardingItemPressed : "",
                    ].join(" ")}
                    onMouseEnter={() => setHighlightedIndex(idx)}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      handleSelect(it);
                    }}
                  >
                    {it.label}
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
};
