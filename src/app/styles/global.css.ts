import "@styles/text.css";
import "./reset.css";

import { globalStyle } from "@vanilla-extract/css";

import { themeVars } from "./theme.css";

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
