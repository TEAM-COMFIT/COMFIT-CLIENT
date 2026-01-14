import { IconSearch } from "@/shared/assets/icons";

import * as styles from "./search.css";
import { useSearch } from "./use-search";

import type { SearchProps } from "./search.types";

export const Search = ({
  size = "full",
  placeholder = "Search",
  disabled = false,
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
    <div className={styles.container({ size, disabled })}>
      <input
        className={styles.input}
        value={currentValue}
        onChange={actions.onInputChange}
        onKeyDown={actions.onKeyDown}
        placeholder={placeholder}
        disabled={disabled}
        aria-label={inputAriaLabel}
      />

      <button
        type="button"
        className={styles.iconButton}
        onClick={disabled ? undefined : actions.onClickIcon}
        aria-label="검색"
        disabled={disabled}
      >
        <IconSearch className={styles.icon} aria-hidden="true" />
      </button>
    </div>
  );
};
