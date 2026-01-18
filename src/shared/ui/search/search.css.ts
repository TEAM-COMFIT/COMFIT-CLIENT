import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { themeVars } from "@/app/styles";

export const container = recipe({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    padding: "0.6rem 0.8rem 0.6rem 1.6rem",

    borderRadius: "16px",
    border: `2px solid ${themeVars.color.blue600}`,
    background: themeVars.color.white,

    selectors: {
      "&:focus-within": {
        borderColor: themeVars.color.blue600,
        boxShadow: `0 0 0 0.3rem ${themeVars.color.blue100}`,
      },
    },
  },

  variants: {
    size: {
      full: {
        width: "88rem",
        height: "6rem",
      },
      large: {
        width: "64rem",
        height: "6rem",
      },
      medium: {
        width: "54.8rem",
        height: "4.8rem",
      },
      small: {
        width: "28rem",
        height: "4.8rem",
      },
    },

    disabled: {
      true: {
        opacity: 0.6,
        cursor: "not-allowed",
        background: themeVars.color.gray100,
        borderColor: themeVars.color.gray300,
      },
      false: {},
    },
  },

  defaultVariants: {
    size: "full",
    disabled: false,
  },
});

export const input = style({
  flex: 1,
  minWidth: 0,
  height: "100%",
  color: themeVars.color.black,

  ...themeVars.fontStyles.body_m_16,

  selectors: {
    "&::placeholder": {
      color: themeVars.color.gray400,
    },
  },
});

export const iconButton = style({
  flexShrink: 0,

  width: "4.8rem",
  height: "4.8rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  padding: 0,
  border: 0,
  background: "transparent",
  cursor: "pointer",

  selectors: {
    [`${container.classNames.variants.disabled.true} &`]: {
      cursor: "not-allowed",
      opacity: 0.5,
    },
  },
});

export const icon = style({
  color: themeVars.color.blue600,
});
