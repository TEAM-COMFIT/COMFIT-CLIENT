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
  overflowX: "hidden", // 가로 스크롤을 원천 차단
  padding: "0.4rem", // 우측 패딩을 줄여 스크롤바와 아이템 사이 간격 확보
  boxSizing: "border-box", // 패딩과 보더가 너비에 포함되도록 설정

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
      margin: "0.4rem 0", // 스크롤바가 끝까지 붙지 않게 여유 부여
    },
  },
});

export const menuItem = style({
  display: "flex",
  alignItems: "center",
  padding: "1rem 1.2rem", // 좌우 패딩 균형
  width: "100%", // 고정 수치 대신 100% 사용
  height: "4.4rem",
  borderRadius: "8px",
  cursor: "pointer",
  ...themeVars.fontStyles.body_m_14,
  color: themeVars.color.gray800,
  transition: "background-color 0.2s",
  boxSizing: "border-box", // 패딩이 너비를 넘지 않게 함

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
  height: "4.4rem", // 최소 높이 확보
  color: themeVars.color.gray500,
  ...themeVars.fontStyles.cap_m_12,
});
