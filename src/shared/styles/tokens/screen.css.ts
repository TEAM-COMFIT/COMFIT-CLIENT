import type { CSSProperties } from "react";

export const screenBreakpoints = {
  mobile: "(min-width: 375px)",
} as const;

export const screen = {
  mobile: (css: CSSProperties) => ({
    "@media": {
      "(max-width: 375px)": css,
    },
  }),
} as const;
