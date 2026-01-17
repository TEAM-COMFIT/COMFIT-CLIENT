import { style, createVar } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { themeVars } from "@/app/styles";

export const bgImageUrl = createVar();

/* ---------- Base ---------- */
export const card = recipe({
  base: {
    position: "relative",
    backgroundImage: bgImageUrl,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",

    borderRadius: "16px",
    boxShadow: themeVars.shadow.shadow1,
    textAlign: "left",
  },

  variants: {
    type: {
      medium: {
        width: "43rem",
        height: "13.2rem",
        paddingLeft: "2.4rem",
      },
      large: {
        width: "61rem",
        height: "28rem",
      },
    },
  },

  defaultVariants: {
    type: "medium",
  },
});

/* ---------- Content ---------- */

export const content = recipe({
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "0.8rem",
    color: themeVars.color.white,
  },

  variants: {
    type: {
      medium: {
        alignItems: "flex-start",
      },
      large: {
        position: "absolute",
        top: "2.9rem",
        left: "4rem",
        alignItems: "flex-start",
      },
    },
  },

  defaultVariants: {
    type: "medium",
  },
});

/* ---------- Title ---------- */

export const title = recipe({
  base: {
    color: themeVars.color.white,
  },
  variants: {
    type: {
      medium: themeVars.fontStyles.hding_b_20,
      large: themeVars.fontStyles.title_b_24,
    },
  },
  defaultVariants: {
    type: "medium",
  },
});

/* ---------- Detail Icon ---------- */

export const detailIcon = style({
  position: "absolute",
  width: "8rem",
  height: "8rem",
  right: "2rem",
  bottom: "2rem",
});
