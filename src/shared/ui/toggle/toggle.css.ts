import { recipe } from "@vanilla-extract/recipes";

import { themeVars } from "@/app/styles";

export const toggleTrack = recipe({
  base: {
    width: "4.2rem",
    height: "2.4rem",
    padding: "0.2rem",

    display: "inline-flex",
    alignItems: "center",

    border: "none",
    borderRadius: "18px",

    transition: "background-color 0.2s ease",

    selectors: {
      "&:focus-visible": {
        outline: `0.2rem solid ${themeVars.color.blue400}`,
        outlineOffset: "0.2rem",
      },
    },
  },
  variants: {
    checked: {
      true: { backgroundColor: themeVars.color.blue500 },
      false: { backgroundColor: themeVars.color.blue300 },
    },
  },
});

export const toggleThumb = recipe({
  base: {
    width: "2rem",
    height: "2rem",
    borderRadius: "50%",
    backgroundColor: themeVars.color.white,

    boxShadow: "0 0.2rem 0.4rem 0 rgba(0,0,0,0.25)",
    transition: "transform 0.2s ease",
  },
  variants: {
    checked: {
      true: { transform: "translateX(1.8rem)" },
      false: { transform: "translateX(0)" },
    },
  },
});
