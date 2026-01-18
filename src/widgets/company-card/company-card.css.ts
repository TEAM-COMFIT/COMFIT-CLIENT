import { style } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";

/* ---------- Card ---------- */
export const card = style({
  width: "25rem",
  height: "28rem",
  padding: "1.6rem",
  backgroundColor: themeVars.color.white,
  borderRadius: "16px",
  border: `1.5px solid ${themeVars.color.normal}`,
  boxShadow: themeVars.shadow.shadow1,
  display: "flex",
  flexDirection: "column",
  gap: "4rem",
});

/* ---------- Header (로고 + 기업명) ---------- */
export const header = style({
  display: "flex",
  alignItems: "center",
  gap: "2rem",
});

export const logoWrapper = style({
  width: "6rem",
  height: "6rem",
  borderRadius: "12px",
  backgroundColor: themeVars.color.white,
  boxShadow: themeVars.shadow.shadow2,

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
  color: themeVars.color.black,
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
