import { globalStyle, style, styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { themeVars } from "@/app/styles";

export const root = style({ width: "100%" });

export const wrapper = style({
  position: "relative",
  width: "fit-content",
});

export const wrapperVariant = styleVariants({
  onboarding: { width: "88rem" },
  home: { width: "64rem" },
  matchingExperienceList: { width: "28rem" },
});

export const inputShell = style({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  background: themeVars.color.white,
  border: `1.5px solid ${themeVars.color.normal}`,

  transition: "border-color 120ms ease, box-shadow 120ms ease",
});

export const inputShellVariant = styleVariants({
  onboarding: {
    height: "6rem",
    padding: "0 0.8rem 0 1.6rem",
    borderRadius: "12px",
    borderColor: themeVars.color.normal,
  },
  home: {
    height: "6rem",
    padding: "0.6rem 0.8rem 0.6rem 1.6rem",
    borderRadius: "12px",
    borderColor: themeVars.color.blue600,
  },
  matchingExperienceList: {
    height: "4.8rem",
    padding: "0 0.8rem 0 1.6rem",
    borderRadius: "12px",
    borderColor: themeVars.color.blue600,
  },
});

export const input = style({
  flex: 1,
  minWidth: "0rem",

  border: "0px",
  outline: "none",
  background: "transparent",

  ...themeVars.fontStyles.hline_m_18,
  color: themeVars.color.gray800,

  "::placeholder": {
    color: themeVars.color.gray400,
  },
});

export const iconButton = style({
  width: "4.8rem",
  height: "4.8rem",

  display: "grid",
  placeItems: "center",

  border: "0px",
  background: "transparent",
  cursor: "pointer",

  selectors: {
    "&:disabled": {
      opacity: 0.6,
      cursor: "not-allowed",
    },
  },
});

export const iconButtonCursorDefault = style({
  cursor: "default",
});

export const iconButtonVariant = styleVariants({
  onboarding: { color: themeVars.color.gray400 },
  home: { color: themeVars.color.blue600 },
  matchingExperienceList: { color: themeVars.color.blue600 },
});

export const icon = style({
  width: "2.4rem",
  height: "2.4rem",
  color: "currentColor",
});

export const list = style({
  position: "absolute",
  left: "0rem",
  right: "0rem",

  borderRadius: "10px",
  background: themeVars.color.white,
  border: `1.5px solid ${themeVars.color.gray200}`,
  boxShadow: themeVars.shadow.shadow1,
  zIndex: themeVars.zIndex.dropdownMenu,

  maxHeight: "20.8rem",
  overflowY: "auto",

  paddingTop: "0.4rem",
  paddingLeft: "0.4rem",
  paddingRight: "1.2rem",
  paddingBottom: "0.4rem",

  boxSizing: "border-box",

  scrollbarGutter: "stable",
});

globalStyle(`${list}::-webkit-scrollbar`, {
  width: "1.2rem",
});

globalStyle(`${list}::-webkit-scrollbar-track`, {
  background: "transparent",
});

globalStyle(`${list}::-webkit-scrollbar-thumb`, {
  borderRadius: "10rem",
  minHeight: "4rem",
  borderLeft: "0.4rem solid transparent",
  borderRight: "0.4rem solid transparent",
  borderTop: "0px",
  borderBottom: "0px",
  backgroundClip: "padding-box",
});

globalStyle(`${list}`, {
  scrollbarColor: `${themeVars.color.gray300} transparent`,
});

export const listTopVariant = styleVariants({
  onboarding: { top: "6.8rem" },
  home: { top: "6.8rem" },
  matchingExperienceList: { top: "5.6rem" },
});

export const emptyBox = style({
  height: "6rem",
  display: "grid",
  placeItems: "center",
  textAlign: "center",

  ...themeVars.fontStyles.cap_m_12,
  color: themeVars.color.gray500,

  borderRadius: "8px",
});

export const item = recipe({
  base: {
    width: "100%",
    height: "5.2rem",
    display: "flex",
    alignItems: "center",
    padding: "0 1.2rem",

    ...themeVars.fontStyles.body_m_14,
    color: themeVars.color.gray800,

    borderRadius: "8px",
    background: "transparent",

    border: "0px",
    textAlign: "left",
    cursor: "pointer",
  },

  variants: {
    mode: {
      normal: {},
      onboarding: {},
    },

    state: {
      default: {
        background: "transparent",
      },

      hover: {},

      pressed: {
        background: themeVars.color.blue600,
        color: themeVars.color.white,
      },
    },
  },

  compoundVariants: [
    {
      variants: { mode: "normal", state: "hover" },
      style: {
        background: themeVars.color.gray200,
      },
    },
    {
      variants: { mode: "onboarding", state: "hover" },
      style: {
        background: themeVars.color.blue200,
      },
    },
  ],

  defaultVariants: {
    mode: "normal",
    state: "default",
  },
});

export const highlight = style({
  fontWeight: 700,
});

export const selectedTagRow = style({
  marginTop: "1.2rem",
  display: "flex",
  alignItems: "center",
  gap: "0.8rem",
});
