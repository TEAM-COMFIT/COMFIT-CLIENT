import { style } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";
import CompanyDetailImage from "@/shared/assets/images/company_detail.png";

export const recommendSection = style({
  width: "100%",
  minHeight: "80rem",
  marginTop: "20rem",
  padding: "6rem 0",
  position: "relative",
  backgroundImage: `url(${CompanyDetailImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
});

export const recommendInner = style({
  maxWidth: "112rem",
  margin: "0 auto",
  padding: "0 2rem",
  position: "relative",
});

export const recommendHeader = style({
  marginTop: "16rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "2rem",
  position: "relative",
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

export const companyCardGrid = style({
  marginTop: "6rem",
  marginBottom: "22.3rem",
  display: "grid",
  gridTemplateColumns: "repeat(4, 25rem)",
  justifyContent: "space-between",
  gap: "2rem",
});

export const companyCardLink = style({
  display: "block",
  width: "100%",
});

export const refreshButtonArea = style({
  position: "absolute",
  right: "0",
  bottom: "0",
});
