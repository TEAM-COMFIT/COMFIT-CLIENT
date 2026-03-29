import type { ReactNode } from "react";

import { StickyHeader } from "@/widgets";

import * as s from "./experience-layout.css";

interface ExperienceLayoutProps {
  isDefault: boolean;
  onToggle: () => void;
  rightSlot?: ReactNode;
  children: ReactNode;
}

const ExperienceLayout = ({
  isDefault,
  onToggle,
  rightSlot,
  children,
}: ExperienceLayoutProps) => {
  return (
    <main className={s.page}>
      <StickyHeader
        isDefault={isDefault}
        onToggle={onToggle}
        rightSlot={rightSlot}
      />

      <section className={s.outerSection}>
        <div className={s.panel}>{children}</div>
      </section>
    </main>
  );
};

export { ExperienceLayout };
