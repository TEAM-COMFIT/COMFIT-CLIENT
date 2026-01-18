import { glob } from "fs";

import { globalStyle, style } from "@vanilla-extract/css";

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

export const triggerText = style({
  ...themeVars.fontStyles.body_m_14,
  color: themeVars.color.gray400,
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
  border: `1px solid ${themeVars.color.gray200}`,
  boxShadow: themeVars.shadow.shadow1,
  backgroundColor: themeVars.color.white,
  overflow: "hidden",
  width: "31.2rem",
});

export const menuHeader = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "1.2rem",
});

export const monthLabel = style({
  ...themeVars.fontStyles.body_b_14,
  color: themeVars.color.gray800,
});

export const navIcon = style({
  width: "2.4rem",
  height: "2.4rem",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
});

// calendar 스타일링(globalStyle 사용) (react-calendar 라이브러리의 클래스명을 사용해야 함)
export const calendar = style({});

globalStyle(`${calendar} .react-calendar`, {
  border: "1px sold red",
  width: "100%",
});

// 달력 헤더
globalStyle(`${calendar} .react-calendar__month-view__header`, {
  marginBottom: "1.2rem",
});

// 달력 네비게이션
globalStyle(`${calendar} .react-calendar__navigation`, {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  color: themeVars.color.gray800,
  ...themeVars.fontStyles.body_b_14,
});

globalStyle(`${calendar} .react-calendar__navigation__label`, {
  width: "auto",
  cursor: "default",
});

// 요일 행 스타일링
globalStyle(`${calendar} .react-calendar__month-view__weekdays`, {
  display: "flex",
  gap: "0.6rem",
  width: "27.4rem",
  border: "1px solid blue",
});

// 요일 텍스트 밑줄 제거 및 커서 변경
globalStyle(`${calendar} .react-calendar__month-view__weekdays__weekday`, {
  width: "3.3rem",
  textAlign: "center",
  color: themeVars.color.gray500,
  border: "1px solid red",
  ...themeVars.fontStyles.cap_m_12,
});

globalStyle(`${calendar} .react-calendar__month-view__weekdays__weekday abbr`, {
  textDecoration: "none",
  borderBottom: "none",
  cursor: "default",
});

globalStyle(`${calendar} .react-calendar__month-view__days`, {
  display: "grid",
  gridTemplateColumns: "repeat(7, 3.5rem)",
  justifyContent: "center",
  gap: "0.4rem",
});

globalStyle(`${calendar} .react-calendar__month-view__weekNumbers`, {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

// 기본 타일
globalStyle(`${calendar} .react-calendar__tile`, {
  width: "3.5rem",
  height: "3.5rem",
  cursor: "pointer",
  ...themeVars.fontStyles.cap_m_12,
  color: themeVars.color.gray800,
  borderRadius: "100%",
});

// 선택된 날짜
globalStyle(`${calendar} .react-calendar__tile--active`, {
  background: themeVars.color.blue200,
});

export const menuFooter = style({
  borderTop: `1px solid ${themeVars.color.gray200}`,
  padding: "1.1rem 1.9rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const selectedText = style({
  ...themeVars.fontStyles.cap_m_12,
  color: themeVars.color.gray800,
});
