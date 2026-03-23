import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

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

export const modalContent = style({
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
      height: "5rem",
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
  display: "flex",
  flexDirection: "column",
  color: themeVars.color.gray500,
  ...themeVars.fontStyles.cap_m_12,
  fontWeight: 500,
  whiteSpace: "pre-wrap",
});

export const textStyle = recipe({
  base: {
    color: themeVars.color.gray800,
  },
  variants: {
    type: {
      title1: {
        ...themeVars.fontStyles.body_b_16,
        fontWeight: 700,
      },
      title2: {
        ...themeVars.fontStyles.body_b_14,
      },
      title3: {
        ...themeVars.fontStyles.body_r_14,
        fontWeight: 400,
      },
    },
  },
  defaultVariants: {
    type: "title1",
  },
});

export const flexColumn = recipe({
  base: {
    display: "flex",
    flexDirection: "column",
  },
  variants: {
    gap: {
      8: { gap: "0.8rem" },
      16: { gap: "1.6rem" },
      24: { gap: "2.4rem" },
    },
  },
});

export const tableWrapper = style({
  width: "100%",
  overflowX: "auto",
  selectors: {
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
});

export const table = style({
  width: "max-content",
  minWidth: "100%",
  borderCollapse: "collapse",
});

export const tCell = style({
  minWidth: "10rem",
  maxWidth: "25rem",
  padding: "0.8rem",
  border: `1px solid ${themeVars.color.gray200}`,
  fontWeight: 400,
  verticalAlign: "top",
  wordBreak: "keep-all",
});

export const thead = style({
  backgroundColor: themeVars.color.gray100,
});

export const th = style({
  whiteSpace: "nowrap",
  padding: "1rem 0.8rem",
});

export const tableText = style({
  fontWeight: 400,
});
