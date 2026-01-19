import { style } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";

export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  minHeight: "100vh",
  overflow: "hidden",
  padding: `calc(10rem + ${themeVars.height.header}) 16.2rem 0`,
});

export const headerWrapper = style({
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "space-between",
  width: "106rem",
  maxWidth: "106rem",
});

export const titleSection = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "1.9rem",
});

export const matchIcon = style({
  width: "6.4rem",
  height: "6.4rem",
  marginRight: "1.6rem",
});

export const titleWrapper = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "0.4rem",
});

export const title = style({
  ...themeVars.fontStyles.title_b_24,
  color: themeVars.color.gray800,
});

export const subTitle = style({
  ...themeVars.fontStyles.body_m_16,
  color: themeVars.color.gray500,
});

export const listWrapper = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  marginTop: "4rem",
  gap: "6rem",
});

export const list = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "1.6rem",
  width: "100%",
});
