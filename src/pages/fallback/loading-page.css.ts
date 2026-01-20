import { style, keyframes } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";

const rotate = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

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

  backgroundColor: "rgba(255, 255, 255, 0.5)",
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
  width: "10rem",
  height: "10rem",
  animation: `${rotate} 1.5s linear infinite`,
});

export const text = style({
  color: themeVars.color.black,
  ...themeVars.fontStyles.hding_b_22,
});
