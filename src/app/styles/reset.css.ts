import { globalStyle } from "@vanilla-extract/css";

globalStyle("*", {
  boxSizing: "border-box",
  margin: "0",
  padding: "0",
});

globalStyle("html:focus-within", {
  scrollBehavior: "smooth",
});

globalStyle("body", {
  minHeight: "100dvh",
});

globalStyle("h1, h2, h3, h4, h5, h6", {
  fontSize: "inherit",
  fontWeight: "inherit",
});

globalStyle("table", {
  textIndent: "0",
  borderColor: "inherit",
  borderCollapse: "collapse",
});

globalStyle("button, select", {
  textTransform: "none",
});

globalStyle("ol, ul, menu", {
  listStyle: "none",
});

globalStyle("textarea", {
  resize: "none",
});

globalStyle(":disabled", {
  cursor: "default",
});

globalStyle("img, picture", {
  maxWidth: "100%",
  height: "auto",
  display: "block",
});
