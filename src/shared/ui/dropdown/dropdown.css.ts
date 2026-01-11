import { style, styleVariants } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";

/* ---------- size variants ---------- */
export const triggerSize = styleVariants({
  small: { width: "10rem" },
  medium: { width: "14rem" },
  large: { width: "14rem" },
});

/* ---------- base ---------- */
export const dropdownWrapper = style({
  position: "relative",
  display: "inline-flex",
  flexDirection: "column",
  gap: "0.8rem",
});

export const trigger = style({
  height: "4.4rem",
  padding: "0 1.2rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: themeVars.color.white,
  border: `1px solid ${themeVars.color.gray300}`,
  borderRadius: "1.2rem",
  cursor: "pointer",
  ...themeVars.fontStyles.body_r_16,
});

export const menu = style({
  padding: "0.8rem",
  backgroundColor: themeVars.color.white,
  border: `1px solid ${themeVars.color.gray300}`,
  borderRadius: "1.2rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.4rem",
});

export const item = style({
  padding: "1.2rem 0.8rem",
  borderRadius: "0.8rem",
  textAlign: "left",
  cursor: "pointer",
  ...themeVars.fontStyles.body_r_16,

  selectors: {
    "&:hover": {
      backgroundColor: themeVars.color.blue200,
    },
  },
});
