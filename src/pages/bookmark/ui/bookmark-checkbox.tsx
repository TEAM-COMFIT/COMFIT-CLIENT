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
    <input
      type="checkbox"
      className={styles.checkbox}
      checked={checked}
      onChange={(event) => onCheckedChange(event.target.checked)}
      aria-label={ariaLabel}
    />
  );
};

export { BookmarkCheckbox };
