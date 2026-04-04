import { StickyHeader } from "@/widgets";

import * as s from "./experience-layout.css";

import type { ReactNode } from "react";

interface ExperienceLayoutProps {
  isDefault: boolean;
  onToggle: () => void;
  headerRightContent?: ReactNode;
  children: ReactNode;
}

const ExperienceLayout = ({
  isDefault,
  onToggle,
  headerRightContent,
  children,
}: ExperienceLayoutProps) => {
  return (
    <main className={s.page}>
      <StickyHeader
        isDefault={isDefault}
        onToggle={onToggle}
        rightSlot={headerRightContent}
      />

      <section className={s.outerSection}>
        <div className={s.panel}>{children}</div>
      </section>
    </main>
  );
};

export { ExperienceLayout };
