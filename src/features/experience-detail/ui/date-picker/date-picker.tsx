import { useEffect, useMemo, useRef, useState } from "react";
import { Calendar } from "react-calendar";

import {
  IconCalendar,
  DateLeftArrow,
  DateRightArrow,
} from "@/shared/assets/icons";
import { Button } from "@/shared/ui/button/button";

import * as styles from "./date-picker.css";

export type DatePickerTriggerLabel = "시작일" | "종료일" | string;

export interface DatePickerProps {
  label: DatePickerTriggerLabel;
  selectedDate: Date | null;
  onChangeSelectedDate: (date: Date) => void;

  prevMonthIcon?: React.ReactNode;
  nextMonthIcon?: React.ReactNode;

  closeOnOutsideClick?: boolean;
  disabled?: boolean;

  placeholder?: string;
}

/** 기준 날짜: 오늘 (컴포넌트 외부에 고정) */
const TODAY = new Date();

const pad2 = (n: number) => String(n).padStart(2, "0");

const formatTriggerText = (date: Date) => {
  const y = date.getFullYear();
  const m = pad2(date.getMonth() + 1);
  const d = pad2(date.getDate());
  return `${y}.${m}.${d}`;
};

const formatFooterText = (date: Date) => {
  const y = date.getFullYear();
  const m = pad2(date.getMonth() + 1);
  const d = pad2(date.getDate());
  return `${y}년 ${m}월 ${d}일`;
};

const DatePicker = ({
  label,
  selectedDate,
  onChangeSelectedDate,

  prevMonthIcon,
  nextMonthIcon,

  placeholder,
  closeOnOutsideClick = true,
  disabled = false,
}: DatePickerProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const [isOpen, setIsOpen] = useState(false);

  /** 임시 선택 날짜 (항상 오늘 기준으로 초기화) */
  const [tempDate, setTempDate] = useState<Date>(selectedDate ?? TODAY);

  /** 메뉴 열릴 때 tempDate를 selectedDate 또는 오늘로 동기화 */
  useEffect(() => {
    if (!isOpen) return;

    const next = selectedDate ?? TODAY;

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTempDate((prev) => (prev.getTime() === next.getTime() ? prev : next));
  }, [isOpen, selectedDate]);

  /** 외부 클릭 시 닫기 */
  useEffect(() => {
    if (!isOpen || !closeOnOutsideClick) return;

    const onPointerDown = (e: PointerEvent) => {
      const t = e.target as Node | null;
      if (!t) return;

      if (containerRef.current?.contains(t)) return;
      if (menuRef.current?.contains(t)) return;

      setIsOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown, true);
    return () =>
      document.removeEventListener("pointerdown", onPointerDown, true);
  }, [isOpen, closeOnOutsideClick]);

  /** trigger 텍스트는 항상 날짜 */
  const triggerText = useMemo(() => {
    if (!selectedDate) return placeholder ?? label;
    return formatTriggerText(selectedDate);
  }, [label, placeholder, selectedDate]);

  const handleConfirm = () => {
    onChangeSelectedDate(tempDate);
    setIsOpen(false);
  };

  const formatMonthYear = (_locale: string | undefined, date: Date) => {
    const y = date.getFullYear();
    const m = pad2(date.getMonth() + 1);
    return `${y}년 ${m}월`;
  };

  return (
    <div ref={containerRef} className={styles.container}>
      {/* Trigger */}
      <button
        type="button"
        className={styles.trigger}
        onClick={() => !disabled && setIsOpen((p) => !p)}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        disabled={disabled}
      >
        <span className={styles.triggerText}>{triggerText}</span>
        <IconCalendar className={styles.triggerIcon} aria-hidden />
      </button>

      {/* Menu */}
      {isOpen && (
        <div ref={menuRef} className={styles.menuWrapper}>
          {/* 1번 영역: Calendar */}
          <div className={styles.calendar}>
            <Calendar
              value={tempDate}
              activeStartDate={tempDate}
              onChange={(value) => {
                if (value instanceof Date) setTempDate(value);
              }}
              view="month"
              calendarType="gregory"
              selectRange={false}
              showNeighboringMonth
              prev2Label={null}
              next2Label={null}
              prevLabel={
                <span className={styles.navButton}>
                  <DateLeftArrow />
                </span>
              }
              nextLabel={
                <span className={styles.navButton}>
                  <DateRightArrow />
                </span>
              }
              navigationLabel={({ date }) => (
                <span className={styles.monthLabel}>
                  {formatMonthYear(undefined, date)}
                </span>
              )}
              formatShortWeekday={(_l, d) =>
                ["일", "월", "화", "수", "목", "금", "토"][d.getDay()]
              }
              formatDay={(_l, d) => String(d.getDate())}
              className={styles.calendar}
            />
          </div>

          {/* 3번 영역: Footer */}
          <div className={styles.menuFooter}>
            <span className={styles.selectedText}>
              {formatFooterText(tempDate)}
            </span>

            <Button variant="primary" size="small" onClick={handleConfirm}>
              선택
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export { DatePicker };
