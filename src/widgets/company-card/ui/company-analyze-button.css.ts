import { style } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";

export const button = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.8rem",

  width: "21.8rem",
  height: "4.8rem",
  padding: "0.8rem 1.6rem",
  borderRadius: "12px",

  backgroundColor: themeVars.color.blue100,
  color: themeVars.color.blue600,
  border: "none",

  ...themeVars.fontStyles.body_m_16,

  transition: "background-color 0.2s ease, color 0.2s ease",

  selectors: {
    "&:active": {
      backgroundColor: themeVars.color.blue500,
      color: themeVars.color.white,
    },
  },
});

export const icon = style({
  width: "2rem",
  height: "2rem",
  flexShrink: 0,
});
