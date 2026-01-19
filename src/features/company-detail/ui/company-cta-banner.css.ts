import { style } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";

export const container = style({
  position: "relative",
  width: "100%",
  maxWidth: "88.3rem",
  height: "14rem",
  padding: "2.4rem",
  borderRadius: "16px",
  overflow: "hidden",
  boxShadow: themeVars.shadow.shadow1,

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "2rem",

  backgroundColor: themeVars.color.blue500,
});

export const textGroup = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.6rem",
  zIndex: 1,
});

export const title = style({
  color: themeVars.color.white,
  ...themeVars.fontStyles.body_m_16,
});

export const desc = style({
  color: themeVars.color.white,
  opacity: 0.9,
  ...themeVars.fontStyles.body_m_14,
});

export const button = style({
  zIndex: 1,
  height: "4rem",
  padding: "0 1.6rem",
  borderRadius: "12px",
  border: "none",
  backgroundColor: themeVars.color.white,
  color: themeVars.color.blue600,
  cursor: "pointer",
  flexShrink: 0,
  ...themeVars.fontStyles.body_m_14,
});

export const decor = style({
  position: "absolute",
  right: "-3rem",
  top: "50%",
  transform: "translateY(-50%)",
  width: "20rem",
  height: "20rem",
  borderRadius: "999px",
  background:
    "radial-gradient(circle, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 60%)",
});
