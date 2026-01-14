import { style, styleVariants } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";

export const appContainer = style({
  display: "flex",
  flexDirection: "column",
  color: themeVars.color.gray700,
  ...themeVars.fontStyles.title_b_28,
});

export const textboxPreviewSection = style({
  marginTop: "6rem",
  display: "flex",
  flexDirection: "column",
  gap: "2.4rem",
});

export const textboxPreviewHeader = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "1.6rem",
});

export const textboxPreviewTitle = style({
  ...themeVars.fontStyles.hline_m_18,
  color: themeVars.color.gray800,
});

export const textboxPreviewToggle = style({
  display: "inline-flex",
  gap: "0.8rem",
});

export const textboxPreviewToggleButton = style({
  height: "4rem",
  padding: "0.8rem 1.2rem",

  borderRadius: "12px",
  border: `1.5px solid ${themeVars.color.normal}`,
  backgroundColor: themeVars.color.white,

  cursor: "pointer",

  ...themeVars.fontStyles.body_r_16,
  color: themeVars.color.gray800,
});

export const textboxPreviewToggleButtonState = styleVariants({
  inactive: {},
  active: {
    borderColor: themeVars.color.blue600,
    backgroundColor: themeVars.color.blue200,
    color: themeVars.color.blue600,
  },
});

export const textboxPreviewList = style({
  display: "flex",
  flexDirection: "column",
  gap: "3.2rem",
});

export const textboxPreviewItem = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
});

export const textboxPreviewLabel = style({
  ...themeVars.fontStyles.body_m_16,
  color: themeVars.color.gray800,
});
