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
  color: themeVars.color.gray800,
  ...themeVars.fontStyles.body_m_16,
});

export const itemTitle = style({
  color: themeVars.color.black,
  textAlign: "left",
  ...themeVars.fontStyles.hline_b_18,
});

export const whiteSpacePre = style({
  whiteSpace: "pre-wrap", // \n 줄바꿈 반영
  lineHeight: "1.6",
});

export const listContent = style({
  marginBottom: "1.6rem",
  selectors: {
    "&:last-child": {
      marginBottom: 0,
    },
  },
});
