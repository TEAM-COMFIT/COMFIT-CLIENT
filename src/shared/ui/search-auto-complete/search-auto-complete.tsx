import { useMemo, useRef, useState } from "react";

import { IconCancle, IconSearch } from "@/shared/assets/icons";
import { Tag } from "@shared/ui/tag/tag";

import * as s from "./search-auto-complete.css";
import { useAutocomplete } from "./use-auto-complete";

import type {
  FetchItems,
  SearchAutocompleteVariant,
  SearchItem,
} from "./types";

type Props = {
  variant: SearchAutocompleteVariant;
  placeholder: string;
  disabled?: boolean;

  fetchItems: FetchItems;

  onSelect?: (item: SearchItem) => void;
  onClear?: () => void;

  maxItems?: number;
  showSelectedTag?: boolean;
  minQueryLength?: number;
};

export const SearchAutocomplete = ({
  variant,
  placeholder,
  disabled = false,
  fetchItems,
  onSelect,
  onClear,
  maxItems = 4,
  minQueryLength = 2,
}: Props) => {
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

    selected,
    selectItem,
    clearSelected,

    errorMessage,
    onKeyDown,
  } = useAutocomplete({
    fetchItems,
    debounceMs: 300,
    minQueryLength,
    maxItems,
  });

  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const isLocked = Boolean(selected);
  const hasValue = query.trim().length > 0;

  const rightIconMode = useMemo<"search" | "clear">(() => {
    if (isLocked) return "search";
    return hasValue ? "clear" : "search";
  }, [hasValue, isLocked]);

  const handleSelect = (item: SearchItem) => {
    selectItem(item);
    onSelect?.(item);
  };

  const handleClear = () => {
    setQuery("");
    clearSelected();
    close();
    onClear?.();
    window.setTimeout(() => inputRef.current?.focus(), 0);
  };

  const shouldApplyFocusStyle = variant !== "onboarding";
  const isOnboarding = variant === "onboarding";

  return (
    <div className={s.root}>
      <div className={[s.wrapper, s.wrapperVariant[variant]].join(" ")}>
        <div
          className={[
            s.inputShell,
            s.inputShellVariant[variant],
            isFocused && shouldApplyFocusStyle ? s.inputShellFocused : "",
          ].join(" ")}
        >
          {selected && <Tag>{selected.label}</Tag>}

          <input
            ref={inputRef}
            className={s.input}
            placeholder={selected ? "" : placeholder}
            value={selected ? "" : query}
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
              setIsFocused(true);

              if (query.trim().length >= minQueryLength) open();
            }}
            onBlur={() => {
              setIsFocused(false);
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
            aria-label={rightIconMode === "clear" ? "clear" : "search"}
          >
            {rightIconMode === "clear" ? <IconCancle /> : <IconSearch />}
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
