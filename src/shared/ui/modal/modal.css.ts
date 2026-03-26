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

export const modalContent = recipe({
  base: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "12px",
    backgroundColor: themeVars.color.white,
  },
  variants: {
    size: {
      default: {
        width: "52rem",
        height: "36.2rem",
        padding: "1.6rem 1.6rem 4rem 1.6rem",
      },
      auto: {
        width: "auto",
        height: "auto",
        maxWidth: "90vw",
        maxHeight: "60vh",
        padding: "0",
      },
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export const XButton = style({
  maxWidth: "2.4rem",
  maxHeight: "2.4rem",
  alignSelf: "flex-end",
  color: "black",
});

export const Content = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: "1.6rem",
  flex: 1,
  textAlign: "center",
  padding: "1.6rem",
});

export const TitleGroup = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.4rem",
});

export const Title = style({
  whiteSpace: "pre-wrap",
  color: themeVars.color.gray700,
  ...themeVars.fontStyles.hding_b_22,
});

export const SubTitle = style({
  whiteSpace: "pre-wrap",
  color: themeVars.color.gray500,
  ...themeVars.fontStyles.body_m_14,
});

export const Icon = style({
  width: "8rem",
  height: "8rem",
  padding: "1.6rem",
  borderRadius: "40px",
  backgroundColor: themeVars.color.blue100,
});

export const Image = style({
  alignItems: "flex-end",
  width: "17.5rem",
  height: "17.5rem",
  aspectRatio: 1 / 1,
});

export const Buttons = style({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  gap: "1.6rem",
  padding: "1.6rem",
});
