import { IconQuestion, IconInformation } from "@/shared/assets/icons";

import * as styles from "./tooltip.css";

import type { ReactNode } from "react";

export type TooltipType = "help" | "guide";

interface TooltipProps {
  type: TooltipType;
  label: string;
  children: ReactNode;
}

const ICON_BY_TYPE = {
  help: IconQuestion,
  guide: IconInformation,
} as const;

const Tooltip = ({ type, label, children }: TooltipProps) => {
  const Icon = ICON_BY_TYPE[type];

  return (
    <div className={styles.wrapper}>
      <span className={styles.trigger}>
        <Icon className={`${styles.icon} ${styles.iconSize[type]}`} />
        <span>{label}</span>
      </span>

      <div
        role="tooltip"
        className={`${styles.tooltipBox} ${styles.tooltipGap[type]} ${styles.hoverArea} ${styles.tooltipBoxSize[type]}`}
      >
        {children}
      </div>
    </div>
  );
};

export { Tooltip };
