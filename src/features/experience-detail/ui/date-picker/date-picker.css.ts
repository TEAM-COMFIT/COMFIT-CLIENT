import { globalStyle, style, styleVariants } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";

export const container = style({
  position: "relative",
  display: "inline-block",
});

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
});

export const triggerTextBase = style({
  ...themeVars.fontStyles.body_m_14,
});

export const triggerTextVariants = styleVariants({
  placeholder: [{ color: themeVars.color.gray400 }],
  selected: [{ color: themeVars.color.gray800 }],
});

export const triggerIcon = style({
  color: themeVars.color.gray600,
});

export const menuWrapper = style({
  position: "absolute",
  top: "calc(100% + 0.8rem)",
  left: 0,
  zIndex: themeVars.zIndex.dropdownMenu,
  borderRadius: "12px",
  border: `1px solid ${themeVars.color.normal}`,
  boxShadow: themeVars.shadow.shadow1,
  backgroundColor: themeVars.color.white,
  overflow: "hidden",
  width: "31.2rem",
});

export const monthLabel = style({
  ...themeVars.fontStyles.body_b_14,
  color: themeVars.color.gray800,
});

export const navButton = style({
  width: "2.4rem",
  height: "2.4rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  pointerEvents: "auto",
});

// calendar 스타일링(globalStyle 사용)
// react-calendar는 스타일 커스텀 시, 라이브러리의 클래스명을 사용해야 함
export const calendar = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

globalStyle(`${calendar}.react-calendar`, {
  width: "27.4rem",
  margin: "1.4rem 2rem 2.6rem 2rem",
});

// 달력 네비게이션
globalStyle(`${calendar} .react-calendar__navigation`, {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "4.4rem",
  color: themeVars.color.gray800,
  ...themeVars.fontStyles.body_b_14,
  cursor: "default",
});

// 네비게이션 화살표
globalStyle(`${calendar} .react-calendar__navigation__arrow`, {
  width: "2.4rem",
  height: "2.4rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

globalStyle(`${calendar} .react-calendar__month-view__weekdays`, {
  margin: "1.4rem 0 1.2rem 0",
});

// 요일 아이템
globalStyle(`${calendar} .react-calendar__month-view__weekdays__weekday`, {
  display: "flex",
  justifyContent: "center",
});

// abbr
globalStyle(`${calendar} .react-calendar__month-view__weekdays__weekday abbr`, {
  display: "block",
  width: "3.3rem",
  textAlign: "center",
  textDecoration: "none", // abbr 기본 스타일 제거
  color: themeVars.color.gray500,
  ...themeVars.fontStyles.cap_m_12,
});

globalStyle(`${calendar} .react-calendar__month-view__days`, {
  display: "grid",
  gridTemplateColumns: "repeat(7, 3.5rem)",
  justifyContent: "center",
  columnGap: "0.4rem",
  rowGap: "0.6rem",
});

// day 아이템
globalStyle(`${calendar} .react-calendar__month-view__days__day`, {
  width: "3.5rem",
  height: "3.5rem",
  minWidth: "3.5rem",
  maxWidth: "3.5rem",
  borderRadius: "50%",
});

globalStyle(
  `${calendar} .react-calendar__month-view__days__day--neighboringMonth`,
  {
    color: themeVars.color.gray300,
  }
);

// 선택된 날짜
globalStyle(`${calendar} .react-calendar__tile--active`, {
  background: themeVars.color.blue200,
});

export const menuFooter = style({
  borderTop: `1px solid ${themeVars.color.gray200}`,
  padding: "1.1rem 2rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const selectedText = style({
  ...themeVars.fontStyles.body_m_14,
  color: themeVars.color.gray800,
});
