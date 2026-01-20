import { fontFace, style } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";
import AppleSDGothicNeo from "@shared/assets/fonts/AppleSDGothicNeo.woff2";

const AppleFont = fontFace({
  src: `url(${AppleSDGothicNeo}) format('woff2')`,
  fontStyle: "normal",
  fontDisplay: "swap", // 성능을 위해 swap 권장
});

export const container = style({
  margin: `0 auto`,
  paddingTop: `calc(${themeVars.height.header} + 28.4rem)`,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "8rem",
});

export const section = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "1.2rem",
});

export const header = style({
  color: themeVars.color.gray800,
  ...themeVars.fontStyles.title_b_28,
});

export const description = style({
  textAlign: "center",
  color: themeVars.color.gray500,
  ...themeVars.fontStyles.hline_m_18,
});

export const kakao = style({
  display: "flex",
  alignItems: "center",
  gap: "14rem",
  width: "48rem",
  padding: "1.8rem 2.2rem",
  borderRadius: "12px",
  color: themeVars.color.kakaoclr,
  backgroundColor: themeVars.color.kakaobg,
});

export const kakaoIcon = style({
  width: "2.4rem",
  height: "2.4rem",
  flexShrink: 0,
});

export const kakaoText = style({
  fontFamily: AppleFont,
  fontSize: "2.4rem",
  lineHeight: "150%",
  fontWeight: 500,
});
