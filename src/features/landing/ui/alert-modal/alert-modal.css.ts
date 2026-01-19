import { style } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";
import { screen } from "@/shared/styles/tokens/screen.css";

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

  ...screen.mobile({
    width: "33.2rem",
    height: "26.4rem",
  }),
});

export const buttonHandler = style({
  display: "flex",
  justifyContent: "flex-end",
  width: "100%",
});

export const closeButton = style({
  textAlign: "left",
});

export const closeIcon = style({
  ...screen.mobile({
    width: "2.4rem",
    height: "2.4rem",
  }),
});

export const title = style({
  marginTop: "1.8rem",
  textAlign: "center",
  ...themeVars.fontStyles.title_b_28,

  ...screen.mobile({
    marginTop: "1.2rem",
    ...themeVars.fontStyles.hline_b_18,
  }),
});

export const blueText = style({
  color: themeVars.color.blue600,
});

export const image = style({
  margin: "2.1rem auto 0 auto",
  width: "50rem",
  aspectRatio: 1 / 1,

  ...screen.mobile({
    width: "21.6rem",
    height: "16.3rem",
    aspectRatio: 216 / 163,
  }),
});
