import { globalStyle, style, styleVariants } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";
import { screen } from "@/shared/styles/tokens/screen.css";

export const containerBase = style({
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  width: "32rem",
  padding: "2.8rem",
  borderRadius: "16px",
  backgroundColor: themeVars.color.white,
  boxShadow: themeVars.shadow.shadow2,
  gap: "1.6rem",

  ...screen.mobile({
    position: "relative",
    width: "26.4rem",
  }),
});

export const containerVariants = styleVariants({
  0: {
    top: "17.4rem",
    left: "42.6rem",
    zIndex: 1,
    ...screen.mobile({
      inset: 0,
      marginLeft: "auto",
    }),
  },
  1: {
    top: "31.5rem",
    left: "19rem",
    zIndex: 2,
    ...screen.mobile({
      inset: 0,
      marginRight: "auto",
    }),
  },
  2: {
    top: "45.5rem",
    left: "37rem",
    zIndex: 3,
    backgroundColor: themeVars.color.blue200,
    ...screen.mobile({
      inset: 0,
      marginLeft: "auto",
    }),
  },
});

export const header = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const title = style({
  whiteSpace: "pre-wrap",
  color: themeVars.color.gray700,
  ...themeVars.fontStyles.hding_b_20,

  ...screen.mobile({
    ...themeVars.fontStyles.body_b_16,
  }),
});

export const description = style({
  whiteSpace: "pre-wrap",
  color: themeVars.color.gray500,
  ...themeVars.fontStyles.cap_m_12,
});

export const iconWrapper = style({
  padding: "0.6rem",
  borderRadius: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: themeVars.color.blue100,
});

globalStyle(`${containerBase}:last-child ${iconWrapper}`, {
  backgroundColor: themeVars.color.blue300,
});
