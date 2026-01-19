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
  fontWeight: "900",
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
  padding: "10rem 0 6rem 0",
  border: "1px solid red",
});
