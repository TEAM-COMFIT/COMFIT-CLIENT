import { style } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";

export const page = style({
  width: "100%",
  backgroundColor: themeVars.color.white,
});

export const container = style({
  maxWidth: "144rem",
  margin: "0 auto",
  padding: "4.8rem 2rem 0",
  display: "flex",
  flexDirection: "column",
});
