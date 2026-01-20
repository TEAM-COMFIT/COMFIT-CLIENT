import { style } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";

export const page = style({
  width: "100%",
  backgroundColor: themeVars.color.white,
  marginTop: `calc(${themeVars.height.header} + 8rem)`,
});

export const container = style({
  display: "flex",
  flexDirection: "column",
  maxWidth: "144rem",
  margin: "0 auto",
  padding: "0 2rem 0",
});
