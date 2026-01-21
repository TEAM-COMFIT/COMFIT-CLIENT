import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { themeVars } from "@/app/styles";

export const modal = style({
  display: "none",
  selectors: {
    "&[open]": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  width: "100vw",
  height: "100vh",
  border: "none",
  background: "transparent",
});

export const modalContent = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "60rem",
  height: "46rem",
  padding: "1.5rem 1.6rem 4.8rem 1.6rem",
  borderRadius: "1.2rem",
  backgroundColor: themeVars.color.white,
});

export const XButton = style({
  alignSelf: "flex-end",
  color: "black",
});

export const Content = recipe({
  base: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    textAlign: "center",
  },
  variants: {
    type: {
      default: {
        justifyContent: "center",
        gap: "1.6rem",
      },
      auto: {
        justifyContent: "flex-end",
        gap: "0.8rem",
      },
    },
  },
  defaultVariants: {
    type: "default",
  },
});

export const Title = style({
  whiteSpace: "pre-wrap",
  color: themeVars.color.blue600,
  ...themeVars.fontStyles.title_b_28,
});

export const SubTitle = style({
  whiteSpace: "pre-wrap",
  color: themeVars.color.gray500,
  ...themeVars.fontStyles.hline_m_18,
});

export const Image = style({
  alignItems: "flex-end",
  width: "28rem",
  height: "28rem",
  aspectRatio: 1 / 1,
  marginBottom: "-2rem",
});

export const Buttons = style({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  gap: "1.6rem",
});
