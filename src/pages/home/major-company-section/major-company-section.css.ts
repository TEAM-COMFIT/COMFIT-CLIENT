import { style } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";

export const majorSection = style({
  display: "flex",
  flexDirection: "column",
  gap: "5.2rem",
  alignItems: "center",
  justifyContent: "center",
  width: "106rem",
  marginTop: "7rem",
  marginBottom: "16rem",
});

export const header = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
  width: "100%",
});

export const textGroup = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
});

export const subTitle = style({
  ...themeVars.fontStyles.hding_m_22,
  color: themeVars.color.gray500,
});

export const title = style({
  ...themeVars.fontStyles.title_b_28,
  color: themeVars.color.gray700,
});

export const cardGrid = style({
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  gap: "2rem",
  alignItems: "stretch",
  width: "100%",
});

export const smallCards = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.6rem",
});
