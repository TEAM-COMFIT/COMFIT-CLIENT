import "./reset.css";

import { globalStyle, globalFontFace } from "@vanilla-extract/css";

import PretendardWoff2 from "@shared/assets/fonts/PretendardVariable.woff2";

import { themeVars } from "./theme.css";

globalFontFace("Pretendard", {
  src: `url(${PretendardWoff2}) format("woff2")`,
  fontWeight: "100 900",
  fontStyle: "normal",
  fontDisplay: "swap",
});

globalStyle("html, body", {
  fontFamily: "Pretendard",
});

globalStyle(":root", {
  textRendering: "optimizeLegibility",
});

globalStyle("html", {
  fontSize: "62.5%",
});

globalStyle("html, body, #root", {
  height: "100%",
  backgroundColor: themeVars.color.white,
  color: themeVars.color.black,
});

globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
});

globalStyle("button", {
  cursor: "pointer",
  border: "none",
  padding: 0,
  background: "none",
});

globalStyle("img, svg, button", { userSelect: "none" });
