import { style } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";

export const container = style({
  width: "100%",
  maxWidth: "106rem",
  height: "11rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  paddingLeft: "4.2rem",
  paddingRight: "4.7rem",

  boxSizing: "border-box",
  borderRadius: "16px",
  backgroundColor: themeVars.color.blue100,
  border: `1.5px solid ${themeVars.color.normal}`,
});

export const left = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  gap: "0.4rem",
});

export const companyName = style({
  color: themeVars.color.gray800,

  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",

  ...themeVars.fontStyles.hding_b_20,
});

export const meta = style({
  color: themeVars.color.gray500,

  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",

  ...themeVars.fontStyles.body_m_14,
});

export const icon = style({
  width: "2.4rem",
  height: "2.4rem",
  flexShrink: 0,
  rotate: "90deg",
  color: themeVars.color.gray800,
});
