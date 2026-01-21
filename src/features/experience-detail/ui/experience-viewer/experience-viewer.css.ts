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

  paddingTop: "8rem",
  paddingBottom: "21.2rem",
  paddingInline: "9rem",

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

export const titleRow = style({
  width: "100%",
  marginTop: "2.4rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "2.4rem",
});

export const viewerTitle = style({
  margin: 0,
  width: "100%",
  minHeight: "5.4rem",
  display: "flex",
  alignItems: "center",

  fontFamily: "Pretendard",
  fontSize: "3.6rem",
  fontWeight: 700,
  lineHeight: "5.4rem",
  letterSpacing: "-0.036rem",
  color: themeVars.color.gray900,

  flex: 1,
  minWidth: 0,
});

export const tooltipWrap = style({
  display: "flex",
  alignItems: "center",
  flexShrink: 0,
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

export const tooltipInner = style({
  width: "19.1rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "1.2rem",
});

export const tooltipText = style({
  ...themeVars.fontStyles.cap_m_12,

  color: themeVars.color.gray500,
  fontWeight: 500,
  lineHeight: "1.8rem",
  letterSpacing: "-0.012rem",
  wordBreak: "keep-all",
});

export const tooltipList = style({
  margin: 0,
  paddingLeft: "1.8rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
});

export const tooltipListItem = style({
  ...themeVars.fontStyles.cap_m_12,

  color: themeVars.color.gray500,
  fontWeight: 500,
  lineHeight: "1.8rem",
  letterSpacing: "-0.012rem",

  selectors: {
    "&::marker": {
      color: themeVars.color.gray500,
    },
  },
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
  ...themeVars.fontStyles.hding_b_20,
  color: themeVars.color.gray900,
});

export const viewerContent = style({
  width: "100%",
  whiteSpace: "pre-wrap",
});
