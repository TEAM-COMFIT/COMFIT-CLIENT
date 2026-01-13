import { style } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";

/* ---------- Card ---------- */
export const card = style({
  width: "25rem",
  height: "28rem",
  padding: "1.6rem",
  backgroundColor: themeVars.color.white,
  borderRadius: "16px",
  // TODO: dropdown 머지 후 boxShadow 적용
  // boxShadow: themeVars.shadow.shadow,
  display: "flex",
  flexDirection: "column",
  gap: "4rem",
});

/* ---------- Header (Logo + Name) ---------- */
export const header = style({
  display: "flex",
  alignItems: "center",
  gap: "2rem",
});

/* Logo wrapper */
export const logoWrapper = style({
  width: "4.8rem",
  height: "4.8rem",
  borderRadius: "12px",
  backgroundColor: themeVars.color.white,
  // TODO: dropdown 머지 후 boxShadow 적용
  //   boxShadow: themeVars.shadow.shadow2,
  boxShadow: "0 0 8px 0 rgba(0, 0, 0, 0.2)",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
});

export const logoImage = style({
  width: "100%",
  height: "100%",
  objectFit: "contain",
});

/* Company name */
export const companyName = style({
  color: themeVars.color.gray800,
  ...themeVars.fontStyles.hding_b_22,
});

/* ---------- Info (Industry / Scale) ---------- */
export const info = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.4rem",
  color: themeVars.color.gray500,
  ...themeVars.fontStyles.body_m_14,
});

/* ---------- Button wrapper ---------- */
export const action = style({
  marginTop: "auto",
  display: "flex",
  justifyContent: "center",
});

/* Button */
export const button = style({
  width: "21.8rem",
  height: "4.8rem",
  borderRadius: "12px",

  backgroundColor: themeVars.color.blue200,
  color: themeVars.color.blue600,
  ...themeVars.fontStyles.body_m_16,

  border: "none",
  cursor: "pointer",

  selectors: {
    "&:focus-visible": {
      outline: `2px solid ${themeVars.color.blue400}`,
      outlineOffset: "2px",
    },
  },
});
