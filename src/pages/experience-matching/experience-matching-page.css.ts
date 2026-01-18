import { style } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";

export const container = style({
  display: "flex",
  flexDirection: "column",
  margin: "6.1rem auto",
  maxWidth: "106rem",
});

export const titleContainer = style({
  display: "flex",
  gap: "1.6rem",
  width: "100%",
  marginLeft: "auto",
});

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "0.4rem",
});

export const title = style({
  color: themeVars.color.gray900,
  ...themeVars.fontStyles.title_b_24,
});

export const subTitle = style({
  color: themeVars.color.gray500,
  ...themeVars.fontStyles.body_m_16,
});
