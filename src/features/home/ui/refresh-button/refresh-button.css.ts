import { style } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";

export const buttonWrapper = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid red",
  width: "10rem",
  height: "3rem",
  gap: "0.4rem",
  color: themeVars.color.gray500,
  ...themeVars.fontStyles.hline_m_18,
});

export const refreshIcon = style({
  width: "2.4rem",
  height: "2.4rem",
});
