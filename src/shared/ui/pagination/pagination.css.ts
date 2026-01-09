import { style } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";

export const paginationWrapper = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.8rem",
  marginTop: "3rem",
});

export const iconButton = style({
  width: "4.4rem",
  height: "4.4rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
});

export const iconButtonDisabled = style({
  cursor: "default",
});

export const pageButton = style({
  width: "4.4rem",
  height: "4.4rem",
  padding: "0.8rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: themeVars.color.gray400,
  ...themeVars.fontStyles.body_m_16,
});

export const activePage = style({
  color: themeVars.color.black,
});
