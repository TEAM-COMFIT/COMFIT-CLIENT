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

export const buttonWrapper = style({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-end",
  width: "100%",
});

export const copyButton = style({
  display: "flex",
  alignItems: "center",
  gap: "0.8rem",
  marginBottom: "4.8rem",
  color: themeVars.color.gray500,
  ...themeVars.fontStyles.body_m_16,
});

export const footer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "4rem",
  width: "100%",
  paddingTop: "8rem",
});

export const footerTitle = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "0.8rem",
});

export const mainTitle = style({
  color: themeVars.color.gray800,
  ...themeVars.fontStyles.hding_b_22,
  fontWeight: 700,
});

export const subTitle = style({
  color: themeVars.color.gray600,
  ...themeVars.fontStyles.body_r_16,
});
