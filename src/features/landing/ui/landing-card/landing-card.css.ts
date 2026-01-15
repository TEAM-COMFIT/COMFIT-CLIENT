import { style } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";

/* ---------- Card ---------- */

export const card = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  width: "105.8rem",
  height: "16rem",
  padding: "0 2.8rem 0 4rem",

  borderRadius: "16px",
  backgroundColor: themeVars.color.white,

  color: themeVars.color.blue300,

  transform: "scale(1)",
  transition: `
    transform 0.18s ease,
    background-color 0.18s ease,
    color 0.18s ease
  `,
  transformOrigin: "center",

  selectors: {
    "&:hover": {
      transform: "scale(1.04)",
      backgroundColor: themeVars.color.blue600,
      color: themeVars.color.white,
    },
  },
});

/* ---------- Text Group ---------- */
export const textGroup = style({
  display: "grid",
  gridTemplateColumns: "20.3rem 1fr",
  columnGap: "2.4rem",
  alignItems: "start",
});

/* ---------- Title ---------- */

export const title = style({
  ...themeVars.fontStyles.title_b_24,
  whiteSpace: "pre-line",
});

/* ---------- Content ---------- */

export const content = style({
  ...themeVars.fontStyles.hding_m_20,
  whiteSpace: "pre-line",
});

/* ---------- Image ---------- */
export const sideImage = style({
  width: "18rem",
  height: "16rem",
  objectFit: "contain",
  opacity: 0.3,
  transition: "opacity 0.2s ease",

  selectors: {
    [`${card}:hover &`]: {
      opacity: 1,
    },
  },
});
