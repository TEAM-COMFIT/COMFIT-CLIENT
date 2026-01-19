import { style } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";

export const heroSection = style({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "50rem",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
});

export const heroContent = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "106rem",
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
  padding: "9rem 19rem 6rem 19rem",
  width: "100%",
});

export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "106rem",
});

export const filterWrapper = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  width: "100%",
  marginBottom: "3.2rem",
  color: themeVars.color.gray500,
  ...themeVars.fontStyles.hline_m_18,
  gap: "0.8rem",
});

export const toggle = style({
  marginLeft: "0.8rem",
});

export const companyGridStyle = style({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  rowGap: "4rem",
  columnGap: "2rem",
  paddingBottom: "3rem",
});
