import { style, styleVariants } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";

/* ---------- Wrapper ---------- */
export const dropdownWrapper = style({
  position: "relative",
  display: "inline-flex",
  flexDirection: "column",
  alignItems: "flex-start",
});

/* ---------- Trigger ---------- */
export const trigger = style({
  height: "4.4rem",
  padding: "0.8rem 1.2rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "1.6rem",

  color: themeVars.color.gray800,
  backgroundColor: themeVars.color.white,
  border: `1.5px solid ${themeVars.color.normal}`,
  borderRadius: "12px",
  whiteSpace: "nowrap",

  ...themeVars.fontStyles.body_r_16,
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
  position: "absolute",
  top: "100%",
  marginTop: "0.8rem",

  padding: "0.8rem",
  backgroundColor: themeVars.color.white,
  border: `1.5px solid ${themeVars.color.normal}`,
  borderRadius: "12px",
  boxShadow: "0 0 8px rgba(0, 0, 0, 0.1)",

  zIndex: themeVars.zIndex.dropdownMenu,
  left: 0,
});

/* ---------- Menu size ---------- */
export const menuSize = styleVariants({
  medium: { width: "14.4rem" },
  large: { width: "15rem" },
  full: { width: "20rem" },
});

/* ---------- Item ---------- */
export const item = style({
  padding: "1rem 1.2rem",
  width: "100%",
  borderRadius: "8px",
  textAlign: "left",

  backgroundColor: themeVars.color.white,
  ...themeVars.fontStyles.body_r_16,

  selectors: {
    "&:hover": {
      backgroundColor: themeVars.color.blue200,
    },
  },
});

/* ---------- Checkbox Item ---------- */
export const checkboxItem = style({
  padding: "1rem 1.2rem",
  width: "100%",
  textAlign: "left",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "row-reverse",
  backgroundColor: themeVars.color.white,

  color: themeVars.color.gray800,
  ...themeVars.fontStyles.body_r_16,
});

/* ---------- Checkbox Input(네모 박스) ---------- */
export const checkboxInput = style({
  width: "1.8rem",
  height: "1.8rem",
  border: `1px solid ${themeVars.color.gray400}`,
  backgroundColor: themeVars.color.white,
  borderRadius: "2px",
  padding: "0.3rem",
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",

  selectors: {
    "&:checked": {
      backgroundColor: themeVars.color.blue500,
      border: `1.6px solid ${themeVars.color.blue400}`,
    },

    "&:after": {
      content: '""',
      width: "0.6rem",
      height: "1.0rem",
      border: `2px solid ${themeVars.color.white}`,
      borderLeft: "none",
      borderTop: "none",
      transform: "rotate(45deg) scale(0)",
      opacity: 0,
      transition: "all 0.2s ease",
      marginBottom: "0.2rem",
    },

    "&:checked:after": {
      transform: "rotate(45deg) scale(1)",
      opacity: 1,
    },
  },
});
