import CancelIcon from "@icons/icon_cancel.svg?react";

import { tag, cancelIcon } from "./tag.css";

import type { ReactNode } from "react";

export type TagVariant = "label" | "xlabel";

export interface TagProps {
  children: ReactNode;
  type?: TagVariant;
  onCancel?: () => void; // TODO: 추후 동작 연결
}

const Tag = ({ children, type = "label", onCancel }: TagProps) => {
  return (
    <div className={tag({ type })}>
      {children}

      {type === "xlabel" && (
        // <span
        //   className={cancelIcon}
        //   onClick={(e) => {
        //     e.stopPropagation();
        //     onCancel?.();
        //   }}
        // >
        //   <CancelIcon className={cancelIcon} />
        // </span>

        <CancelIcon
          className={cancelIcon}
          onClick={(e) => {
            e.stopPropagation();
            onCancel?.();
          }}
        />
      )}
    </div>
  );
};

export default Tag;
