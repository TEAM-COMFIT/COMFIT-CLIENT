import { useMemo, useState } from "react";

import { Button } from "@shared/ui/button/button";
import { Tag } from "@shared/ui/tag/tag";

import * as styles from "./interest-select-base.css";

type Variant = "industry" | "job";

interface InterestSelectBaseProps<T extends string> {
  variant: Variant;
  title: string;
  required?: boolean;
  options: readonly T[];
}

export const InterestSelectBase = <T extends string>({
  variant,
  title,
  required = true,
  options,
}: InterestSelectBaseProps<T>) => {
  const [selected, setSelected] = useState<T | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const disabledSet = useMemo(() => {
    // 선택된 값이 있으면, 나머지 버튼 disabled
    if (!selected) return new Set<T>();
    return new Set(options.filter((o) => o !== selected));
  }, [options, selected]);

  return (
    <section className={styles.container} data-variant={variant}>
      {/* Onboarding Box */}
      <div>
        <div className={styles.titleRow}>
          <span className={styles.title}>{title}</span>
          {required && <span className={styles.asterisk}>*</span>}
        </div>

        <div
          className={`${styles.inputBox} ${
            !isOpen ? styles.inputBoxClickable : styles.inputBoxDefault
          }`}
          onClick={() => {
            if (!isOpen) setIsOpen(true);
          }}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              if (!isOpen) setIsOpen(true);
            }
          }}
        >
          {selected ? (
            <Tag
              type="xlabel"
              onCancel={(e?: unknown) => {
                void e;
                setSelected(null);
              }}
            >
              {selected}
            </Tag>
          ) : (
            <span className={styles.placeholder}>선택해주세요</span>
          )}
        </div>
      </div>

      {/* Select Area */}
      {isOpen && (
        <div className={styles.selectArea}>
          <div className={styles.gridContainer}>
            {options.map((opt) => {
              const isSelected = selected === opt;
              const isDisabled = disabledSet.has(opt);

              const cls = isDisabled
                ? styles.optionButton.disabled
                : isSelected
                  ? styles.optionButton.selected
                  : styles.optionButton.default;

              return (
                <button
                  key={opt}
                  type="button"
                  className={cls}
                  disabled={isDisabled}
                  onClick={() => {
                    if (isDisabled) return;
                    setSelected(opt);
                  }}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          <div className={styles.buttonContainer}>
            <Button
              variant="primary"
              size="medium"
              disabled={!selected}
              onClick={() => {
                if (!selected) return;
                setIsOpen(false);
              }}
            >
              선택 완료
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};
