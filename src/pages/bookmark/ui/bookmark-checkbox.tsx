import * as styles from "./bookmark-checkbox.css";

interface BookmarkCheckboxProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  ariaLabel: string;
  disabled?: boolean;
}

const BookmarkCheckbox = ({
  checked,
  onCheckedChange,
  ariaLabel,
  disabled = false,
}: BookmarkCheckboxProps) => {
  return (
    <input
      type="checkbox"
      className={styles.checkbox}
      checked={checked}
      disabled={disabled}
      onChange={(event) => onCheckedChange(event.target.checked)}
      aria-label={ariaLabel}
    />
  );
};

export { BookmarkCheckbox };
