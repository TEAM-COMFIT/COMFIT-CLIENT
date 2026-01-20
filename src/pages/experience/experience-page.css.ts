import { style } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";

export const page = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  paddingTop: `calc(${themeVars.height.header} + 8rem)`,
});

export const header = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  maxWidth: "106rem",
  height: "6.8rem",
  margin: "0 auto",
});

export const headerLeft = style({
  display: "flex",
  alignItems: "center",
  gap: "1.6rem",
});

export const headerText = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.4rem",
});

export const title = style({
  color: themeVars.color.black,
  ...themeVars.fontStyles.title_b_24,
});

export const description = style({
  color: themeVars.color.gray500,
  ...themeVars.fontStyles.body_m_16,
});

export const actions = style({
  display: "flex",
  alignItems: "center",
  gap: "0.8rem",
});

export const registerButton = style({
  width: "12rem",
  height: "4.4rem",
  padding: "0.8rem",
  borderRadius: "1.2rem",
  border: `1px solid ${themeVars.color.blue600}`,
  backgroundColor: themeVars.color.blue600,
  color: themeVars.color.white,
  ...themeVars.fontStyles.body_r_16,
});

export const icon = style({
  width: "4.8rem",
  height: "4.8rem",
});
