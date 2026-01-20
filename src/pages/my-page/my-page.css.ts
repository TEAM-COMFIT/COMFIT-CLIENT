import { style } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";

export const container = style({
  width: "100%",
  maxWidth: "106rem",
  margin: "0 auto",
  paddingTop: `calc(${themeVars.height.header} + 8rem)`,
});

export const header = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const title = style({
  ...themeVars.fontStyles.title_b_28,
  color: themeVars.color.black,
});
