import CancelIcon from "@icons/icon_cancel.svg?react";

import { tag, cancelIcon } from "./tag.css";

import type { ReactNode } from "react";

export type TagVariant = "primary" | "secondary" | "xlabel" | "register";

export interface TagProps {
  children: ReactNode;
  type?: TagVariant;
  onCancel?: () => void; // TODO: 추후 동작 연결
}

const Tag = ({ children, type = "primary", onCancel }: TagProps) => {
  return (
    <div className={tag({ type })}>
      {children}

      {type === "xlabel" && (
        <button
          type="button"
          aria-label="`태그 삭제"
          onClick={(e) => {
            e.stopPropagation();
            onCancel?.();
          }}
          className={cancelIcon}
        >
          <CancelIcon />
        </button>
      )}
    </div>
  );
};

export { Tag };
