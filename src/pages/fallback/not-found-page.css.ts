import { style } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";

export const layout = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: `calc(${themeVars.height.header} + 20.1rem)`,
  margin: "0 auto",
  gap: "1.6rem",
});

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.8rem",
});

export const title = style({
  color: themeVars.color.gray800,
  ...themeVars.fontStyles.title_b_28,
});

export const sub = style({
  color: themeVars.color.gray500,
  ...themeVars.fontStyles.hline_m_18,
  marginBottom: "2.4rem",
});
