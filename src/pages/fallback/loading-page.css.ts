import { style } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";

export const overlay = style({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  zIndex: themeVars.zIndex.spinner,

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  opacity: "0.6",
  backgroundColor: themeVars.color.gray800,
  backdropFilter: "blur(8px)",
  WebkitBackdropFilter: "blur(8px)",
});

export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1.6rem",
});

export const spinner = style({
  width: "22rem",
  height: "10.8rem",
  aspectRatio: 55 / 27,
});

export const text = style({
  color: themeVars.color.white,
  ...themeVars.fontStyles.title_m_24,
});
