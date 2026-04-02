import { style } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";

export const checkbox = style({
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "2.4rem",
  height: "2.4rem",
  cursor: "pointer",
  verticalAlign: "middle",
});

export const input = style({
  position: "absolute",
  inset: 0,
  margin: 0,
  opacity: 0,
  cursor: "pointer",
  selectors: {
    "&:focus-visible + span": {
      outline: `0.2rem solid ${themeVars.color.blue400}`,
      outlineOffset: "0.2rem",
    },
  },
});

export const icon = style({
  width: "2.4rem",
  height: "2.4rem",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  pointerEvents: "none",
});

export const iconSvg = style({
  width: "2.4rem",
  height: "2.4rem",
  flexShrink: 0,
});
