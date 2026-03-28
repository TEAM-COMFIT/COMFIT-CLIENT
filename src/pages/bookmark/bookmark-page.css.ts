import { globalStyle, style } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";

export const page = style({
  width: "100%",
  maxWidth: "106rem",
  margin: "0 auto",
  paddingTop: `calc(${themeVars.height.header} + 8rem)`,
  paddingBottom: "8rem",
});

export const topRow = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "2rem",
});

export const headerSection = style({
  display: "flex",
  alignItems: "center",
  gap: "1.6rem",
});

export const titleIcon = style({
  width: "6.4rem",
  height: "6.4rem",
  flexShrink: 0,
});

export const titleWrap = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.4rem",
});

export const title = style({
  color: themeVars.color.black,
  ...themeVars.fontStyles.title_b_24,
});

export const subtitle = style({
  color: themeVars.color.gray500,
  ...themeVars.fontStyles.body_m_16,
});

export const actionSection = style({
  display: "flex",
  alignItems: "center",
  gap: "1.2rem",
});

export const searchWrap = style({
  display: "flex",
  alignItems: "center",
});

export const deleteButtonWrap = style({
  display: "inline-flex",
});

export const trashIcon = style({
  width: "2.4rem",
  height: "2.4rem",
  flexShrink: 0,
});

globalStyle(`${deleteButtonWrap} > button`, {
  width: "4.8rem",
  minWidth: "4.8rem",
  height: "4.8rem",
  padding: 0,
  borderRadius: "12px",
  backgroundColor: themeVars.color.blue600,
  borderColor: themeVars.color.blue600,
  color: themeVars.color.white,
});

globalStyle(`${deleteButtonWrap} > button:hover:not(:disabled)`, {
  backgroundColor: themeVars.color.blue600,
  borderColor: themeVars.color.blue600,
});

globalStyle(`${deleteButtonWrap} > button:active:not(:disabled)`, {
  backgroundColor: themeVars.color.blue600,
  borderColor: themeVars.color.blue600,
});

globalStyle(`${deleteButtonWrap} > button:disabled`, {
  backgroundColor: themeVars.color.blue600,
  borderColor: themeVars.color.blue600,
  color: themeVars.color.white,
});

export const tableSection = style({
  marginTop: "5rem",
});

export const paginationSection = style({
  marginTop: "4.8rem",
  display: "flex",
  justifyContent: "center",
});
