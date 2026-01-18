import * as styles from "./textbox.css";

import type { ReactNode } from "react";

type TextboxType = "medium" | "large";

interface TextboxProps {
  type: TextboxType;
  children: ReactNode;
  className?: string;
}

const Textbox = ({ type, children, className }: TextboxProps) => {
  return (
    <div
      className={`${styles.boxBase} ${styles.boxPadding[type]} ${className ?? ""}`}
    >
      {children}
    </div>
  );
};

export { Textbox };
