import { style } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";

export const button = style({
  width: "12rem",
  height: "4rem",
  borderRadius: "8px",

  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.4rem",

  padding: "0.8rem 1.6rem",
  border: `1px solid ${themeVars.color.blue600}`,
  backgroundColor: themeVars.color.white,

  color: themeVars.color.blue600,
  textDecoration: "none",
  cursor: "pointer",
  userSelect: "none",

  transition: "background-color 0.2s ease, color 0.2s ease",

  selectors: {
    "&:hover": {
      backgroundColor: themeVars.color.blue600,
      color: themeVars.color.white,
    },
  },
});

export const iconWrap = style({
  position: "relative",
  width: "2.4rem",
  height: "2.4rem",
  flexShrink: 0,
});

export const iconBase = style({
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  display: "block",
  color: "currentColor",
  transition: "background-color 0.2s ease, color 0.2s ease",
  textDecoration: "none",
  cursor: "pointer",
  userSelect: "none",
});

export const text = style({
  ...themeVars.fontStyles.body_r_14,
  whiteSpace: "nowrap",
});
