import { useState, useMemo } from "react";

import { IconSearch, IconCancel } from "@/shared/assets/icons";
import { useDebounce } from "@/shared/model";
import { Button, Tag } from "@/shared/ui";

import * as styles from "./matching-auto-complete.css";
import { MOCK_AUTOCOMPLETE } from "./mock";

interface MatchingAutoCompleteProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  onSearch?: (selectedValue?: string) => void;
}

const MatchingAutoComplete = ({
  value,
  onChange,
  placeholder = "기업명을 입력해주세요",
  onSearch,
}: MatchingAutoCompleteProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const debouncedValue = useDebounce(value, 300);

  const results = useMemo(() => {
    if (!value || value.length < 2) return [];

    if (debouncedValue.length >= 2) {
      return MOCK_AUTOCOMPLETE.filter((item) =>
        item.toLowerCase().includes(debouncedValue.toLowerCase())
      );
    }
    return [];
  }, [debouncedValue, value]); // value를 의존성에 추가

  const hasNoResult =
    value.length >= 2 && debouncedValue.length >= 2 && results.length === 0;

  const handleClear = () => {
    onChange(""); // 입력값 즉시 비움 -> useMemo가 즉시 [] 반환
    setSelectedItem(null);
    setIsFocused(true);
  };

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    onChange(item);
    setIsFocused(false); // 아이템 선택 시에는 메뉴를 닫기 위해 포커스 해제
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
            className={[
              styles.input,
              isFocused ? styles.inputFocused : "",
            ].join(" ")}
            value={value}
            placeholder={placeholder}
            autoFocus={isFocused} // 태그 삭제 후 바로 입력 가능하도록 추가
            onFocus={() => setIsFocused(true)}
            onBlur={() => {
              // 메뉴 클릭 등을 고려해 지연 후 닫기
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
              aria-hidden
            />
          ) : (
            <IconSearch className={styles.icon} aria-hidden />
          ))}

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
