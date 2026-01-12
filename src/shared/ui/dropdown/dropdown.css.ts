import { style, styleVariants } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";

/* ---------- base ---------- */
export const dropdownWrapper = style({
  position: "relative",
  display: "inline-flex",
  flexDirection: "column",
  gap: "0.8rem",
});

export const dropdownAlign = styleVariants({
  medium: {
    alignItems: "flex-end", // 왼쪽 정렬
  },
  large: {
    alignItems: "center", // 중앙 정렬
  },
  full: {
    alignItems: "flex-start", // 오른쪽 정렬
  },
});

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
  ...themeVars.fontStyles.body_r_16,
});

export const menuSize = styleVariants({
  medium: { width: "14.4rem" },
  large: { width: "14.4rem" },
  full: { width: "20rem" },
});

export const menu = style({
  padding: "0.8rem",
  backgroundColor: themeVars.color.white,
  border: `1.5px solid ${themeVars.color.normal}`,
  borderRadius: "12px",
  display: "flex",
  flexDirection: "column",
  gap: "0.4rem",
  boxShadow: "0 0 8px rgba(0, 0, 0, 0.1)",
});

export const item = style({
  padding: "1rem 1.2rem",
  borderRadius: "8px",
  textAlign: "left",
  cursor: "pointer",
  backgroundColor: themeVars.color.white,
  ...themeVars.fontStyles.body_r_16,

  selectors: {
    "&:hover": {
      backgroundColor: themeVars.color.blue200,
    },
  },
});

export const arrowIcon = style({
  width: "1.8rem",
  height: "1.8rem",
  //   border: "1px solid red",
});

export const arrowIconTransition = styleVariants({
  closed: {
    transform: "rotate(180deg)",
    transition: "transform 0.3s ease",
  },
  open: {
    transform: "rotate(0deg)",
    transition: "transform 0.3s ease",
  },
});
