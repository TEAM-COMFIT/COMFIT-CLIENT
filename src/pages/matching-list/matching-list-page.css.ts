import { style } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";

export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  paddingTop: `calc(${themeVars.height.header} + 8rem)`,
});

export const headerWrapper = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  maxWidth: "106rem",
  height: "6.8rem",
  margin: "0 auto",
});

export const headerLeft = style({
  display: "flex",
  alignItems: "center",
  gap: "1.6rem",
});

export const headerText = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.4rem",
});

export const title = style({
  color: themeVars.color.black,
  ...themeVars.fontStyles.title_b_24,
});

export const description = style({
  color: themeVars.color.gray500,
  ...themeVars.fontStyles.body_m_16,
});

export const titleSection = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "1.9rem",
});

export const matchIcon = style({
  width: "6.4rem",
  height: "6.4rem",
  flexShrink: 0,
});

export const titleWrapper = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "0.4rem",
});

export const subTitle = style({
  ...themeVars.fontStyles.body_m_16,
  color: themeVars.color.gray500,
});

export const empty = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "80px 0", // 위아래 충분한 여백
  gap: "16px",
  backgroundColor: "#f9f9f9", // 아주 연한 배경색으로 영역 구분
  borderRadius: "12px",
  marginTop: "20px",
  border: "1px dashed #d1d1d1", // 점선 테두리로 '비어있음' 강조
});

export const emptyState = style({
  width: "100%",
  minHeight: "50rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
});

export const emptyImage = style({
  display: "block",
  width: "36rem",
  height: "24rem",
});

export const emptyTitle = style({
  marginTop: "1.6rem",
  color: themeVars.color.gray800,
  ...themeVars.fontStyles.title_b_28,
});

export const emptyDescription = style({
  marginTop: "0.8rem",
  color: themeVars.color.gray500,
  ...themeVars.fontStyles.hline_m_18,
});
