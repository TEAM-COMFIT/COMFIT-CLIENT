import { IconSearch } from "@/shared/assets/icons";

import * as styles from "./search.css";
import { useSearch } from "./use-search";

import type { SearchProps } from "./search.types";

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
