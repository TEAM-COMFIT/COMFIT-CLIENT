import { globalStyle, style } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";

export const wrapper = style({});

export const calendar = style({
  borderRadius: "12px",
  backgroundColor: themeVars.color.purple100,
  boxShadow: themeVars.shadow.shadow1,
});

/* 헤더 */
globalStyle(".react-calendar__header", {
  backgroundColor: themeVars.color.gray100,
  borderBottom: `1px solid ${themeVars.color.gray200}`,
});

/* 요일 */
globalStyle(".react-calendar__day-name", {
  color: themeVars.color.gray500,
});

/* 날짜 기본 */
globalStyle(".react-calendar__day", {
  color: themeVars.color.gray800,
});

/* 선택된 날짜 */
globalStyle(".react-calendar__day--selected", {
  color: themeVars.color.gray800,
  backgroundColor: themeVars.color.blue300,
});

/* hover */
globalStyle(".react-calendar__day:hover", {
  backgroundColor: "transparent",
});

/* 오늘 */
globalStyle(".react-calendar__day--today", {
  fontWeight: 600,
});
