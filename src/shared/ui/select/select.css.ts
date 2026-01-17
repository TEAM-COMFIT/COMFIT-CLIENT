import { style, styleVariants } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";

/* ---------- Wrapper ---------- */
export const selectWrapper = style({
  position: "relative",
  display: "inline-flex",
  flexDirection: "column",
});

/* ---------- Trigger ---------- */
export const trigger = style({
  display: "flex",
  alignItems: "center",
  width: "88rem",
  height: "6rem",
  justifyContent: "space-between",
  padding: "0 2rem 0 1.6rem",
  color: themeVars.color.gray400,
  backgroundColor: themeVars.color.white,
  border: `1.5px solid ${themeVars.color.normal}`,
  borderRadius: "12px",
  ...themeVars.fontStyles.hline_m_18,
});

export const triggerFontColor = styleVariants({
  closed: {
    color: themeVars.color.gray400,
  },
  open: {
    color: themeVars.color.gray800,
  },
});
/* ---------- Arrow Icon ---------- */
export const arrowIcon = style({
  width: "1.8rem",
  height: "1.8rem",
  color: themeVars.color.gray800,
});

export const arrowIconTransition = styleVariants({
  closed: {
    transform: "rotate(180deg)",
  },
  open: {
    transform: "rotate(0deg)",
  },
});

/* ---------- Menu ---------- */
export const menu = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  top: "100%",
  width: "100%",
  marginTop: "0.8rem",
  backgroundColor: themeVars.color.white,
  border: `1.5px solid ${themeVars.color.normal}`,
  borderRadius: "8px",
  zIndex: themeVars.zIndex.dropdownMenu,
});

/* ---------- Item ---------- */
export const item = style({
  padding: "1rem 1.2rem",
  width: "87.2rem",
  borderRadius: "8px",
  textAlign: "left",
  cursor: "pointer",
  margin: "0.4rem",
  backgroundColor: themeVars.color.white,
  ...themeVars.fontStyles.body_r_16,

  selectors: {
    "&:hover": {
      backgroundColor: themeVars.color.blue200,
    },
    "&:active": {
      backgroundColor: themeVars.color.blue600,
      color: themeVars.color.white,
    },
  },
});
