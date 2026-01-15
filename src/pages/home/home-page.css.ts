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

export const toggleGroup = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.8rem", // 원하는 만큼 조절
});
