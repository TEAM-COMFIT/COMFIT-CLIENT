import { style, styleVariants } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
});

export const grid = style({
  display: "grid",
  gridTemplateColumns: "repeat(4, 25rem)",
  columnGap: "2rem",
});

export const boxBase = style({
  background: themeVars.color.blue100,
  border: `1.5px solid ${themeVars.color.normal}`,
  borderRadius: "1.6rem",
  boxSizing: "border-box",
});

export const boxType = styleVariants({
  large: {
    width: "106rem",
    height: "24rem",
    padding: "4rem 2.8rem",
    display: "flex",
    flexDirection: "column",
    gap: "2.4rem",
    justifyContent: "flex-start",
  },

  medium: {
    width: "25rem",
    height: "20rem",
    padding: "3.1rem 2.8rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
});

export const mediumIconPadding = style({
  padding: "2.2rem 2.8rem 3.1rem",
});

export const largeRow = style({
  display: "flex",
  alignItems: "center",
  gap: "0.8rem",
});

export const largeText = style({
  ...themeVars.fontStyles.hding_m_20,
  color: themeVars.color.gray500,
});

export const mediumTitle = style({
  ...themeVars.fontStyles.hding_b_20,
  color: themeVars.color.gray800,
});

export const mediumBody = style({
  marginTop: "3.8rem",
  ...themeVars.fontStyles.hline_m_18,
  color: themeVars.color.gray500,
});

export const titleWithIcon = style({
  display: "flex",
  alignItems: "center",
  gap: "0.4rem",
});

export const iconWrap = style({
  width: "4.8rem",
  height: "4.8rem",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
});
