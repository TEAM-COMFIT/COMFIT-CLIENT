import { style } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";

export const container = style({
  width: "88.3rem",
  height: "14rem",
  borderRadius: "14px",
  backgroundColor: themeVars.color.blue600,

  position: "relative",
  zIndex: 0,
  overflow: "hidden",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  paddingLeft: "3.95rem",
  paddingRight: "4.6rem",
});

export const left = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.65rem",
  minWidth: 0,
  zIndex: 2,
});

export const title = style({
  color: themeVars.color.white,
  ...themeVars.fontStyles.hding_b_22,
});

export const desc = style({
  color: themeVars.color.white,
  ...themeVars.fontStyles.body_m_14,
});

export const right = style({
  zIndex: 2,
  display: "flex",
  alignItems: "center",
});

export const bookImage = style({
  position: "absolute",
  left: "50%",
  bottom: "-4.4rem",
  transform: "translateX(-34.5%)",

  width: "25.2rem",
  height: "18.4rem",
  objectFit: "contain",
  opacity: 0.3,

  pointerEvents: "none",
  zIndex: 1,
});
