import { style } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";

export const sectionWrap = style({
  width: "88.3rem",
  margin: "0 auto",
});

export const header = style({
  width: "88.3rem",
  height: "100px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "2rem",
  position: "relative",
  zIndex: 1,
});

export const headerLeft = style({
  display: "flex",
  alignItems: "center",
  gap: "2rem",
  minWidth: 0,
});

export const logo = style({
  width: "100px",
  height: "100px",
  borderRadius: "16px",
  border: `1.5px solid ${themeVars.color.normal}`,
  boxShadow: themeVars.shadow.shadow2,
  backgroundColor: themeVars.color.white,
  objectFit: "contain",
  flexShrink: 0,
});

export const headerMeta = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.2rem",
  minWidth: 0,
});

export const nameRow = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  minWidth: 0,
});

export const companyName = style({
  color: themeVars.color.gray800,
  ...themeVars.fontStyles.title_b_28,
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

export const dot = style({
  width: "4px",
  height: "4px",
  borderRadius: "999px",
  backgroundColor: themeVars.color.gray800,
  display: "inline-block",
  flexShrink: 0,
});

export const hireStatus = style({
  color: themeVars.color.gray800,
  ...themeVars.fontStyles.body_m_16,
  flexShrink: 0,
});

export const tagRow = style({
  display: "flex",
  gap: "0.8rem",
  flexWrap: "wrap",
});

export const headerRight = style({
  display: "flex",
  alignItems: "center",
});

export const sectionBase = style({
  display: "flex",
  flexDirection: "column",
});

export const sectionTitleRow = style({
  display: "flex",
  width: "88.3rem",
  alignItems: "center",
  gap: "0.8rem",
});

export const sectionIcon = style({
  width: "2.4rem",
  height: "2.4rem",
  display: "block",
  objectFit: "contain",
  flexShrink: 0,
});

export const sectionTitle = style({
  color: themeVars.color.gray800,
  ...themeVars.fontStyles.hline_b_18,
});

export const summarySection = style({
  marginTop: "10rem",
  gap: "1.6rem",
});

export const talentSection = style({
  marginTop: "9.5rem",
  gap: "1.6rem",
});

export const issueSection = style({
  marginTop: "5.2rem",
  gap: "1.6rem",
});

export const issueList = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.2rem",
});

export const textboxContent = style({
  whiteSpace: "pre-line",
  textAlign: "justify",
});

export const summaryBox = style({
  minHeight: "14.7rem",
  display: "flex",
  alignItems: "center",
});

export const talentBox = style({
  minHeight: "8rem",
  display: "flex",
  alignItems: "center",
});

export const ctaBanner = style({
  marginTop: "7.8rem",
});
