import { style } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";

export const appContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: themeVars.color.blue300,
  ...themeVars.fontStyles.title_b_28,
});

export const actions = style({
  marginTop: "1.6rem",
  display: "flex",
  alignItems: "center",
});
