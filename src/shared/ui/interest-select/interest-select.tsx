import { useEffect, useId, useState } from "react";

import { useOutsideClick } from "@/shared/model";
import { Button } from "@shared/ui/button/button";
import { Tag } from "@shared/ui/tag/tag";

import * as styles from "./interest-select.css";

type Variant = "industry" | "job";

interface InterestSelectProps<T extends string> {
  variant: Variant;
  title: string;
  required?: boolean;
  options: readonly T[];

  selected: T | null;
  onSelect: (value: T | null) => void;

  disabledOptions?: readonly T[];
}

const OPEN_EVENT_NAME = "interest-select:open";
let lockedInstanceId: string | null = null;

export const InterestSelect = <T extends string>({
  variant,
  title,
  required = true,
  options,

  selected,
  onSelect,
  disabledOptions = [],
}: InterestSelectProps<T>) => {
  const instanceId = useId();
  const [isOpen, setIsOpen] = useState(false);

  const [internalSelected, setInternalSelected] = useState<T | null>(selected);

  // 메뉴가 열릴 때 부모의 최신 값을 내부 상태로 동기화
  useEffect(() => {
    if (isOpen) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setInternalSelected(selected);
    }
  }, [isOpen, selected]);

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
    if (lockedInstanceId === instanceId) lockedInstanceId = null;
  };

  // 2. [선택 완료] 버튼 클릭 시 호출할 함수
  const handleConfirm = () => {
    onSelect(internalSelected); // 부모 상태 업데이트 (Tag 생성/변경)
    closeAndUnlock(); // 메뉴 닫기
  };

  const menuRef = useOutsideClick<HTMLDivElement>(isOpen, closeAndUnlock);

  return (
    <section className={styles.container} data-variant={variant} ref={menuRef}>
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
            <Tag
              xlabel
              onCancel={() => {
                onSelect(null);
              }}
            >
              {selected}
            </Tag>
          ) : (
            <span className={styles.placeholder}>
              {variant === "industry" ? "관심 산업" : "관심 직무"}를 선택해
              주세요
            </span>
          )}
        </div>

        {isOpen && (
          <div className={styles.selectArea}>
            <div className={styles.gridContainer}>
              {options.map((opt) => {
                const isSelected = internalSelected === opt;
                const isDisabled = !isSelected && disabledOptions.includes(opt);
                const hasSelected = Boolean(internalSelected);

                return (
                  <button
                    key={opt}
                    type="button"
                    disabled={isDisabled}
                    className={styles.optionButton({
                      state: isDisabled
                        ? "disabled"
                        : isSelected
                          ? "selected"
                          : hasSelected
                            ? "inactive"
                            : "default",
                    })}
                    onClick={() => {
                      if (isDisabled) return;
                      if (isSelected) setInternalSelected(null);
                      else setInternalSelected(opt);
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
                disabled={!internalSelected}
                onClick={handleConfirm}
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
