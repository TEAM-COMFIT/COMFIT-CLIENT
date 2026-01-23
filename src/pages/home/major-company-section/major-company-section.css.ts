import { style } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";

export const majorSection = style({
  display: "flex",
  flexDirection: "column",
  gap: "5.2rem",
  alignItems: "center",
  justifyContent: "center",
  width: "106rem",
  marginTop: "7rem",
  marginBottom: "16rem",
});

export const header = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
  width: "100%",
});

export const textGroup = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
});

export const subTitle = style({
  ...themeVars.fontStyles.hding_m_22,
  color: themeVars.color.gray500,
});

export const title = style({
  ...themeVars.fontStyles.title_b_28,
  color: themeVars.color.gray700,
});

export const cardGrid = style({
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  gap: "2rem",
  alignItems: "stretch",
  width: "100%",
  minHeight: "34.4rem",
});

export const smallCards = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.6rem",
});

export const emptyWrapper = style({
  // 1. 부모 그리드에서 가로를 꽉 채우기 (2컬럼 기준)
  gridColumn: "1 / -1",

  // 2. 내부 이미지 중앙 정렬을 위해 flex 사용
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center", // 부모 그리드 수직 중앙 정렬 (필요시)

  width: "100%",
  minHeight: "45rem",
});

export const spinner = style({
  width: "20rem",
  aspectRatio: "1 / 1",
  objectFit: "contain",
});

export const spinnerText = style({
  marginTop: "0.2rem",
  ...themeVars.fontStyles.hline_m_18,
  color: themeVars.color.gray600,
});
