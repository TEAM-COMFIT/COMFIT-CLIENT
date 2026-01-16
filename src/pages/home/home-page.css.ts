import { style, styleVariants } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";

export const appContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: themeVars.color.blue300,
  ...themeVars.fontStyles.title_b_28,
});

export const textfieldPreviewSection = style({
  marginTop: "6rem",
  display: "flex",
  flexDirection: "column",
  gap: "2.4rem",
});

export const textfieldPreviewHeader = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "1.6rem",
});

export const textfieldPreviewTitle = style({
  ...themeVars.fontStyles.hline_m_18,
  color: themeVars.color.gray800,
});

export const textfieldPreviewToggle = style({
  display: "inline-flex",
  gap: "0.8rem",
});

export const textfieldPreviewToggleButton = style({
  height: "4rem",
  padding: "0.8rem 1.2rem",

  borderRadius: "12px",
  border: `1.5px solid ${themeVars.color.normal}`,
  backgroundColor: themeVars.color.white,

  cursor: "pointer",

  ...themeVars.fontStyles.body_r_16,
  color: themeVars.color.gray800,
});

export const textfieldPreviewToggleButtonState = styleVariants({
  inactive: {},
  active: {
    borderColor: themeVars.color.blue600,
    backgroundColor: themeVars.color.blue200,
    color: themeVars.color.blue600,
  },
});

export const textfieldPreviewList = style({
  display: "flex",
  flexDirection: "column",
  gap: "3.2rem",
});

export const textfieldPreviewItem = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
});

export const textfieldPreviewLabel = style({
  ...themeVars.fontStyles.body_m_16,
  color: themeVars.color.gray800,
});
