import { style } from "@vanilla-extract/css";
import { themeVars } from "@/app/styles";

export const appContainer = style({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  color: themeVars.color.blue300,
  backgroundColor: themeVars.color.blue500,
  border: '1px solid red',
  //   color: "#ff0000",
});
