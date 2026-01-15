import { style } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";

export const button = style({
  boxSizing: "border-box",
  width: "12rem",
  height: "4rem",
  borderRadius: "8px",

  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.4rem",

  padding: "0.8rem 1.6rem",
  border: `1px solid ${themeVars.color.blue600}`,
  backgroundColor: "transparent",

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

const iconBase = style({
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  display: "block",
  transition: "opacity 0.2s ease",
});

export const defaultIcon = style([
  iconBase,
  {
    opacity: 1,
    selectors: {
      [`${button}:hover &`]: { opacity: 0 },
    },
  },
]);

export const hoverIcon = style([
  iconBase,
  {
    opacity: 0,
    selectors: {
      [`${button}:hover &`]: { opacity: 1 },
    },
  },
]);

export const text = style({
  ...themeVars.fontStyles.body_r_14,
  whiteSpace: "nowrap",
});
