import { style } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";

export const container = style({
  display: "flex",
  flexDirection: "column",
});

export const heroSection = style({
  width: "100%",
  height: "50rem",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
});

export const heroContent = style({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  paddingLeft: "18.8rem",
});

export const subText = style({
  ...themeVars.fontStyles.body_m_16,
  color: themeVars.color.gray500,
  marginBottom: "0.8rem",
});

export const mainText = style({
  color: themeVars.color.gray700,
  fontWeight: "800",
  fontSize: "3.6rem",
  fontFamily: "NanumSquareNeo",
  lineHeight: "1.5",
  letterSpacing: "-0.01em",
});

export const highlight = style({
  background: themeVars.gradient.bluePrimary,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",

  backgroundClip: "text",
  color: "transparent",
});

export const searchWrapper = style({
  marginTop: "6rem",
});

export const companyListSection = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "10rem 19rem 6rem 19rem",
  width: "100%",
  // border: "1px solid black",
});

/* ───────────────── 주요 기업 섹션 ───────────────── */
export const majorSection = style({
  display: "flex",
  flexDirection: "column",
  gap: "3.2rem",
  alignItems: "center",
  justifyContent: "center",
  padding: "6rem 19rem 6rem 19rem",
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
});

export const smallCards = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.6rem", // 작은 카드 사이
});
