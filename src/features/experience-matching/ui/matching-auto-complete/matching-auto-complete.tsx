import { useState, useEffect, useRef } from "react";

import { IconSearch, IconCancel } from "@/shared/assets/icons";
import { useDebounce } from "@/shared/model";
import { Button, Tag } from "@/shared/ui";

import * as styles from "./matching-auto-complete.css";

interface MatchingAutoCompleteProps {
  value: string; // 실시간 입력값
  onChange: (value: string) => void; // 실시간 입력값 변경 함수
  results: string[]; // 부모가 API로 받아온 검색 결과 리스트
  onDebounceChange: (debouncedValue: string) => void; // 디바운스된 값을 부모에게 전달
  placeholder?: string;
  onSearch?: (selectedValue: string) => void;
}

const MatchingAutoComplete = ({
  value,
  onChange,
  results,
  onDebounceChange,
  placeholder = "기업명을 입력해주세요",
  onSearch,
}: MatchingAutoCompleteProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // 내부 디바운스 로직: 300ms 후 부모의 검색 키워드 상태를 변경
  const debouncedValue = useDebounce(value, 300);

  useEffect(() => {
    onDebounceChange(debouncedValue); // 부모에게 전달하여 API 호출 유도
  }, [debouncedValue, onDebounceChange]);

  // 검색 결과가 없는 상태 정의 (2자 이상 입력 & API 결과가 0개)
  const hasNoResult =
    value.length >= 2 && debouncedValue.length >= 2 && results.length === 0;

  const handleClear = () => {
    onChange("");
    setSelectedItem(null);
    setIsFocused(true);
    onDebounceChange(""); // 부모 검색어도 초기화
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    onChange(item);
    setIsFocused(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputWrapper}>
        {selectedItem ? (
          <div className={styles.tagWrapper}>
            <Tag type="primary" xlabel onCancel={handleClear}>
              {selectedItem}
            </Tag>
          </div>
        ) : (
          <input
            ref={inputRef}
            className={[
              styles.input,
              isFocused ? styles.inputFocused : "",
            ].join(" ")}
            value={value}
            placeholder={placeholder}
            onFocus={() => setIsFocused(true)}
            onBlur={() => {
              setTimeout(() => {
                if (value === "" && !selectedItem) setIsFocused(false);
              }, 200);
            }}
            onChange={(e) => onChange(e.target.value)}
          />
        )}

        {!selectedItem &&
          (isFocused ? (
            <IconCancel
              className={`${styles.icon} ${styles.cancelIcon}`}
              onMouseDown={(e) => {
                e.preventDefault();
                handleClear();
              }}
            />
          ) : (
            <IconSearch className={styles.icon} aria-hidden />
          ))}

        {/* 자동완성 메뉴: 부모가 내려준 results를 사용 */}
        {!selectedItem && isFocused && (results.length > 0 || hasNoResult) && (
          <div className={styles.menu}>
            {results.length > 0 ? (
              <ul>
                {results.map((item, index) => (
                  <li
                    key={`${item}-${index}`}
                    className={styles.menuItem}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      handleItemClick(item);
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <div className={styles.noResult}>검색 결과가 없습니다</div>
            )}
          </div>
        )}
      </div>

      {(isFocused || selectedItem) && (
        <Button
          size="medium"
          disabled={!selectedItem}
          onClick={() => onSearch?.(selectedItem || value)}
        >
          선택하기
        </Button>
      )}
    </div>
  );
};

export { MatchingAutoComplete };
