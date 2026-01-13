import { RefreshIcon } from "@/shared/assets/icons";

import * as styles from "./refresh-button.css";

import type { ButtonHTMLAttributes } from "react";

type RefreshButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const RefreshButton = (props: RefreshButtonProps) => {
  return (
    <button className={styles.buttonWrapper} {...props}>
      <RefreshIcon />
      <span>새로고침</span>
    </button>
  );
};

export { RefreshButton };
