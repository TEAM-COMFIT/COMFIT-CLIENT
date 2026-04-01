import { style } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";

export const emptyContent = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
});

export const emptyImageWrap = style({
  width: "36rem",
});

export const emptyImage = style({
  width: "100%",
  height: "auto",
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
