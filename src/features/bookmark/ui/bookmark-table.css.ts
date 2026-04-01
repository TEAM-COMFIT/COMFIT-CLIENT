import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { themeVars } from "@/app/styles";

const tableTopBorder = `1px solid ${themeVars.color.gray400}`;
const rowBorder = `1px solid ${themeVars.color.gray200}`;

export const table = style({
  alignSelf: "flex-start",
  width: "100%",
  borderCollapse: "collapse",
  borderTop: tableTopBorder,
  tableLayout: "fixed",
});

export const checkboxColumn = style({
  width: "11.2rem",
});

export const companyColumn = style({
  width: "54.8rem",
});

export const dateColumn = style({
  width: "20rem",
});

export const statusColumn = style({
  width: "20rem",
});

export const headerCell = style({
  height: "4rem",
  backgroundColor: themeVars.color.gray100,
  color: themeVars.color.gray800,
  borderBottom: rowBorder,
  ...themeVars.fontStyles.body_b_16,
});

export const bodyCell = style({
  height: "11rem",
  color: themeVars.color.gray800,
  borderBottom: rowBorder,
  ...themeVars.fontStyles.hline_m_18,
});

export const checkboxCell = style({
  textAlign: "center",
  verticalAlign: "middle",
});

export const leftCell = style({
  textAlign: "left",
  paddingLeft: "0.8rem",
  verticalAlign: "middle",
});

export const centerCell = style({
  textAlign: "center",
  verticalAlign: "middle",
});

export const companyButton = style({
  padding: 0,
  border: 0,
  background: "transparent",
  color: themeVars.color.gray800,
  cursor: "pointer",
  ...themeVars.fontStyles.hding_m_20,
  selectors: {
    "&:hover": {
      textDecoration: "underline",
    },
  },
});

export const connectionStatus = recipe({
  base: {
    ...themeVars.fontStyles.hline_m_18,
  },
  variants: {
    connected: {
      true: {
        color: themeVars.color.gray800,
      },
      false: {
        color: themeVars.color.gray300,
      },
    },
  },
  defaultVariants: {
    connected: false,
  },
});

export const srOnly = style({
  position: "absolute",
  width: "0.1rem",
  height: "0.1rem",
  padding: 0,
  margin: "-0.1rem",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  border: 0,
});
