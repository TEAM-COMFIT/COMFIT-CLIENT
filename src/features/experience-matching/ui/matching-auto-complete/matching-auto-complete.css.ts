import { style } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";

export const container = style({
  display: "flex",
  alignItems: "center",
  gap: "0.8rem",
  position: "relative",
});

export const inputWrapper = style({
  position: "relative",
  height: "4.8rem",
});

export const input = style({
  width: "54.8rem",
  height: "100%",
  paddingLeft: "1.6rem",
  paddingRight: "4.8rem",
  borderRadius: "12px",
  border: `2px solid ${themeVars.color.blue600}`,
  backgroundColor: themeVars.color.white,
  color: themeVars.color.gray800,
  ...themeVars.fontStyles.hline_m_18,

  selectors: {
    "&::placeholder": {
      color: themeVars.color.gray400,
    },
  },
});

export const inputFocused = style({
  width: "42rem",
});

export const icon = style({
  position: "absolute",
  right: "1.8rem",
  top: "50%",
  transform: "translateY(-50%)",
  color: themeVars.color.blue600,
});

export const cancelIcon = style({
  color: themeVars.color.blue300,
  cursor: "pointer",
});

// 자동완성 메뉴 스타일
export const menu = style({
  position: "absolute",
  top: "calc(100% + 0.8rem)",
  left: 0,
  width: "54.8rem",
  maxHeight: "20.8rem",
  backgroundColor: themeVars.color.white,
  borderRadius: "10px",
  border: `1.5px solid ${themeVars.color.normal}`,
  zIndex: themeVars.zIndex.dropdownMenu,
  overflowY: "auto",
  overflowX: "hidden",
  padding: "0.4rem",

  selectors: {
    "&::-webkit-scrollbar": {
      width: "0.4rem",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: themeVars.color.gray300,
      borderRadius: "100px",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "transparent",
      margin: "0.4rem 0",
    },
  },
});

export const menuItem = style({
  display: "flex",
  alignItems: "center",
  padding: "1rem 1.2rem",
  width: "100%",
  height: "4.4rem",
  borderRadius: "8px",
  cursor: "pointer",
  ...themeVars.fontStyles.body_r_16,
  color: themeVars.color.gray800,
  transition: "background-color 0.2s",

  selectors: {
    "&:hover": {
      backgroundColor: themeVars.color.blue200,
    },
  },
});

export const tagWrapper = style({
  width: "42rem",
  height: "4.8rem",
  display: "flex",
  alignItems: "center",
  padding: "0 1.6rem",
  borderRadius: "12px",
  border: `2px solid ${themeVars.color.blue600}`,
  backgroundColor: themeVars.color.white,
});

export const noResult = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "4.4rem",
  color: themeVars.color.gray500,
  ...themeVars.fontStyles.cap_m_12,
});
