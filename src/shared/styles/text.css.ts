import { globalFontFace, globalStyle } from "@vanilla-extract/css";

globalFontFace("Pretendard", {
  src: 'url("/fonts/Pretendard-Regular.woff2") format("woff2")',
  fontWeight: "400 900",
  fontStyle: "normal",
});

globalStyle("body", {
  "@layer": {
    base: {
      fontFamily: "Pretendard",
    },
  },
});
