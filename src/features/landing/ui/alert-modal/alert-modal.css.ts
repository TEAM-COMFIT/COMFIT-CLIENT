import { style } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";

export const container = style({
  position: "fixed",
  inset: 0,
  margin: "auto",
  width: "60rem",
  height: "46rem",
  padding: "1.4rem 1.3rem",
  border: "none",
  borderRadius: "12px",
  backgroundColor: themeVars.color.blue100,
  overflow: "hidden",

  selectors: {
    "&::backdrop": {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      backdropFilter: "blur(2px)",
    },
  },
});

export const buttonHandler = style({
  display: "flex",
  justifyContent: "flex-end",
  width: "100%",
});

export const closeButton = style({
  textAlign: "left",
});

export const title = style({
  marginTop: "1.8rem",
  textAlign: "center",
  ...themeVars.fontStyles.title_b_28,
});

export const blueText = style({
  color: themeVars.color.blue600,
});

export const image = style({
  width: "50rem",
  aspectRatio: 1 / 1,
});
