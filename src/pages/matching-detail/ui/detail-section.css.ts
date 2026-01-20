import { style } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";

export const sectionContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "4.8rem",
  width: "100%",
});

export const itemWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.6rem",
  width: "100%",
  marginBottom: "1.2rem",
  color: themeVars.color.gray800,
  ...themeVars.fontStyles.body_m_16,
});

export const itemTitle = style({
  color: themeVars.color.black,
  textAlign: "left",
  ...themeVars.fontStyles.hline_b_18,
});

export const contentBold = style({
  ...themeVars.fontStyles.hline_m_18,
});
export const whiteSpacePre = style({
  whiteSpace: "pre-wrap", // \n 줄바꿈 반영
  lineHeight: "1.8",
});

export const listContent = style({
  marginBottom: "1.6rem",
  selectors: {
    "&:last-child": {
      marginBottom: 0,
    },
  },
});

export const hightlightText = style({
  color: themeVars.color.gray800,
  ...themeVars.fontStyles.hline_b_18,
  marginBottom: "1rem",

  selectors: {
    "&:first-child": {
      color: themeVars.color.blue600,
    },
  },
});

export const elementSubTitle = style({
  color: themeVars.color.blue600,
  ...themeVars.fontStyles.hline_b_18,
  marginBottom: "1.6rem",
});

export const densityTitle = style({
  color: themeVars.color.gray800,
  ...themeVars.fontStyles.hline_b_18,
});
// 수정 필요
export const perspectiveTitle = style({
  color: themeVars.color.blue600,
  ...themeVars.fontStyles.body_b_16,
  paddingBottom: "1.2rem",
});

export const perspectiveReason = style({
  paddingTop: "0.5rem",
});

export const appealDetails = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});
