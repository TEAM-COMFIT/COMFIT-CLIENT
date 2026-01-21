import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

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

export const highlightText = style({
  color: themeVars.color.gray800,
  ...themeVars.fontStyles.hline_b_18,
  marginBottom: "1rem",

  selectors: {
    "&:first-child": {
      color: themeVars.color.blue600,
    },
  },
});

export const blueTitle = recipe({
  // 공통 Blue Bold 스타일
  base: {
    color: themeVars.color.blue600,
    ...themeVars.fontStyles.hline_b_18, // hline_b_18이 더 상위 스타일이라 판단하여 기준 설정
  },

  variants: {
    size: {
      large: {
        ...themeVars.fontStyles.hline_b_18,
      },
      small: {
        ...themeVars.fontStyles.body_b_16,
      },
    },
    // 아래 항목과의 간격을 통일 (리뷰대로 marginBottom으로 통일)
    spacing: {
      element: { marginBottom: "1.6rem" },
      perspective: { marginBottom: "1.2rem" },
      none: { marginBottom: 0 },
    },
  },

  defaultVariants: {
    size: "large",
    spacing: "element",
  },
});

export const densityTitle = style({
  color: themeVars.color.gray800,
  ...themeVars.fontStyles.hline_b_18,
});

export const perspectiveReason = style({
  paddingTop: "0.5rem",
});

export const appealDetails = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});
