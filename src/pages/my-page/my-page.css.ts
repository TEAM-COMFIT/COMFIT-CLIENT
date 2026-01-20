import { style } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";

export const page = style({
  width: "100%",
});

export const container = style({
  width: "106rem",
  margin: "0 auto",
  paddingTop: "8rem",
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

export const body = style({
  marginTop: "1.6rem",
});
