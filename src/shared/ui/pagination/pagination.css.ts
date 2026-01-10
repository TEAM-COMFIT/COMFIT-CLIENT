import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { themeVars } from "@/app/styles";

export const paginationWrapper = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.8rem",
});

export const buttonBase = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "4.4rem",
  height: "4.4rem",
  ...themeVars.fontStyles.body_m_16,
});

export const buttonVariants = recipe({
  base: buttonBase,
  variants: {
    variant: {
      arrow: {},
      number: {},
    },
    active: {
      true: {},
      false: {},
    },
  },

  compoundVariants: [
    {
      variants: { variant: "arrow", active: true },
      style: { color: themeVars.color.gray500 },
    },
    {
      variants: { variant: "arrow", active: false },
      style: { color: themeVars.color.gray200 },
    },
    {
      variants: { variant: "number", active: true },
      style: { color: themeVars.color.black },
    },
    {
      variants: { variant: "number", active: false },
      style: { color: themeVars.color.gray400 },
    },
  ],
  defaultVariants: {
    variant: "number",
    active: false,
  },
});
