import { style } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";
import { BANNER_BG, FOOTER_BG, SECTION_BG } from "@images/index";

const textAlign = {
  right: { textAlign: "right" },
  center: { textAlign: "center" },
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
  background: themeVars.gradient.bluePrimary,
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
export const third = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "8rem",

  height: "100rem",
  background: `url(${SECTION_BG}) no-repeat center/cover`,
});

export const thirdTitle = style({
  ...textAlign.center,
  ...themeVars.fontStyles.title_b_36,
  fontWeight: 700,
});

export const landingCard = style({
  display: "flex",
  flexDirection: "column",
  gap: "3.2rem",
});

/** -------- 네 번째 섹션-------- */
export const fourth = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "8rem",

  padding: "15.6rem",
});

export const fourthHeader = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "4rem",
});

export const fourtTitleWrapper = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "0.4rem",
});

export const fourthTitle = style({
  color: themeVars.color.gray800,
  ...themeVars.fontStyles.title_b_36,
  fontWeight: 700,
});

export const fourthSubtitle = style({
  color: themeVars.color.gray500,
  ...themeVars.fontStyles.hline_m_18,
});

/**-------- 다섯 번째 섹션-------- */
export const fifth = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "4rem",
  height: "60rem",
  padding: "7.2rem 0",
  backgroundColor: themeVars.color.blue100,
});

export const fifthTitle = style({
  color: themeVars.color.gray700,
  ...themeVars.fontStyles.title_b_28,
  ...textAlign.center,
  fontWeight: 700,
});

/** ------- 푸터 섹션 -------- */
export const footer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "6rem",
  height: "60rem",
  padding: "18rem 0",
  background: `url(${FOOTER_BG}) no-repeat center/cover`,
});

export const footerTitleWrapper = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "1.6rem",
  textAlign: "center",
});

export const footerTitle = style({
  color: themeVars.color.gray700,
  ...themeVars.fontStyles.title_b_36,
  fontWeight: 700,
});

export const footerSubTitle = style({
  color: themeVars.color.gray500,
  ...themeVars.fontStyles.body_r_16,
  fontWeight: 400,
});
