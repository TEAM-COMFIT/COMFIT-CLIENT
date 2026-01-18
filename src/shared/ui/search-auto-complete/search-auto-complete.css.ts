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
    padding: "0 1.8rem 0 1.6rem",
    borderRadius: 16,
    borderColor: color.normal,
  },
  home: {
    height: "6rem",
    padding: "0.6rem 1.8rem 0.6rem 1.6rem",
    borderRadius: 12,
    borderColor: color.blue600,
  },
  matchingExperienceList: {
    height: "4.8rem",
    padding: "0 1.8rem 0 1.6rem",
    borderRadius: 12,
    borderColor: color.blue600,
  },
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
    "&:disabled": {
      opacity: 0.6,
      cursor: "not-allowed",
    },
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
  background: color.white,
  border: `1.5px solid ${color.gray200}`,
  boxShadow: shadow.shadow1,
  zIndex: Number(zIndex.dropdownMenu),

  maxHeight: "20.8rem",
  overflowY: "auto",

  paddingTop: "0.4rem",
  paddingLeft: "0.4rem",
  paddingBottom: "0.4rem",
  paddingRight: "1.2rem",

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
  backgroundColor: "transparent",
  borderRadius: "10rem",
  minHeight: "4rem",

  borderLeft: "0.4rem solid transparent",
  borderRight: "0.4rem solid transparent",
  borderTop: 0,
  borderBottom: 0,
  backgroundClip: "padding-box",
});

globalStyle(`${list}:hover::-webkit-scrollbar-thumb`, {
  backgroundColor: color.gray300,
});

globalStyle(`${list}`, {
  scrollbarWidth: "none",
  scrollbarColor: "transparent transparent",
});

globalStyle(`${list}:hover`, {
  scrollbarWidth: "thin",
  scrollbarColor: `${color.gray300} transparent`,
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

  borderRadius: 8,
});

export const item = style({
  height: "5.2rem",
  display: "flex",
  alignItems: "center",
  padding: "0 1.2rem",

  ...fontStyles.body_m_14,
  color: color.gray800,

  cursor: "pointer",
  borderRadius: 8,
  background: "transparent",
});

export const itemState = styleVariants({
  default: { background: "transparent" },
  hover: { background: color.gray200 },
  pressed: { background: color.blue600, color: color.white },
});

export const onboardingItemState = styleVariants({
  default: { background: "transparent" },
  hover: { background: color.blue200 },
});

export const onboardingItemPressed = style({
  selectors: {
    "&:active": {
      background: color.blue600,
      color: color.white,
    },
  },
});

export const selectedTagRow = style({
  marginTop: "1.2rem",
  display: "flex",
  alignItems: "center",
  gap: "0.8rem",
});
