import { globalStyle, style } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";

export const trigger = style({
  width: "16rem",
  height: "4.4rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "1rem 1.6rem",
  borderRadius: "12px",
  border: `1px solid ${themeVars.color.gray200}`,
  backgroundColor: themeVars.color.white,
  cursor: "pointer",

  selectors: {
    "&:disabled": {
      cursor: "not-allowed",
      opacity: 0.6,
    },
  },
});

export const triggerText = style({
  ...themeVars.fontStyles.body_m_14,
  color: themeVars.color.gray400,
});

export const triggerTextSelected = style({
  ...themeVars.fontStyles.body_m_14,
  color: themeVars.color.gray800,
});

export const triggerIcon = style({
  width: "2.4rem",
  height: "2.4rem",
  color: themeVars.color.gray600,
});

// 실제 IconCalendar 연결 전 임시 표현
export const fallbackCalendarIcon = style({
  width: "2rem",
  height: "2rem",
  borderRadius: "4px",
  backgroundColor: themeVars.color.gray600,
  opacity: 0.35,
});

// Menu Wrapper
export const menuWrapper = style({
  position: "absolute",
  zIndex: themeVars.zIndex.dropdownMenu,
  borderRadius: "12px",
  border: `1px solid ${themeVars.color.gray200}`, // normal
  boxShadow: themeVars.shadow.shadow1,
  backgroundColor: themeVars.color.white,
  overflow: "hidden",
});

// 1번 영역(헤더/네비게이션)
export const menuHeader = style({
  padding: "1.2rem 1.2rem 0.8rem 1.2rem",
});

export const monthLabel = style({
  ...themeVars.fontStyles.body_b_14,
  color: themeVars.color.gray800,
});

export const navIcon = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "2.4rem",
  height: "2.4rem",
});

// 2번 영역(캘린더)
export const calendar = style({
  // react-calendar root에 className으로 들어감
});

// react-calendar 기본 스타일(클래스) 커스텀 (필요 최소만)
globalStyle(`${calendar} .react-calendar`, {
  border: "none",
  width: "auto",
  background: "transparent",
});

globalStyle(`${calendar} .react-calendar__navigation`, {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "0.8rem",
});

globalStyle(`${calendar} .react-calendar__navigation button`, {
  background: "transparent",
  border: "none",
  padding: 0,
  cursor: "pointer",
});

globalStyle(`${calendar} .react-calendar__navigation__label`, {
  flexGrow: "0 !important",
});

globalStyle(`${calendar} .react-calendar__month-view__weekdays`, {
  display: "grid",
  gridTemplateColumns: "repeat(7, 3.5rem)",
  gap: "0.4rem",
  marginBottom: "0.6rem",
});

globalStyle(`${calendar} .react-calendar__month-view__weekdays__weekday`, {
  height: "1.6rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  ...themeVars.fontStyles.cap_m_12,
  color: themeVars.color.gray500,
});

globalStyle(`${calendar} .react-calendar__month-view__weekdays__weekday abbr`, {
  textDecoration: "none",
});

globalStyle(`${calendar} .react-calendar__month-view__days`, {
  display: "grid",
  gridTemplateColumns: "repeat(7, 3.5rem)",
  gap: "0.4rem",
});

// 날짜 타일(3.5rem x 3.5rem)
export const dayTile = style({
  width: "3.5rem",
  height: "3.5rem",
  border: "none",
  background: "transparent",
  cursor: "pointer",
  borderRadius: "9999px",
  ...themeVars.fontStyles.cap_m_12,
  color: themeVars.color.gray800,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  selectors: {
    "&:disabled": {
      cursor: "not-allowed",
      color: themeVars.color.gray300,
      background: "transparent",
    },
    "&:hover:not(:disabled)": {
      background: themeVars.color.gray100,
    },
  },
});

// 선택된 날짜: blue200 + 완전 원형
export const daySelected = style({
  background: themeVars.color.blue200,
});

// 3번 영역(푸터)
export const menuFooter = style({
  borderTop: `1px solid ${themeVars.color.gray200}`, // normal
  padding: "1.1rem 1.9rem",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
});

export const selectedText = style({
  ...themeVars.fontStyles.cap_m_12,
  color: themeVars.color.gray800,
});
