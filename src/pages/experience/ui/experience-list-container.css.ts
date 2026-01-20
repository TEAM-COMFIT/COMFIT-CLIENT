import { style } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";

export const container = style({
  width: "100%",
  maxWidth: "106rem",
  margin: "4rem auto 0",
  display: "flex",
  flexDirection: "column",
});

export const grid = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, 34rem)",
  gridAutoRows: "24rem",
  gap: "2rem",
  minHeight: "50rem",
});

export const card = style({
  width: "34rem",
  height: "24rem",
  padding: "4rem 2.8rem 2.8rem",
  display: "flex",
  flexDirection: "column",
  textAlign: "left",
  borderRadius: "1.6rem",
  border: `1.5px solid ${themeVars.color.normal}`,
  backgroundColor: themeVars.color.blue100,
  boxSizing: "border-box",
  cursor: "pointer",
});

export const cardHeader = style({
  display: "flex",
  flexDirection: "column",
});

export const title = style({
  maxWidth: "16.4rem",
  minHeight: "4.8rem",
  whiteSpace: "pre-line",
  color: themeVars.color.gray800,
  ...themeVars.fontStyles.body_r_16,
});

export const tag = style({
  marginTop: "2rem",
});

export const date = style({
  marginTop: "auto",
  color: themeVars.color.gray500,
  ...themeVars.fontStyles.body_r_16,
});

export const emptyState = style({
  width: "100%",
  minHeight: "50rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
});

export const emptyImage = style({
  display: "block",
  width: "36rem",
  height: "24rem",
});

export const emptyTitle = style({
  marginTop: "1.6rem",
  color: themeVars.color.gray800,
  ...themeVars.fontStyles.title_b_28,
});

export const emptyDescription = style({
  marginTop: "0.8rem",
  color: themeVars.color.gray500,
  ...themeVars.fontStyles.hline_m_18,
});

export const pagination = style({
  marginTop: "5.6rem",
  display: "flex",
  justifyContent: "center",
});
