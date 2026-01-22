import { style } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";
export const container = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  paddingTop: `${themeVars.height.header}`,
});
