import { useMemo, useRef, useState, useEffect } from "react";
import { Calendar } from "react-calendar";

import {
  IconCalendar,
  DateLeftArrow,
  DateRightArrow,
} from "@/shared/assets/icons";
import {
  formatDateKorean,
  formatDateDot,
  formatYearMonthKorean,
} from "@/shared/lib";
import useOutsideClick from "@/shared/model/use-outsideclick";
import { Button } from "@/shared/ui/button/button";

import * as styles from "./date-picker.css";

import type { CalendarProps } from "react-calendar";
export interface DatePickerProps {
  selectedDate: Date | null;
  onChangeSelectedDate: (date: Date) => void;
  disabled?: boolean;

  placeholder?: string;
  minDate?: Date | null;
}

const DatePicker = ({
  selectedDate,
  onChangeSelectedDate,

  placeholder,
  disabled = false,
  minDate,
}: DatePickerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useOutsideClick<HTMLDivElement>(isOpen, close);

  const textVariant = !selectedDate ? "placeholder" : "selected";

  // 임시 선택 날짜 (항상 오늘 기준으로 초기화)
  const [tempDate, setTempDate] = useState<Date>(new Date());

  const triggerText = useMemo(() => {
    return selectedDate ? formatDateDot(selectedDate) : placeholder;
  }, [selectedDate, placeholder]);

  const handleConfirmClick = () => {
    onChangeSelectedDate(tempDate);
    setIsOpen(false);
  };

  const handleTriggerClick = () => {
    if (disabled) return;
    if (!isOpen) {
      // 열릴 때 현재 선택된 값으로 동기화 (없으면 minDate 혹은 오늘)
      const today = new Date();
      setTempDate(
        selectedDate ?? (minDate && minDate > today ? minDate : today)
      );
    }
    setIsOpen((prev) => !prev);
  };

  // 캘린더에만 사용되는 props
  const calendarProps: CalendarProps = {
    value: tempDate,
    activeStartDate: tempDate,
    minDate: minDate ?? undefined,

    // calendar 타입 설정
    view: "month",
    minDetail: "month",
    maxDetail: "month",
    calendarType: "gregory",

    selectRange: false,
    showNeighboringMonth: true,

    // 쌍꺽쇠 버튼 비활성화
    prev2Label: null,
    next2Label: null,
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        close();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <div ref={containerRef} className={styles.container}>
      {/* Trigger */}
      <button
        type="button"
        className={styles.trigger}
        onClick={handleTriggerClick}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        disabled={disabled}
      >
        <span className={styles.triggerTextVariants[textVariant]}>
          {triggerText}
        </span>
        <IconCalendar className={styles.triggerIcon} aria-hidden />
      </button>

      {/* Menu */}
      {isOpen && (
        <div
          ref={menuRef}
          className={styles.menuWrapper}
          role="dialog"
          aria-modal="true"
        >
          <div className={styles.calendar}>
            <Calendar
              {...calendarProps}
              onChange={(value) => {
                if (value instanceof Date) setTempDate(value);
              }}
              onActiveStartDateChange={({ activeStartDate }) => {
                if (activeStartDate) setTempDate(activeStartDate);
              }}
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
                  {formatYearMonthKorean(date)}
                </span>
              )}
              formatShortWeekday={(_, d) =>
                ["일", "월", "화", "수", "목", "금", "토"][d.getDay()]
              }
              formatDay={(_, d) => String(d.getDate())}
              className={styles.calendar}
            />
          </div>

          <div className={styles.menuFooter}>
            <span className={styles.selectedText}>
              {formatDateKorean(tempDate)}
            </span>

            <Button variant="primary" size="small" onClick={handleConfirmClick}>
              선택
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export { DatePicker };
