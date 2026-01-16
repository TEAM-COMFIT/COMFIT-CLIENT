import * as styles from "./toggle.css";

import type { ButtonHTMLAttributes } from "react";

interface ToggleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  checked: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

const Toggle = ({
  checked,
  onCheckedChange,
  disabled,
  className,
  onClick,
  ...props
}: ToggleProps) => {
  const handleToggleClick: ToggleProps["onClick"] = (event) => {
    onClick?.(event);
    if (event.defaultPrevented || disabled) return;

    onCheckedChange?.(!checked);
  };

  const mergedClassName =
    `${styles.toggleTrack} ${styles.toggleTrackState[checked ? "on" : "off"]} ${className ?? ""}`.trim();

  return (
    <button
      {...props}
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={handleToggleClick}
      className={mergedClassName}
    >
      <span
        aria-hidden="true"
        className={`${styles.toggleThumb} ${styles.toggleThumbState[checked ? "on" : "off"]}`}
      />
    </button>
  );
};

export { Toggle };
