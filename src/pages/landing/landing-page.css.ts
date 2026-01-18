import { style } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";
import { BANNER_BG } from "@images/index";

export const banner = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "6.2rem",

  width: "100%",
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
