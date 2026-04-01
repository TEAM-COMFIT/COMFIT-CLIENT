import { style } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";

export const emptyContent = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
});

export const emptyImage = style({
  width: "34.3rem",
  height: "25.2rem",
  display: "block",
});

export const emptyTitle = style({
  marginTop: "1rem",
  color: themeVars.color.gray800,
  ...themeVars.fontStyles.title_b_28,
});

export const emptyDescription = style({
  marginTop: "0.8rem",
  color: themeVars.color.gray500,
  ...themeVars.fontStyles.hline_m_18,
});
