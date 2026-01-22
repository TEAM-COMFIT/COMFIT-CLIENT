import { style } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";

export const page = style({
  minHeight: "100vh",
  background: themeVars.color.gray100,
  padding: "14rem 0 8.8rem",
  overflowX: "hidden",
});

export const card = style({
  width: "106rem",
  margin: "0 auto",
  background: themeVars.color.white,
  borderRadius: "40px",
  boxShadow: themeVars.shadow.shadow1,
  padding: "8rem 0 8.3rem 0",
  position: "relative",
});

export const inner = style({
  width: "88rem",
  margin: "0 auto",

  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",

  gap: "4rem",
});

export const titleBlock = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.2rem",

  alignItems: "flex-start",
  textAlign: "left",

  marginBottom: "4rem",
});

export const title = style([
  themeVars.fontStyles.title_b_24,
  {
    margin: 0,
    color: themeVars.color.gray900,
    display: "flex",
    alignItems: "center",
    gap: "0.8rem",
  },
]);

export const logo = style({
  width: "14rem",
  height: "2.959rem",
  display: "block",
});

export const subtitle = style([
  themeVars.fontStyles.body_m_16,
  {
    margin: 0,
    color: themeVars.color.gray500,
  },
]);

export const field = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
  position: "relative",
  zIndex: 12,
});

export const universityField = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
  position: "relative",
  zIndex: 11,
});

export const label = style([
  themeVars.fontStyles.body_b_16,
  {
    color: themeVars.color.gray800,

    display: "flex",
    alignItems: "center",

    gap: "0.2rem",

    minHeight: "2.4rem",
  },
]);

export const required = style({
  color: themeVars.color.orange500,
});

export const sectionGroup = style({
  display: "flex",
  flexDirection: "column",
  gap: "4rem",
});

export const buttonWrap = style({
  width: "34rem",

  left: "36rem",
  right: "36rem",
  bottom: "8.3rem",

  marginTop: "4rem",
  marginLeft: "auto",
  marginRight: "auto",
});
