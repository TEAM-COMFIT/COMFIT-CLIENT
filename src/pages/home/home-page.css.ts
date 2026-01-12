import { style } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";

export const appContainer = style({
  display: "flex",
  flexDirection: "column",
  color: themeVars.color.blue300,
  ...themeVars.fontStyles.title_b_28,
});
