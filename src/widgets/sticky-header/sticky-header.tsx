import { themeVars } from "@/app/styles";
import { IconCheck } from "@/shared/assets/icons";

import * as styles from "./sticky-header.css";

import type { ReactNode } from "react";

interface StickyHeaderProps {
  isDefault: boolean; // 기본 경험 설정
  onToggle: () => void; // 기본 경험 설정 토글 액션
  rightSlot: ReactNode; // 오른쪽 섹션
}

export const StickyHeader = ({
  isDefault,
  onToggle,
  rightSlot,
}: StickyHeaderProps) => {
  return (
    <header className={styles.layout}>
      <div className={styles.header}>
        {/** 기본 경험 설정 버튼 */}
        <button
          className={styles.button({ isDefault })}
          onClick={onToggle}
          aria-pressed={isDefault}
        >
          <IconCheck
            color={isDefault ? themeVars.color.blue600 : themeVars.color.white}
          />
          {isDefault ? "기본 경험 해제" : "기본 경험 설정"}
        </button>
        <div className={styles.right}>{rightSlot}</div>
      </div>
    </header>
  );
};
