import { globalStyle, style, styleVariants } from "@vanilla-extract/css";

import { fontStyles } from "@/shared/styles/font-style.css";
import { color } from "@/shared/styles/tokens/color.css";
import { shadow } from "@/shared/styles/tokens/shadow.css";
import { zIndex } from "@/shared/styles/tokens/z-index.css";

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

  background: color.white,
  borderStyle: "solid",
  borderWidth: 2,

  transition: "border-color 120ms ease, box-shadow 120ms ease",
});

export const inputShellVariant = styleVariants({
  onboarding: {
    height: "6rem",
    padding: "0 1.6rem",
    borderRadius: 16,
    borderColor: color.gray200,
  },
  home: {
    height: "6rem",
    padding: "0.6rem 0.8rem 0.6rem 1.6rem",
    borderRadius: 12,
    borderColor: color.blue600,
  },
  matchingExperienceList: {
    height: "4.8rem",
    padding: "0 1.6rem",
    borderRadius: 12,
    borderColor: color.blue600,
  },
});

export const inputShellFocused = style({
  borderColor: color.blue600,
  boxShadow: `0 0 0 3px rgba(90, 129, 250, 0.18)`,
});

export const input = style({
  flex: 1,
  minWidth: 0,

  border: 0,
  outline: "none",
  background: "transparent",

  ...fontStyles.hline_m_18,
  color: color.gray800,

  "::placeholder": {
    color: color.gray400,
  },
});

export const iconButton = style({
  width: "4.8rem",
  height: "4.8rem",
  borderRadius: 999,

  display: "grid",
  placeItems: "center",

  border: 0,
  background: "transparent",
  cursor: "pointer",

  color: color.gray400,

  selectors: {
    "&:disabled": { opacity: 0.6, cursor: "not-allowed" },
  },
});

export const iconButtonVariant = styleVariants({
  onboarding: { color: color.gray400 },
  home: { color: color.blue600 },
  matchingExperienceList: { color: color.blue600 },
});

globalStyle(`${iconButton} svg`, {
  width: "2.4rem",
  height: "2.4rem",
});

globalStyle(`${iconButton} svg *`, {
  fill: "currentColor",
  stroke: "currentColor",
});

export const list = style({
  position: "absolute",
  left: 0,
  right: 0,

  borderRadius: 8,
  overflow: "hidden",

  background: color.white,
  border: `1.5px solid ${color.gray200}`,
  boxShadow: shadow.shadow1,

  zIndex: Number(zIndex.dropdownMenu),

  maxHeight: "20.8rem",
  overflowY: "auto",
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

  ...fontStyles.cap_m_12,
  color: color.gray500,
});

export const item = style({
  height: "5.2rem",
  display: "flex",
  alignItems: "center",
  padding: "0 1.6rem",

  ...fontStyles.body_m_14,
  color: color.gray800,

  background: color.white,
  cursor: "pointer",
});

export const itemState = styleVariants({
  default: { background: color.white },
  hover: { background: color.gray100 },
  pressed: { background: color.blue600, color: color.white },
});

export const selectedTagRow = style({
  marginTop: "1.2rem",
  display: "flex",
  alignItems: "center",
  gap: "0.8rem",
});
