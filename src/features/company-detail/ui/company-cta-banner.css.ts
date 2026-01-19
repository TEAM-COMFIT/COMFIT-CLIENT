import { style } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";

export const container = style({
  width: "883px",
  height: "140px",
  borderRadius: "14px",
  backgroundColor: themeVars.color.blue600,

  position: "relative",
  overflow: "hidden",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  paddingLeft: "39.5px",
  paddingRight: "46px",
});

export const left = style({
  display: "flex",
  flexDirection: "column",
  gap: "6.5px",
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
  bottom: "-44px",
  transform: "translateX(-34.5%)",

  width: "25.2rem",
  height: "18.4rem",
  objectFit: "contain",
  opacity: 0.3,

  pointerEvents: "none",
  zIndex: 1,
});
