import { style } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";
import { BANNER_BG } from "@images/index";

const textAlign = {
  right: { textAlign: "right" },
} as const;

export const layout = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

/** ----- 첫 번째 섹션 ----- */
export const banner = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "6.2rem",

  width: "100%",
  height: "100rem",
  padding: "0 7.2rem",
  borderRadius: "32px",
  //backgroundColor: themeVars.color.white,
});

export const bannerWrapper = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "2.4rem",

  width: "100%",
  height: "70.9rem",
  background: `url(${BANNER_BG}) no-repeat center/cover`,
  borderRadius: "8px",
});

export const title = style({
  marginTop: "8rem",
  textAlign: "center",
  ...themeVars.fontStyles.display_b_40,
  fontWeight: "700",
});

export const gradientTitle = style({
  backgroundColor: themeVars.gradient.bluePrimary,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",

  backgroundClip: "text",
  color: "transparent",
});

export const button = style({
  padding: "1.65rem 2.4rem",
  backgroundColor: themeVars.color.blue600,
  color: themeVars.color.white,
  borderRadius: "200px",
  ...themeVars.fontStyles.hline_b_18,
});

export const floatImage = style({
  width: "90rem",
  aspectRatio: 1 / 1,

  position: "absolute",
  top: "34.6rem",
});

/** ------ 두 번째 섹션 ------- */
export const second = style({
  alignSelf: "center",
  display: "flex",
  justifyContent: "space-between",
  width: "144rem",
  height: "90rem",
  margin: "17.7rem 5.7rem 0 0",
  overflow: "hidden",
});

export const worryCardLeft = style({
  position: "relative",
});

export const worryCardRight = style({
  alignSelf: "flex-end",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  marginLeft: "auto",
  marginBottom: "-8rem",
});

export const worryCardTitle = style({
  color: themeVars.color.gray700,
  ...themeVars.fontStyles.display_b_40,
  ...textAlign.right,
  fontWeight: "700",
});

export const blueText = style({
  color: themeVars.color.blue600,
});

export const worryCardContent = style({
  color: themeVars.color.gray500,
  ...themeVars.fontStyles.hline_m_18,
  ...textAlign.right,
});

/** ------ 세 번째 섹션------ */
