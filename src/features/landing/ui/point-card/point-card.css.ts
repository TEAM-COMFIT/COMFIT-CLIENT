import { style } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";
import { screen } from "@/shared/styles/tokens/screen.css";

export const layout = style({
  display: "flex",
  gap: "3.2rem",

  ...screen.mobile({
    flexDirection: "column",
    gap: "4rem",
  }),
});

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: "3rem",
  width: "34.3rem",
  height: "25.4rem",
  padding: "4rem 5rem",
  borderRadius: "12px",
  boxShadow: themeVars.shadow.shadow2,
  transition: "transform 0.2s linear",

  selectors: {
    "&:hover": {
      transform: "scale(1.05)",
    },
  },

  ...screen.mobile({
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
  }),
});

export const header = style({
  display: "flex",
  flexDirection: "column",
  textAlign: "left",

  ...screen.mobile({
    textAlign: "center",
  }),
});

export const title = style({
  whiteSpace: "pre-wrap",
  color: themeVars.color.gray700,
  ...themeVars.fontStyles.hding_b_22,
  fontWeight: 700,
});

export const blueTitle = style({
  background: themeVars.gradient.bluePrimary,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",

  backgroundClip: "text",
  color: "transparent",
  ...themeVars.fontStyles.hding_b_22,
});

export const description = style({
  whiteSpace: "pre-wrap",
  color: themeVars.color.gray500,
  ...themeVars.fontStyles.body_r_16,

  ...screen.mobile({
    textAlign: "center",
  }),
});
