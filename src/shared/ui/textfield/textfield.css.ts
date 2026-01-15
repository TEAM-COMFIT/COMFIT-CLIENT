import { style, styleVariants } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";

export const wrapper = style({
  position: "relative",
  boxSizing: "border-box",

  display: "flex",
  flexDirection: "column",

  padding: "2.8rem 2rem",
  borderRadius: "1.6rem",
  border: `1px solid ${themeVars.color.normal}`,
});

/* ---------- Type  ---------- */
export const textfieldType = styleVariants({
  jobDescription: {
    width: "61rem",
    height: "38.6rem",
  },

  situation: {
    width: "88rem",
    height: "15.4rem",
  },
  task: {
    width: "88rem",
    height: "21.8rem",
  },
  result: {
    width: "88rem",
    height: "22.2rem",
  },
  action: {
    width: "88rem",
    height: "26rem",
  },
});

/* ---------- Mode ---------- */
export const textfieldMode = styleVariants({
  edit: {
    backgroundColor: themeVars.color.gray100,
  },
  view: {
    backgroundColor: themeVars.color.white,
  },
});

/* ---------- Textarea (edit) ---------- */
export const textarea = style({
  flex: 1,
  width: "100%",
  height: "100%",
  boxSizing: "border-box",

  border: "none",
  outline: "none",
  background: "transparent",

  resize: "none",

  color: themeVars.color.gray800,
  ...themeVars.fontStyles.body_m_16,

  selectors: {
    "&::placeholder": {
      color: themeVars.color.gray500,
      opacity: 1,
      ...themeVars.fontStyles.body_m_16,
    },
  },
});

/* ---------- Viewer (view) ---------- */
export const viewer = style({
  flex: 1,
  width: "100%",
  height: "100%",
  boxSizing: "border-box",

  color: themeVars.color.gray800,
  ...themeVars.fontStyles.body_m_16,

  whiteSpace: "pre-wrap",
  overflow: "auto",
});

export const viewerPlaceholder = style({
  flex: 1,
  width: "100%",
  height: "100%",
  boxSizing: "border-box",

  color: themeVars.color.gray800,
  ...themeVars.fontStyles.body_m_16,

  whiteSpace: "pre-wrap",
  overflow: "auto",
});

/* ---------- Counter (edit only) ---------- */
export const counter = style({
  position: "absolute",
  right: "2rem",
  bottom: "2.8rem",

  color: themeVars.color.gray500,
  ...themeVars.fontStyles.cap_m_12,
});
