import { globalStyle, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { fontStyles } from "@/shared/styles/font-style.css";
import { color } from "@/shared/styles/tokens/color.css";

export const container = recipe({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    padding: "0.6rem 0.8rem 0.6rem 1.6rem",

    borderRadius: "16px",
    border: `2px solid ${color.blue600}`,
    background: color.white,
  },

  variants: {
    size: {
      full: {
        width: "100%",
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
        background: color.gray100,
        borderColor: color.gray300,
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
  border: "none",
  outline: "none",
  background: "transparent",
  color: color.black,

  ...fontStyles.body_m_16,

  "::placeholder": {
    color: color.gray400,
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
});

export const icon = style({
  color: color.blue600,
});

globalStyle(`${icon} *`, {
  fill: "currentColor",
  stroke: "currentColor",
});

globalStyle(`${container.classNames.base}:has(${input}:focus)`, {
  borderColor: color.blue600,
  boxShadow: `0 0 0 0.3rem ${color.blue100}`,
});

globalStyle(`${container.classNames.variants.disabled.true} ${iconButton}`, {
  cursor: "not-allowed",
  opacity: 0.5,
});
