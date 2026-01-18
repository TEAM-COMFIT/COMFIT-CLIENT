import { style } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";

export const container = style({
  width: "100%",
  maxWidth: "88.3rem",
  height: "16.2rem",

  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  gap: "8.2rem",

  padding: "2.8rem 2rem",

  borderRadius: "8px",
  border: `1.5px solid ${themeVars.color.normal}`,
  backgroundColor: themeVars.color.gray100,

  cursor: "pointer",
  textAlign: "left",
});

export const leftGroup = style({
  display: "flex",
  alignItems: "flex-start",
  gap: "4rem",
  paddingLeft: "2.15rem",

  minWidth: 0,
});

export const date = style({
  flexShrink: 0,
  color: themeVars.color.blue600,
  ...themeVars.fontStyles.body_r_14,
});

export const content = style({
  width: "60.5rem",

  display: "flex",
  flexDirection: "column",
  gap: "1.6rem",

  alignItems: "flex-start",
  textAlign: "left",

  minWidth: 0,
});

export const title = style({
  color: themeVars.color.gray800,
  ...themeVars.fontStyles.hline_b_18,

  whiteSpace: "nowrap",
  overflow: "hidden",
});

export const description = style({
  color: themeVars.color.gray500,
  ...themeVars.fontStyles.body_r_14,

  whiteSpace: "normal",
  overflow: "visible",

  overflowWrap: "anywhere",
});

export const iconWrapper = style({
  flexShrink: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  alignSelf: "center",
});

export const icon = style({
  width: "2.4rem",
  height: "2.4rem",
  flexShrink: 0,
});
