import type { CSSProperties } from "react";

export const screen = {
  mobile: (css: CSSProperties) => ({
    "@media": {
      "(max-width: 452px)": css,
    },
  }),
} as const;
