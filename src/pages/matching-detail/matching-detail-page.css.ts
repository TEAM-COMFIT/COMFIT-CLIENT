import { style } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";

export const pageWrapper = style({
  backgroundColor: themeVars.color.gray100,
  minHeight: "100vh",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const contentContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: themeVars.color.white,
  borderTopLeftRadius: "40px",
  borderTopRightRadius: "40px",
  margin: "6.4rem 19rem 0 19rem",
  padding: "6.5rem 8.5rem 12rem 9.5rem",
  flex: 1,
});

export const title = style({
  color: themeVars.color.blue600,
  marginBottom: "1.2rem",
  ...themeVars.fontStyles.title_b_28,
});

export const description = style({
  color: themeVars.color.gray500,
  marginBottom: "12rem",
  ...themeVars.fontStyles.hline_m_18,
});
