import { style } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";

export const page = style({
  width: "100%",
  backgroundColor: themeVars.color.white,
});

export const container = style({
  maxWidth: "112rem", // CompanyCard(25rem) 4개가 들어가도록 넉넉히
  margin: "0 auto",
  padding: "4.8rem 2rem 6rem",
  display: "flex",
  flexDirection: "column",
  gap: "2.8rem",
});

/* ---------- Header ---------- */
export const header = style({
  // width: "883px",
  // height: "100px",
  // display: "flex",
  // justifyContent: "space-between",
  // alignItems: "flex-end",
  // gap: "2rem",
});

export const headerLeft = style({
  // display: "flex",
  // alignItems: "center",
  // gap: "2rem",
  // minWidth: 0,
});

export const logo = style({
  width: "100px",
  height: "100px",
  borderRadius: "16px",
  border: `1.5px solid ${themeVars.color.normal}`,
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
  gap: "8px", // ✅ 기업명-점-채용상태 사이 8px
  minWidth: 0,
});

export const companyName = style({
  color: themeVars.color.gray800,
  ...themeVars.fontStyles.title_b_28, // ✅ 요청한 토큰
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
  ...themeVars.fontStyles.body_m_16, // ✅ 요청한 토큰
  flexShrink: 0,
});

export const tagRow = style({
  display: "flex",
  gap: "0.8rem",
  flexWrap: "wrap",
});

export const headerRight = style({
  display: "flex",
  alignItems: "flex-end",
});

/* ---------- Sections ---------- */
export const section = style({
  // display: "flex",
  // flexDirection: "column",
  // gap: "1.2rem",
});

export const sectionTitleRow = style({
  // display: "flex",
  // width: "100%",
  // alignItems: "center",
  // gap: "0.8rem",
});

export const sectionIcon = style({});

export const icon = style({
  width: "2.4rem",
  height: "2.4rem",
});

export const sectionTitle = style({
  color: themeVars.color.gray800,
  ...themeVars.fontStyles.body_m_16,
});

export const issueList = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.2rem",
});

/* ---------- Recommend ---------- */
export const recommendSection = style({
  width: "100%",
  padding: "6rem 0",
  backgroundColor: themeVars.color.blue100,
});

export const recommendInner = style({
  maxWidth: "112rem",
  margin: "0 auto",
  padding: "0 2rem",
});

export const recommendHeader = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "2rem",
});

export const recommendTitle = style({
  color: themeVars.color.black,
  ...themeVars.fontStyles.hding_b_22,
});

export const recommendDesc = style({
  marginTop: "0.8rem",
  color: themeVars.color.gray500,
  ...themeVars.fontStyles.body_m_14,
});

export const recommendRight = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  gap: "0.8rem",
});

export const recommendImage = style({
  width: "18rem",
  height: "12rem",
  objectFit: "cover",
  borderRadius: "12px",
  border: `1px solid ${themeVars.color.normal}`,
  backgroundColor: themeVars.color.white,
});

export const recommendHint = style({
  color: themeVars.color.gray500,
  ...themeVars.fontStyles.body_m_14,
  whiteSpace: "nowrap",
});

export const companyCardGrid = style({
  marginTop: "2.4rem",
  display: "grid",
  gridTemplateColumns: "repeat(4, 25rem)",
  justifyContent: "space-between",
  gap: "1.6rem",
});
