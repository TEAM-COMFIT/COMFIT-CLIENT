import { style, styleVariants } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";

export const toggleTrack = style({
  width: "4.2rem",
  height: "2.4rem",
  padding: "0.2rem",
  boxSizing: "border-box",

  display: "inline-flex",
  alignItems: "center",

  border: "none",
  borderRadius: "18.6828px",
  cursor: "pointer",

  transition: "background-color 0.2s ease",

  selectors: {
    "&:focus-visible": {
      outline: `0.2rem solid ${themeVars.color.blue400}`,
      outlineOffset: "0.2rem",
    },
  },
});

export const toggleTrackState = styleVariants({
  on: { backgroundColor: themeVars.color.blue500 },
  off: { backgroundColor: themeVars.color.blue300 },
});

export const toggleThumb = style({
  width: "2rem",
  height: "2rem",
  borderRadius: "50%",
  backgroundColor: themeVars.color.white,

  boxShadow: "0 0.2rem 0.4rem 0 rgba(0,0,0,0.25)",
  transition: "transform 0.2s ease",
});

export const toggleThumbState = styleVariants({
  off: { transform: "translateX(0)" },
  on: { transform: "translateX(1.8rem)" },
});
