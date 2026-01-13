import { style, styleVariants } from "@vanilla-extract/css";

import { themeVars } from "@app/styles";

const baseStyle = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  boxSizing: "border-box",

  userSelect: "none",

  padding: "0.8rem 1.6rem",
  border: "1.5px solid transparent",
  borderRadius: "12px",

  whiteSpace: "nowrap",
  cursor: "pointer",
  transition: "all 0.2s ease-in-out",

  selectors: {
    "&:disabled": {
      opacity: 1,
      backgroundColor: themeVars.color.gray100,
      color: themeVars.color.gray400,
      borderColor: "var(--Line-normal, rgba(112, 115, 124, 0.22))",
    },
  },
});

// variant
export const buttonVariants = styleVariants({
  primary: [
    baseStyle,
    {
      backgroundColor: themeVars.color.blue500,
      color: themeVars.color.white,
      selectors: {
        "&:hover:not(:disabled)": {
          backgroundColor: themeVars.color.blue600,
        },
        "&:active:not(:disabled)": {
          backgroundColor: themeVars.color.blue600,
        },
      },
    },
  ],

  secondary: [
    baseStyle,
    {
      backgroundColor: themeVars.color.white,
      color: themeVars.color.blue600,
      borderColor: themeVars.color.blue600,
      selectors: {
        "&:active:not(:disabled)": {
          backgroundColor: themeVars.color.blue200,
        },
      },
    },
  ],
});

// size
export const buttonSizes = styleVariants({
  full: {
    width: "34rem",
    height: "6rem",
    ...themeVars.fontStyles.hline_m_18,
  },
  large: {
    width: "16rem",
    height: "6rem",
    ...themeVars.fontStyles.body_m_16,
  },
  medium: {
    width: "12rem",
    height: "4.8rem",
    ...themeVars.fontStyles.body_m_16,
  },
  small: {
    width: "8rem",
    height: "4rem",
    borderRadius: "8px",
    ...themeVars.fontStyles.body_m_14,
  },
});

export type ButtonVariant = keyof typeof buttonVariants;
export type ButtonSize = keyof typeof buttonSizes;
