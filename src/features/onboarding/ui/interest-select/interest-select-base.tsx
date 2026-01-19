import { useEffect, useId, useState } from "react";

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

const OPEN_EVENT_NAME = "interest-select:open";

let lockedInstanceId: string | null = null;

export const InterestSelectBase = <T extends string>({
  variant,
  title,
  required = true,
  options,
}: InterestSelectBaseProps<T>) => {
  const instanceId = useId();

  const [selected, setSelected] = useState<T | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      const ce = e as CustomEvent<{ instanceId: string }>;
      const openedId = ce.detail?.instanceId;

      if (openedId && openedId !== instanceId) {
        setIsOpen(false);
      }
    };

    window.addEventListener(OPEN_EVENT_NAME, handler as EventListener);
    return () => {
      window.removeEventListener(OPEN_EVENT_NAME, handler as EventListener);

      if (lockedInstanceId === instanceId) {
        lockedInstanceId = null;
      }
    };
  }, [instanceId]);

  const openOnlyThis = () => {
    if (lockedInstanceId && lockedInstanceId !== instanceId) return;
    if (isOpen) return;

    lockedInstanceId = instanceId;

    window.dispatchEvent(
      new CustomEvent(OPEN_EVENT_NAME, {
        detail: { instanceId },
      })
    );

    setIsOpen(true);
  };

  const closeAndUnlock = () => {
    setIsOpen(false);

    if (lockedInstanceId === instanceId) {
      lockedInstanceId = null;
    }
  };

  return (
    <section className={styles.container} data-variant={variant}>
      <div className={styles.boxWrapper}>
        <div className={styles.titleRow}>
          <span className={styles.title}>{title}</span>
          {required && <span className={styles.asterisk}>*</span>}
        </div>

        <div
          className={styles.inputBox({ isOpen })}
          onClick={openOnlyThis}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              openOnlyThis();
            }
          }}
        >
          {selected ? (
            <Tag xlabel onCancel={() => setSelected(null)}>
              {selected}
            </Tag>
          ) : (
            <span className={styles.placeholder}>선택해주세요</span>
          )}
        </div>

        {isOpen && (
          <div className={styles.selectArea}>
            <div className={styles.gridContainer}>
              {options.map((opt) => {
                const isSelected = selected === opt;
                const hasSelected = Boolean(selected);

                return (
                  <button
                    key={opt}
                    type="button"
                    className={styles.optionButton({
                      state: isSelected
                        ? "selected"
                        : hasSelected
                          ? "inactive"
                          : "default",
                    })}
                    onClick={() => {
                      if (isSelected) setSelected(null);
                      else setSelected(opt);
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
                  closeAndUnlock();
                }}
              >
                선택 완료
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
