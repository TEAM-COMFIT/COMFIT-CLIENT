import { style } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";

export const layout = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "4rem",
});

export const title = style({
  color: themeVars.color.gray800,
  ...themeVars.fontStyles.title_b_24,
});
