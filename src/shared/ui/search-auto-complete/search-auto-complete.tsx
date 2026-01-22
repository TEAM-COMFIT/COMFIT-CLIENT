import { useCallback, useRef, useState, useEffect } from "react";

import { IconCancel, IconSearch } from "@/shared/assets/icons";
import { Tag } from "@/shared/ui/tag/tag";

import * as s from "./search-auto-complete.css";

import type { SearchItem, SearchAutocompleteVariant } from "./types";

interface SearchAutocompleteProps {
  variant: SearchAutocompleteVariant;
  placeholder: string;
  disabled?: boolean;
  items: SearchItem[] | [];
  isLoading?: boolean;
  onQueryChange: (query: string) => void;
  onSelect?: (item: SearchItem) => void;
  onClear?: () => void;
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
  items,
  isLoading = false,
  onQueryChange,
  onSelect,
  onClear,
  showSelectedTag = true,
  minQueryLength = 2,
  selectedItem,
  setSelectedItem,
  ariaLabel,
}: SearchAutocompleteProps) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);

  const selected = selectedItem ?? null;
  const isLocked = Boolean(selected) && showSelectedTag;

  const inputValue = showSelectedTag
    ? selected
      ? ""
      : query
    : selected
      ? selected.name
      : query;
  const inputPlaceholder = showSelectedTag && selected ? "" : placeholder;

  // 컴포넌트 언마운트 시 타이머 정리
  useEffect(() => {
    return () => {
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled || isLocked) return;
    const nextValue = e.target.value;

    // 1. UI용 로컬 상태는 즉시 업데이트 (타이핑 버벅임 방지)
    setQuery(nextValue);

    // 2. 이전에 예약된 디바운스 타이머 취소
    if (debounceTimer.current) clearTimeout(debounceTimer.current);

    if (nextValue.trim().length >= minQueryLength) {
      setIsOpen(true);
      // 3. 300ms 후에 부모의 쿼리(API 호출용) 상태 업데이트
      debounceTimer.current = setTimeout(() => {
        onQueryChange(nextValue);
      }, 300);
    } else {
      setIsOpen(false);
      onQueryChange(""); // 글자 수가 적어지면 쿼리 초기화
    }
  };

  const handleSelect = useCallback(
    (item: SearchItem) => {
      setSelectedItem?.(item);
      onSelect?.(item);
      setIsOpen(false);
      setQuery("");
      onQueryChange(""); // 선택 후 쿼리 초기화
    },
    [onSelect, setSelectedItem, onQueryChange]
  );

  const handleClear = useCallback(() => {
    setQuery("");
    onQueryChange("");
    setSelectedItem?.(null);
    setIsOpen(false);
    onClear?.();
    window.setTimeout(() => inputRef.current?.focus(), 0);
  }, [onQueryChange, onClear, setSelectedItem]);

  return (
    <div className={s.root}>
      <div className={[s.wrapper, s.wrapperVariant[variant]].join(" ")}>
        <div className={[s.inputShell, s.inputShellVariant[variant]].join(" ")}>
          {showSelectedTag && selected && (
            <Tag type="primary" xlabel onCancel={handleClear}>
              {selected.name}
            </Tag>
          )}

          <input
            ref={inputRef}
            className={s.input}
            placeholder={inputPlaceholder}
            value={inputValue}
            disabled={disabled || isLocked}
            onChange={handleInputChange}
            onFocus={() => {
              if (
                !disabled &&
                !isLocked &&
                query.trim().length >= minQueryLength
              )
                setIsOpen(true);
            }}
            onBlur={() => window.setTimeout(() => setIsOpen(false), 150)}
            aria-label={ariaLabel ?? placeholder}
          />

          <button
            type="button"
            className={s.iconButton}
            onClick={() =>
              selected ? handleClear() : inputRef.current?.focus()
            }
          >
            {selected ? (
              <IconCancel className={s.icon({ selected: !!selected })} />
            ) : (
              <IconSearch className={s.icon({ selected: !!selected })} />
            )}
          </button>
        </div>

        {isOpen && !disabled && !isLocked && (
          <div className={[s.list, s.listTopVariant[variant]].join(" ")}>
            {isLoading ? (
              <div className={s.emptyBox}>검색 중...</div>
            ) : items.length === 0 ? (
              <div className={s.emptyBox}>결과가 없습니다.</div>
            ) : (
              items.map((it, idx) => (
                <button
                  key={it.id}
                  type="button"
                  className={s.item({
                    mode: variant === "onboarding" ? "onboarding" : "normal",
                    state: idx === highlightedIndex ? "hover" : "default",
                  })}
                  onMouseEnter={() => setHighlightedIndex(idx)}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    handleSelect(it);
                  }}
                >
                  {it.name}
                </button>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};
