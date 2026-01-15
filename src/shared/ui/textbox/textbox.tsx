import * as styles from "./textbox.css";

import type { ReactNode } from "react";

type TextboxType = "medium" | "large";

interface TextboxProps {
  type: TextboxType;
  children: ReactNode;
}

const Textbox = ({ type, children }: TextboxProps) => {
  return (
    <div className={`${styles.boxBase} ${styles.boxPadding[type]}`}>
      {children}
    </div>
  );
};

export { Textbox };
