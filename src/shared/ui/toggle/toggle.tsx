import * as styles from "./toggle.css";

import type { ButtonHTMLAttributes } from "react";

interface ToggleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  checked: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

const Toggle = ({ checked, onCheckedChange, ...props }: ToggleProps) => {
  const handleToggleClick: ToggleProps["onClick"] = (event) => {
    props.onClick?.(event);
    if (event.defaultPrevented || props.disabled) return;

    onCheckedChange?.(!checked);
  };

  const mergedClassName =
    `${styles.toggleTrack({ checked })} ${props.className ?? ""}`.trim();

  return (
    <button
      {...props}
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={handleToggleClick}
      className={mergedClassName}
    >
      <span aria-hidden="true" className={styles.toggleThumb({ checked })} />
    </button>
  );
};

export { Toggle };
