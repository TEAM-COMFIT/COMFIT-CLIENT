import { globalStyle, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { themeVars } from "@/app/styles";

const tableTopBorder = `1px solid ${themeVars.color.gray400}`;
const rowBorder = `1px solid ${themeVars.color.gray200}`;

export const page = style({
  width: "100%",
  maxWidth: "106rem",
  margin: "0 auto",
  paddingTop: `calc(${themeVars.height.header} + 8rem)`,
  paddingBottom: "8rem",
});

export const topRow = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "2rem",
});

export const headerSection = style({
  display: "flex",
  alignItems: "center",
  gap: "1.6rem",
});

export const titleIcon = style({
  width: "6.4rem",
  height: "6.4rem",
  flexShrink: 0,
});

export const titleWrap = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.4rem",
});

export const title = style({
  color: themeVars.color.black,
  ...themeVars.fontStyles.title_b_24,
});

export const subtitle = style({
  color: themeVars.color.gray500,
  ...themeVars.fontStyles.body_m_16,
});

export const actionSection = style({
  display: "flex",
  alignItems: "center",
  gap: "1.2rem",
});

export const searchWrap = style({
  display: "flex",
  alignItems: "center",
});

export const deleteButtonWrap = style({
  display: "inline-flex",
});

export const trashIcon = style({
  width: "2.4rem",
  height: "2.4rem",
  flexShrink: 0,
});

globalStyle(`${deleteButtonWrap} > button`, {
  width: "4.8rem",
  minWidth: "4.8rem",
  height: "4.8rem",
  padding: 0,
  borderRadius: "1.2rem",
  backgroundColor: themeVars.color.blue600,
  borderColor: themeVars.color.blue600,
  color: themeVars.color.white,
});

globalStyle(`${deleteButtonWrap} > button:hover:not(:disabled)`, {
  backgroundColor: themeVars.color.blue600,
  borderColor: themeVars.color.blue600,
});

globalStyle(`${deleteButtonWrap} > button:active:not(:disabled)`, {
  backgroundColor: themeVars.color.blue600,
  borderColor: themeVars.color.blue600,
});

globalStyle(`${deleteButtonWrap} > button:disabled`, {
  backgroundColor: themeVars.color.blue600,
  borderColor: themeVars.color.blue600,
  color: themeVars.color.white,
});

export const tableSection = style({
  marginTop: "5rem",
});

export const table = style({
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

export const placeholderCell = style({
  color: "transparent",
});

export const paginationSection = style({
  marginTop: "4.8rem",
  display: "flex",
  justifyContent: "center",
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
