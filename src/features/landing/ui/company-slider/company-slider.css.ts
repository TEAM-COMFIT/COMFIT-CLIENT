import { style, keyframes } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { screen } from "@/shared/styles/tokens/screen.css";

// 오른쪽 흐름: -50%(뒤쪽 세트)에서 시작해서 0%(앞쪽 세트)로 이동
const scrollRight = keyframes({
  "0%": { transform: "translateX(-50%)" },
  "100%": { transform: "translateX(0%)" },
});

export const layout = style({
  width: "100%",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  gap: "2.4rem",
  padding: "2rem 0",

  // 좌우 페이드 효과
  maskImage:
    "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
  WebkitMaskImage:
    "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",

  ...screen.mobile({
    padding: 0,
    gap: "2rem",
  }),
});

export const track = style({
  display: "flex",
  width: "max-content",
  animation: `${scrollRight} 20s linear infinite`,
  willChange: "transform",

  "@media": {
    "(prefers-reduced-motion: reduce)": {
      animation: "none",
    },
  },
});

export const slide = style({
  display: "flex",
  alignItems: "center",
  gap: "4rem",
  paddingRight: "4rem",
});

export const item = recipe({
  base: {
    flexShrink: 0,
    width: "30rem",
    height: "12rem",
    objectFit: "contain",
    ...screen.mobile({
      width: "13.2rem",
      height: "5.3rem",
    }),
  },
  variants: {
    isEven: {
      true: { marginTop: "2.4rem" },
    },
  },
});
