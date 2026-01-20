import { style } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";
import { COMPANY_DETAIL } from "@/shared/assets/images";

export const recommendSection = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  marginTop: "20rem",
  backgroundImage: `url(${COMPANY_DETAIL})`,

  backgroundSize: "100% 100%",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",

  aspectRatio: "1440 / 600",
  overflow: "hidden",
});

export const recommendInner = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100%",
  maxWidth: "112rem",
  height: "100%",
  margin: "0 auto",
  padding: "0 2rem",
});

export const recommendHeader = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
  gap: "2rem",
});

export const companyCardGrid = style({
  marginTop: "4rem",
  display: "grid",
  gridTemplateColumns: "repeat(4, 25rem)",
  justifyContent: "space-between",
  gap: "2rem",
});

export const recommendTextGroup = style({
  maxWidth: "72rem",
});

export const recommendTitle = style({
  color: themeVars.color.black,
  ...themeVars.fontStyles.title_b_28,
});

export const recommendDesc = style({
  marginTop: "0.8rem",
  color: themeVars.color.gray600,
  ...themeVars.fontStyles.hline_m_18,
});
