import { IconSearch } from "@/shared/assets/icons";

import * as styles from "./search.css";
import { useSearch } from "./use-search";

export type SearchSize = "full" | "large" | "medium" | "small";

export interface SearchProps {
  size?: SearchSize;
  placeholder?: string;

  // controlled
  value?: string;
  onChange?: (value: string) => void;

  // uncontrolled
  defaultValue?: string;

  // 엔터 / 아이콘 클릭 시 실행
  onSearch?: (value: string) => void;

  // 접근성
  inputAriaLabel?: string;
}

export const Search = ({
  size = "full",
  placeholder = "Search",
  value,
  defaultValue,
  onChange,
  onSearch,
  inputAriaLabel = "검색어 입력",
}: SearchProps) => {
  const { value: currentValue, actions } = useSearch({
    value,
    defaultValue,
    onChange,
    onSearch,
  });

  return (
    <div className={styles.container({ size })}>
      <input
        className={styles.input}
        value={currentValue}
        onChange={actions.onInputChange}
        onKeyDown={actions.onKeyDown}
        placeholder={placeholder}
        aria-label={inputAriaLabel}
      />

      <button
        type="button"
        className={styles.iconButton}
        onClick={actions.onClickIcon}
        aria-label="검색"
      >
        <IconSearch className={styles.icon} aria-hidden="true" />
      </button>
    </div>
  );
};
