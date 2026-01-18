import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import Calendar from "react-calendar";
import { createPortal } from "react-dom";

import { IconCalendar } from "@/shared/assets/icons";
import { Button } from "@/shared/ui/button/button";

import * as styles from "./date-picker.css";

export type DatePickerTriggerLabel = "시작일" | "종료일" | string;

export interface DatePickerProps {
  label: DatePickerTriggerLabel; // 초기 트리거 텍스트 (예: 시작일/종료일)
  selectedDate: Date | null; // 확정된 날짜 (부모가 관리)
  onChangeSelectedDate: (date: Date) => void; // 확정 시 호출

  // 선택 전 임시 텍스트가 필요하면 placeholder로 표현
  placeholder?: string;

  // 월 이동 버튼을 이미지/아이콘으로 커스텀 가능
  prevMonthIcon?: React.ReactNode;
  nextMonthIcon?: React.ReactNode;

  // 외부 클릭 닫힘 on/off (기본 true)
  closeOnOutsideClick?: boolean;

  // 트리거 disabled
  disabled?: boolean;
}

const GAP_PX = 8; // 0.8rem을 px 기준으로 (루트 폰트 10px 가정이 아니라, 실제 간격은 inline 계산이 쉬워 px로)

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

const isSameDay = (a: Date, b: Date) =>
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate();

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
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const [isOpen, setIsOpen] = useState(false);

  // 임시 선택값(캘린더 클릭 시 변경) - “선택” 버튼 눌러야 확정
  const [tempDate, setTempDate] = useState<Date | null>(selectedDate);

  // menu 포지션(바디 포탈 absolute)
  const [pos, setPos] = useState<{
    top: number;
    left: number;
    width: number;
  } | null>(null);

  // open 시에는 현재 selectedDate로 temp를 초기화
  useEffect(() => {
    if (!isOpen) return;

    setTempDate(selectedDate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const triggerText = useMemo(() => {
    if (selectedDate) return formatTriggerText(selectedDate);
    return placeholder ?? label;
  }, [label, placeholder, selectedDate]);

  const updatePosition = () => {
    const el = triggerRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const top = rect.bottom + GAP_PX + window.scrollY;
    const left = rect.left + window.scrollX;

    setPos({ top, left, width: rect.width });
  };

  useLayoutEffect(() => {
    if (!isOpen) return;

    updatePosition();

    const handle = () => updatePosition();
    window.addEventListener("resize", handle);
    // 스크롤은 캡처 단계에서 받으면 상위 스크롤 컨테이너 변화에도 비교적 잘 맞습니다.
    window.addEventListener("scroll", handle, true);

    return () => {
      window.removeEventListener("resize", handle);
      window.removeEventListener("scroll", handle, true);
    };
  }, [isOpen]);

  // 외부 클릭 시 닫기
  useEffect(() => {
    if (!isOpen) return;
    if (!closeOnOutsideClick) return;

    const onPointerDown = (e: PointerEvent) => {
      const t = e.target as Node | null;
      if (!t) return;

      const triggerEl = triggerRef.current;
      const menuEl = menuRef.current;

      // trigger 또는 menu 내부 클릭이면 무시
      if (triggerEl?.contains(t)) return;
      if (menuEl?.contains(t)) return;

      setIsOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown, true);
    return () =>
      document.removeEventListener("pointerdown", onPointerDown, true);
  }, [isOpen, closeOnOutsideClick]);

  const handleToggleOpen = () => {
    if (disabled) return;
    setIsOpen((prev) => !prev);
  };

  const handleConfirm = () => {
    if (!tempDate) return;
    onChangeSelectedDate(tempDate);
    setIsOpen(false);
  };

  // 월 헤더 “yyyy년 mm월” 표시
  const formatMonthYear = (_locale: string | undefined, date: Date) => {
    const y = date.getFullYear();
    const m = pad2(date.getMonth() + 1);
    return `${y}년 ${m}월`;
  };

  const menu =
    isOpen && pos
      ? createPortal(
          <div
            ref={menuRef}
            className={styles.menuWrapper}
            style={{ top: pos.top, left: pos.left, minWidth: pos.width }}
            data-open={isOpen ? "true" : "false"}
          >
            <div className={styles.menuHeader}>
              <Calendar
                // 상태
                value={tempDate}
                onChange={(value) => {
                  // react-calendar는 Date | Date[]를 줄 수 있음 (range 모드 포함)
                  if (value instanceof Date) setTempDate(value);
                }}
                selectRange={false}
                view="month"
                calendarType="gregory"
                showNeighboringMonth={false}
                // header (1번 영역)
                prevLabel={
                  <span className={styles.navIcon}>
                    {prevMonthIcon ?? <span aria-hidden>{"<"}</span>}
                  </span>
                }
                nextLabel={
                  <span className={styles.navIcon}>
                    {nextMonthIcon ?? <span aria-hidden>{">"}</span>}
                  </span>
                }
                prev2Label={null}
                next2Label={null}
                navigationLabel={({ date }) => (
                  <span className={styles.monthLabel}>
                    {formatMonthYear(undefined, date)}
                  </span>
                )}
                // 요일 표시 “일월화수목금토”
                formatShortWeekday={(_locale, date) => {
                  const map = [
                    "일",
                    "월",
                    "화",
                    "수",
                    "목",
                    "금",
                    "토",
                  ] as const;
                  return map[date.getDay()];
                }}
                // 날짜 숫자만 (01 같은 포맷은 요구 없어서 숫자만)
                formatDay={(_locale, date) => String(date.getDate())}
                tileClassName={({ date, view }) => {
                  if (view !== "month") return undefined;

                  const classes = [styles.dayTile];

                  // 선택된 날짜(임시) 표시
                  if (tempDate && isSameDay(date, tempDate))
                    classes.push(styles.daySelected);

                  return classes.join(" ");
                }}
                className={styles.calendar}
              />
            </div>

            <div className={styles.menuFooter}>
              <span className={styles.selectedText}>
                {tempDate
                  ? formatFooterText(tempDate)
                  : (placeholder ?? "날짜를 선택해 주세요")}
              </span>

              <Button
                variant="primary"
                size="small"
                onClick={handleConfirm}
                disabled={!tempDate}
              >
                선택
              </Button>
            </div>
          </div>,
          document.body
        )
      : null;

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className={styles.trigger}
        onClick={handleToggleOpen}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        disabled={disabled}
      >
        <span
          className={
            selectedDate ? styles.triggerTextSelected : styles.triggerText
          }
        >
          {triggerText}
        </span>

        <IconCalendar className={styles.triggerIcon} aria-hidden="true" />
      </button>

      {menu}
    </>
  );
};

export { DatePicker };
