import { useEffect, useMemo, useRef, useState } from "react";
import Calendar from "react-calendar";

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

  placeholder?: string;
  prevMonthIcon?: React.ReactNode;
  nextMonthIcon?: React.ReactNode;

  closeOnOutsideClick?: boolean;
  disabled?: boolean;
}

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

  placeholder,
  prevMonthIcon,
  nextMonthIcon,

  closeOnOutsideClick = true,
  disabled = false,
}: DatePickerProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const [isOpen, setIsOpen] = useState(false);

  const TODAY = new Date();
  const [tempDate, setTempDate] = useState<Date | null>(selectedDate ?? TODAY);

  // 메뉴 열릴 때만 tempDate 초기화
  useEffect(() => {
    if (!isOpen) return;

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTempDate((prev) => (prev === selectedDate ? prev : selectedDate));
  }, [isOpen, selectedDate]);

  // 외부 클릭 시 닫기
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

  const triggerText = useMemo(() => {
    if (selectedDate) return formatTriggerText(selectedDate);
    return placeholder ?? label;
  }, [label, placeholder, selectedDate]);

  const handleConfirm = () => {
    if (!tempDate) return;
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

      {isOpen && (
        <div ref={menuRef} className={styles.menuWrapper}>
          {/* 1번 영역 */}
          <div className={styles.calendar}>
            <Calendar
              value={tempDate}
              onChange={(value) => {
                if (value instanceof Date) setTempDate(value);
              }}
              view="month"
              calendarType="gregory"
              selectRange={false}
              prev2Label={null}
              next2Label={null}
              prevLabel={
                prevMonthIcon ?? <DateLeftArrow className={styles.navIcon} />
              }
              nextLabel={
                nextMonthIcon ?? <DateRightArrow className={styles.navIcon} />
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

          {/* 3번 영역 */}
          <div className={styles.menuFooter}>
            <span className={styles.selectedText}>
              {tempDate
                ? formatFooterText(tempDate)
                : (placeholder ?? "날짜를 선택해 주세요")}
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
