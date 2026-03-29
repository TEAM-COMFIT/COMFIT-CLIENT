import { style } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";

export const page = style({
  minHeight: "100vh",
  background: themeVars.color.gray100,
});

export const outerSection = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingBottom: 0,
});

export const panel = style({
  width: "106rem",
  background: themeVars.color.white,
  borderRadius: 0,

  paddingTop: "8rem",
  paddingBottom: "21.2rem",
  paddingInline: "9rem",

  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "8rem",
});
