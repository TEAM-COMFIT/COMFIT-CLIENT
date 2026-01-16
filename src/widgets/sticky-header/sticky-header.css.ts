import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { themeVars } from "@/app/styles";

export const layout = style({
  position: "sticky",
  top: "0",
  width: "100%",
  padding: "3rem 19rem",
  marginTop: themeVars.height.header,
  backgroundColor: themeVars.color.white,
  borderBottom: `1px solid ${themeVars.color.normal}`,
});

export const header = style({
  display: "flex",
  justifyContent: "space-between",
});

export const button = recipe({
  base: {
    display: "flex",
    maxWidth: "12rem",
    height: "4rem",
    padding: "0.8rem 0.9rem",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.4rem",

    borderRadius: "8px",
    transition: "background-color 0.1s ease-in",
    ...themeVars.fontStyles.body_r_14,
  },
  variants: {
    isDefault: {
      true: {
        border: `1.5px solid ${themeVars.color.blue600}`,
        color: themeVars.color.blue600,
        backgroundColor: themeVars.color.white,
        selectors: {
          "&:hover": {
            backgroundColor: themeVars.color.blue100,
          },
          "&:active:not(:disabled)": {
            backgroundColor: themeVars.color.blue200,
          },
        },
      },
      false: {
        border: `1px solid ${themeVars.color.blue600}`,
        color: themeVars.color.white,
        backgroundColor: themeVars.color.blue600,
      },
    },
  },
});

export const right = style({
  display: "flex",
  gap: "1.6rem",
});
