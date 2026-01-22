import { style } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";

export const layout = style({
  display: "flex",
  flexDirection: "column",
  gap: "2.4rem",
  paddingTop: "3.2rem",
});

/** -------- 기업 정보 래퍼 --------- */
export const formWrapper = style({
  display: "flex",
  justifyContent: "space-between",
  gap: "2rem",
  width: "100%",
});

/** ----------- 기업 정보 ------------- */
export const descriptionForm = style({
  display: "flex",
  flexDirection: "column",
  gap: "2.7rem",
  width: "43rem",
});

/** ---------- JD 정보 입력 ----------- */
export const jdForm = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
});

export const jdTitle = style({
  display: "flex",
  justifyContent: "space-between",
});

/** -------- 각 입력 폼 ---------- */
export const fieldWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
  width: "43rem",
});

export const fieldTitle = style({
  display: "flex",
  alignItems: "center",
  gap: "0.4rem",
  color: themeVars.color.black,
  ...themeVars.fontStyles.body_b_14,
});

export const fieldContent = style({
  height: "5.6rem",
  padding: "1.7rem 2rem",
  borderRadius: "1rem",
  border: `1px solid ${themeVars.color.normal}`,
  backgroundColor: themeVars.color.gray100,
  ...themeVars.fontStyles.body_r_14,
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "block",
  maxWidth: "100%",
});

export const button = style({
  marginLeft: "auto",
});
