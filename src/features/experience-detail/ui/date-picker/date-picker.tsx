import { useEffect, useMemo, useRef, useState } from "react";
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

// 기준 날짜: 오늘
const TODAY = new Date();

const DatePicker = ({
  label,
  selectedDate,
  onChangeSelectedDate,

  placeholder,
  disabled = false,
}: DatePickerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useOutsideClick<HTMLDivElement>(isOpen, close);

  const textVariant = !selectedDate ? "placeholder" : "selected";
  // 임시 선택 날짜 (항상 오늘 기준으로 초기화)
  const [tempDate, setTempDate] = useState<Date>(selectedDate ?? TODAY);

  const triggerText = useMemo(() => {
    if (!selectedDate) return placeholder ?? label;
    return formatDateDot(selectedDate);
  }, [label, placeholder, selectedDate]);

  const handleConfirmClick = () => {
    onChangeSelectedDate(tempDate);
    setIsOpen(false);
  };

  const handleTriggerClick = () => {
    if (disabled) return;

    if (!isOpen) {
      // 메뉴를 열 때 현재 선택된 날짜로 tempDate 동기화
      setTempDate(selectedDate ?? TODAY);
    }
    setIsOpen((prev) => !prev);
  };

  const calendarProps: CalendarProps = {
    value: tempDate,
    activeStartDate: tempDate,

    view: "month",
    minDetail: "month",
    maxDetail: "month",

    calendarType: "gregory",
    selectRange: false,
    showNeighboringMonth: true,

    prev2Label: null,
    next2Label: null,
  };

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
        <div ref={menuRef} className={styles.menuWrapper}>
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
