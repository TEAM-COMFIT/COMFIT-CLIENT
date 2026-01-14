import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { themeVars } from "@/app/styles";

export const cancelIcon = style({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  width: "1.4rem",
  height: "1.4rem",
});

export const tag = recipe({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.8rem",
    ...themeVars.fontStyles.body_r_14,
  },

  variants: {
    type: {
      primary: {
        border: `1px solid ${themeVars.color.blue400}`,
        borderRadius: "8px",
        backgroundColor: themeVars.color.blue200,
        color: themeVars.color.blue600,
        padding: "0.4rem 1.2rem",
      },
      xlabel: {
        border: `1px solid ${themeVars.color.blue400}`,
        borderRadius: "8px",
        backgroundColor: themeVars.color.blue200,
        color: themeVars.color.blue600,
        padding: "0.4rem 1.2rem",
      },
      secondary: {
        border: `1px solid ${themeVars.color.purple200}`,
        borderRadius: "8px",
        backgroundColor: themeVars.color.purple100,
        color: themeVars.color.purple400,
        padding: "0.6rem 1.2rem",
      },
      register: {
        border: `1px solid ${themeVars.color.normal}`,
        borderRadius: "12px",
        backgroundColor: themeVars.color.blue200,
        color: themeVars.color.gray800,
        padding: "1rem 1.2rem",
      },
    },
  },

  defaultVariants: {
    type: "primary",
  },
});
