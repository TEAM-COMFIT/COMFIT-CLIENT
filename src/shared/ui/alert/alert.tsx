import {
  CancelIcon,
  CheckIcon,
  CloseIcon,
  ExclamationIcon,
  InfoIcon,
} from "@/shared/assets/icons";

import * as styles from "./alert.css";

import type { AlertProps } from "./alert.types";

const ICON_BY_VARIANT = {
  warning: ExclamationIcon,
  info: InfoIcon,
  success: CheckIcon,
  error: CancelIcon,
} as const;

export const Alert = ({ variant, title, description, onClose }: AlertProps) => {
  const Icon = ICON_BY_VARIANT[variant];

  return (
    <div className={styles.alertViewport}>
      <div
        className={styles.alertRoot({ variant })}
        role="alert"
        aria-live="polite"
      >
        <Icon className={styles.leadingIcon({ variant })} aria-hidden="true" />

        <div className={styles.textSection}>
          <p className={styles.title}>{title}</p>
          <p className={styles.description}>{description}</p>
        </div>

        {onClose && (
          <button
            type="button"
            className={styles.closeButton}
            onClick={onClose}
            aria-label="알림 닫기"
          >
            <CloseIcon className={styles.closeIcon} aria-hidden="true" />
          </button>
        )}
      </div>
    </div>
  );
};
