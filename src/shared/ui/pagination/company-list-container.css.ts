import { style } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";

export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
});

export const filterWrapper = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  width: "100%",
  marginBottom: "3.2rem",
  color: themeVars.color.gray500,
  ...themeVars.fontStyles.hline_m_18,
  gap: "0.8rem",
});

export const toggle = style({
  marginLeft: "0.8rem",
});

export const companyGridStyle = style({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  rowGap: "4rem",
  columnGap: "2rem",
  paddingBottom: "6rem",
  // border: "1px solid red",
  // width: "100%",
});
