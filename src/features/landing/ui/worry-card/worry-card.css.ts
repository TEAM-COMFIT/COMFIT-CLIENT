import { globalStyle, style } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";

export const container = style({
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  width: "32rem",
  padding: "2.8rem",
  borderRadius: "16px",
  backgroundColor: themeVars.color.white,
  boxShadow: themeVars.shadow.shadow2,
  gap: "1.6rem",

  selectors: {
    "&:nth-child(1)": {
      top: "17.4rem",
      left: "42.6rem",
      zIndex: 1,
    },
    "&:nth-child(2)": {
      top: "31.5rem",
      left: "19rem",
      zIndex: 2,
    },
    "&:last-child": {
      top: "45.5rem",
      left: "37rem",
      backgroundColor: themeVars.color.blue200,
      zIndex: 3,
    },
  },
});

export const header = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const title = style({
  whiteSpace: "pre-wrap",
  color: themeVars.color.gray700,
  ...themeVars.fontStyles.hding_b_20,
});

export const description = style({
  whiteSpace: "pre-wrap",
  color: themeVars.color.gray500,
  ...themeVars.fontStyles.cap_m_12,
});

export const iconWrapper = style({
  padding: "0.6rem",
  borderRadius: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: themeVars.color.blue100,
});

globalStyle(`${container}:last-child ${iconWrapper}`, {
  backgroundColor: themeVars.color.blue300,
});
