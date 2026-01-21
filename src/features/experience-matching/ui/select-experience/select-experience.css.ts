import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { themeVars } from "@/app/styles";

export const layout = style({
  paddingTop: "1.7rem",
});

export const totalCount = style({
  marginBottom: "0.8rem",
  color: themeVars.color.gray800,
  ...themeVars.fontStyles.body_b_14,
});

export const blueCount = style({
  color: themeVars.color.blue600,
});

export const box = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  alignContent: "start",
  gridAutoRows: "max-content",
  gap: "1.6rem",
  width: "106rem",
  height: "39.2rem",
  padding: "1.6rem 0.2rem 1.6rem 2rem",

  overflowY: "auto",
  borderRadius: "16px",
  border: `1.5px ${themeVars.color.normal} solid`,
  backgroundColor: themeVars.color.gray100,

  selectors: {
    "&::-webkit-scrollbar": {
      width: "1.6rem",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: themeVars.color.gray300,
      borderRadius: "100px",
      backgroundClip: "padding-box",
      border: "2px solid transparent",
      borderRight: "4px solid transparent",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "transparent", // 트랙 배경을 투명하게
      margin: "1.6rem 0", // 위아래 여백을 줘서 꽉 차게 보이지 않도록 함
    },
  },
});

export const card = recipe({
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "1.9rem",
    width: "32rem",
    height: "14rem",
    borderRadius: "12px",
    backgroundColor: themeVars.color.white,
    padding: "2.8rem",
    selectors: {
      "&:hover": {
        cursor: "pointer",
      },
    },
  },
  variants: {
    isSelect: {
      true: {
        border: `2px ${themeVars.color.blue500} solid`,
      },
      false: {
        border: `1.5px ${themeVars.color.normal} solid`,
      },
    },
  },
  defaultVariants: {
    isSelect: false,
  },
});

export const cardTitle = style({
  width: "13.4rem",
  color: themeVars.color.gray800,
  ...themeVars.fontStyles.body_b_16,
});

export const cardDate = style({
  color: themeVars.color.gray500,
  ...themeVars.fontStyles.cap_m_12,
});

export const buttonWrapper = style({
  display: "flex",
  justifyContent: "flex-end",
  gap: "1.6rem",
  marginTop: "2.4rem",
});
