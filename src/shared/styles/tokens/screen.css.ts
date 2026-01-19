import type { CSSProperties } from "react";

export const screen = {
  mobile: (css: CSSProperties) => ({
    "@media": {
      "(max-width: 425px)": css,
    },
  }),
} as const;
