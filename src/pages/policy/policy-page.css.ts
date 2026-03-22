import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { themeVars } from "@/app/styles";

export const background = style({
  display: "flex",
  justifyContent: "center",
  marginTop: themeVars.height.header,
  background: themeVars.color.gray100,
});

export const wrapper = style({
  width: "106rem",
  padding: "8rem 5.2rem",
  background: themeVars.color.white,
});

export const title = style({
  color: themeVars.color.gray800,
  ...themeVars.fontStyles.title_b_36,
  fontWeight: 700,
});

export const subTitle = style({
  color: themeVars.color.gray800,
  ...themeVars.fontStyles.hline_m_18,
  fontWeight: 500,
});

export const divider = style({
  height: "0.15rem",
  backgroundColor: themeVars.color.gray200,
});

export const content = style({
  display: "flex",
  flexDirection: "column",
  color: themeVars.color.gray500,
  ...themeVars.fontStyles.body_r_14,
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
      40: { gap: "4rem" },
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
  maxWidth: "25rem",
  padding: "0.8rem",
  border: `1px solid ${themeVars.color.gray200}`,

  verticalAlign: "top",
  textAlign: "left",
  wordBreak: "keep-all",

  ...themeVars.fontStyles.body_r_14,
});

export const thead = style({
  backgroundColor: themeVars.color.gray100,
});

export const th = style({
  whiteSpace: "nowrap",
  padding: "1rem 0.8rem",
});
