import { style, styleVariants } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";

export const wrapper = style({
  display: "flex",
  flexDirection: "column",

  padding: "2rem 2rem",
  borderRadius: "16px",
  border: `1px solid ${themeVars.color.normal}`,
});

/* ---------- Type  ---------- */
export const textfieldType = styleVariants({
  jobDescription: {
    width: "clamp(48rem, 61rem, 100%)",
    height: "38.6rem",
  },

  situation: {
    width: "clamp(64rem, 88rem, 100%)",
    height: "15.4rem",
  },

  task: {
    width: "clamp(64rem, 88rem, 100%)",
    height: "21.8rem",
  },

  result: {
    width: "clamp(64rem, 88rem, 100%)",
    height: "22.2rem",
  },

  action: {
    width: "clamp(64rem, 88rem, 100%)",
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

  border: "none",
  outline: "none",
  background: "transparent",

  resize: "none",

  color: themeVars.color.gray800,
  ...themeVars.fontStyles.body_m_16,

  selectors: {
    "&::placeholder": {
      color: themeVars.color.gray500,
      ...themeVars.fontStyles.body_m_16,
    },
    "&::-webkit-scrollbar": {
      width: "6px",
    },
    "&::-webkit-scrollbar-track": {
      background: "transparent",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "transparent",
      borderRadius: "10px",
    },

    "&:focus::-webkit-scrollbar-thumb": {
      background: themeVars.color.gray400,
    },
  },
});

/* ---------- Viewer (view) ---------- */
export const viewer = style({
  flex: 1,
  width: "100%",
  height: "100%",

  color: themeVars.color.gray800,
  ...themeVars.fontStyles.body_m_16,

  whiteSpace: "pre-wrap",
  overflow: "auto",
});

/* ---------- Counter (edit only) ---------- */
export const counter = style({
  alignSelf: "flex-end",
  marginTop: "0.8rem",

  color: themeVars.color.gray500,
  ...themeVars.fontStyles.cap_m_12,
});
