import { style } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";

export const wrapper = style({
  width: "40rem",
  paddingBottom: "1.6rem",
});

export const modalHeader = style({
  width: "100%",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "1.6rem",
  borderBottom: `1px solid ${themeVars.color.normal}`,
  ...themeVars.fontStyles.hline_b_18,
});

export const buttonWrapper = style({
  position: "absolute",
  right: "1.6rem",
  width: "2.4rem",
  height: "2.4rem",
});

export const modalCotent = style({
  display: "flex",
  flexDirection: "column",
  gap: "2.4rem",
  textAlign: "left",
  height: "28rem",
  padding: "2rem 3rem",
  marginBottom: "2rem",
  overflowY: "auto",

  selectors: {
    "&::-webkit-scrollbar": {
      width: "1.2rem",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: themeVars.color.gray300,
      height: "50px",
      borderRadius: "100px",
      backgroundClip: "padding-box",
      border: `4px solid transparent`,
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "transparent",
      margin: "0.8rem 1.2rem",
    },
  },
});

export const title = style({
  color: themeVars.color.gray800,
  ...themeVars.fontStyles.body_b_14,
  fontWeight: 600,
  marginBottom: "0.8rem",
});

export const subTitle = style({
  color: themeVars.color.gray800,
  ...themeVars.fontStyles.cap_m_12,
  fontWeight: 500,
});

export const content = style({
  color: themeVars.color.gray500,
  ...themeVars.fontStyles.cap_m_12,
  fontWeight: 500,
});
