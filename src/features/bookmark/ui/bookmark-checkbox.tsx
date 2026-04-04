import {
  CheckboxSmallDisabled,
  CheckboxSmallPressed,
} from "@/shared/assets/icons";

import * as styles from "./bookmark-checkbox.css";

interface BookmarkCheckboxProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  ariaLabel: string;
}

const BookmarkCheckbox = ({
  checked,
  onCheckedChange,
  ariaLabel,
}: BookmarkCheckboxProps) => {
  return (
    <label className={styles.checkbox}>
      <input
        type="checkbox"
        className={styles.input}
        checked={checked}
        onChange={(event) => onCheckedChange(event.target.checked)}
        aria-label={ariaLabel}
      />
      <span className={styles.icon} aria-hidden="true">
        {checked ? (
          <CheckboxSmallPressed className={styles.iconSvg} />
        ) : (
          <CheckboxSmallDisabled className={styles.iconSvg} />
        )}
      </span>
    </label>
  );
};

export { BookmarkCheckbox };
