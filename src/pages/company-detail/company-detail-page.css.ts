import { style } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";

export const page = style({
  width: "100%",
  backgroundColor: themeVars.color.white,
});

export const container = style({
  display: "flex",
  flexDirection: "column",
  maxWidth: "144rem",
  margin: "0 auto",
  padding: "8rem 2rem 0",
});
