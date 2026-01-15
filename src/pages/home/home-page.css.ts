import { style } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";

export const appContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "2rem",
  color: themeVars.color.blue300,
  backgroundColor: themeVars.color.white,

  ...themeVars.fontStyles.title_b_28,
});
