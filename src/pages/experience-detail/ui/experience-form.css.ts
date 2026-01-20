import { style } from "@vanilla-extract/css";
import { themeVars } from "@/app/styles";

export const page = style({
  minHeight: "100vh",
  background: themeVars.color.gray100,
});

export const outerSection = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingBottom: 0,
});

export const panel = style({
  width: "106rem",
  background: themeVars.color.white,
  borderRadius: 0,
  paddingBottom: "21.2rem",
});

export const modeLabel = style({
  width: "100%",
  paddingTop: "1.6rem",
  paddingBottom: "1.6rem",
  fontSize: "1.4rem",
  color: themeVars.color.gray500,
});

export const card = style({
  width: "100%",
  background: "transparent",
  height: "auto",
  minHeight: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
});

export const innerColumn = style({
  width: "88rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "8rem",
});

export const topGroup = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "1.6rem",
});

export const topRow = style({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const dropdownWrap = style({
  width: "14.8rem",
});

export const tooltipWrap = style({
  display: "flex",
  alignItems: "center",
});

export const titleBlock = style({
  width: "100%",
  marginTop: "2.4rem",
});

export const titleInput = style({
  width: "100%",
  height: "5.4rem",
  border: 0,
  outline: "none",
  background: "transparent",
  padding: 0,

  fontFamily: "Pretendard",
  fontSize: "3.6rem",
  fontWeight: 700,
  lineHeight: "5.4rem",
  letterSpacing: "-0.036rem",
  color: themeVars.color.gray900,

  selectors: {
    "&::placeholder": {
      color: themeVars.color.gray400,
    },
  },
});

export const dateRow = style({
  display: "flex",
  alignItems: "center",
  gap: "1.6rem",
});

export const dateDash = style({
  fontSize: "1.4rem",
  color: themeVars.color.gray400,
  lineHeight: "1",
});

export const starGroup = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "5.2rem",
});

export const starField = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
});

export const starLabel = style({
  fontFamily: "Pretendard",
  fontSize: "2rem",
  fontWeight: 700,
  lineHeight: "3rem",
  letterSpacing: "-0.02rem",
  color: themeVars.color.gray900,
});

export const tooltipContent = style({
  width: "28rem",
});

export const tooltipTitle = style({
  fontSize: "1.4rem",
  fontWeight: 700,
  lineHeight: "2rem",
  color: themeVars.color.gray900,
  marginBottom: "1.2rem",
});

export const tooltipList = style({
  paddingLeft: "1.8rem",
  marginBottom: "1.2rem",
  fontSize: "1.4rem",
  lineHeight: "2rem",
  color: themeVars.color.gray600,
});

export const tooltipDesc = style({
  fontSize: "1.4rem",
  lineHeight: "2rem",
  color: themeVars.color.gray600,
});

export const debug = style({
  marginTop: "1.6rem",
  fontSize: "1.2rem",
  color: themeVars.color.gray400,
});
