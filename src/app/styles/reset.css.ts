import { globalStyle } from "@vanilla-extract/css";

globalStyle("*", {
  boxSizing: "border-box",
  borderWidth: "0",
  borderStyle: "solid",
  borderColor: "currentColor",
});

globalStyle("::before, ::after", {
  boxSizing: "inherit",
  borderWidth: "0",
  borderStyle: "solid",
  borderColor: "currentColor",
});

globalStyle("html, :host", {
  lineHeight: "1.5",
  WebkitTextSizeAdjust: "100%",
  MozTabSize: "4",
  tabSize: "4",
  fontFamily: "Pretendard, system-ui, sans-serif",
  fontFeatureSettings: "normal",
  fontVariationSettings: "normal",
  WebkitTapHighlightColor: "transparent",
});

globalStyle("body", {
  margin: "0",
  lineHeight: "inherit",
});

globalStyle("hr", {
  height: "0",
  color: "inherit",
  borderTopWidth: "1px",
});

globalStyle("abbr:where([title])", {
  textDecoration: "underline dotted",
});

globalStyle("h1, h2, h3, h4, h5, h6", {
  fontSize: "inherit",
  fontWeight: "inherit",
});

globalStyle("a", {
  color: "inherit",
  textDecoration: "inherit",
});

globalStyle("b, strong", {
  fontWeight: "bolder",
});

globalStyle("p", {
  margin: "0",
});

globalStyle("code, kbd, samp, pre", {
  fontFamily: "monospace",
  fontFeatureSettings: "normal",
  fontVariationSettings: "normal",
  fontSize: "1em",
});

globalStyle("small", {
  fontSize: "80%",
});

globalStyle("sub, sup", {
  fontSize: "75%",
  lineHeight: "0",
  position: "relative",
  verticalAlign: "baseline",
});

globalStyle("sub", {
  bottom: "-0.25em",
});

globalStyle("sup", {
  top: "-0.5em",
});

globalStyle("table", {
  textIndent: "0",
  borderColor: "inherit",
  borderCollapse: "collapse",
});

globalStyle("button, input, optgroup, select, textarea", {
  fontFamily: "inherit",
  fontFeatureSettings: "inherit",
  fontVariationSettings: "inherit",
  fontSize: "100%",
  fontWeight: "inherit",
  lineHeight: "inherit",
  letterSpacing: "inherit",
  color: "inherit",
  margin: "0",
  padding: "0",
});

globalStyle("button, select", {
  textTransform: "none",
});

globalStyle(
  'button, input:where([type="button"]), input:where([type="reset"]), input:where([type="submit"])',
  {
    WebkitAppearance: "button",
    backgroundColor: "transparent",
    backgroundImage: "none",
  }
);

globalStyle(":-moz-focusring", {
  outline: "auto",
});

globalStyle(":-moz-ui-invalid", {
  boxShadow: "none",
});

globalStyle("progress", {
  verticalAlign: "baseline",
});

globalStyle("::-webkit-inner-spin-button, ::-webkit-outer-spin-button", {
  height: "auto",
});

globalStyle('[type="search"]', {
  WebkitAppearance: "textfield",
  outlineOffset: "-2px",
});

globalStyle("::-webkit-search-decoration", {
  WebkitAppearance: "none",
});

globalStyle("::-webkit-file-upload-button", {
  WebkitAppearance: "button",
  font: "inherit",
});

globalStyle("summary", {
  display: "list-item",
});

globalStyle("fieldset", {
  margin: "0",
  padding: "0",
});

globalStyle("legend", {
  padding: "0",
});

globalStyle("ol, ul, menu", {
  listStyle: "none",
  margin: "0",
  padding: "0",
});

globalStyle("dialog", {
  padding: "0",
});

globalStyle("textarea", {
  resize: "vertical",
});

globalStyle("input::placeholder, textarea::placeholder", {
  opacity: "1",
  color: "#9ca3af",
});

globalStyle('button, [role="button"]', {
  cursor: "pointer",
});

globalStyle(":disabled", {
  cursor: "default",
});

globalStyle("img, svg, video, canvas, audio, iframe, embed, object", {
  display: "block",
  verticalAlign: "middle",
});

globalStyle("img, video", {
  maxWidth: "100%",
  height: "auto",
});

globalStyle('[hidden]:where(:not([hidden="until-found"]))', {
  display: "none",
});

globalStyle(
  "html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video",
  {
    margin: 0,
    padding: 0,
    border: 0,
    verticalAlign: "baseline",
  }
);
