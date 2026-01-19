import { style } from "@vanilla-extract/css";

import { fontStyles } from "@/shared/styles/font-style.css";
import { color } from "@/shared/styles/tokens/color.css";
import { shadow } from "@/shared/styles/tokens/shadow.css";

export const page = style({
  minHeight: "100vh",
  background: color.gray100,

  padding: "8.8rem 0 8.8rem",
  overflowX: "hidden",
});

export const container = style({
  width: "100%",
  maxWidth: "120rem",
  margin: "0 auto",
  padding: "0 2.4rem",
});

export const card = style({
  width: "106rem",
  height: "148rem",

  background: color.white,
  borderRadius: "40px",
  boxShadow: shadow.shadow1,

  padding: "6.4rem 0",

  position: "relative",
  left: "50%",
  transform: "translateX(-50%)",
});

export const inner = style({
  width: "100%",
  maxWidth: "88rem",
  margin: "0 auto",
  padding: "0 4rem",

  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  gap: "8rem",
});

export const titleBlock = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.2rem",

  alignItems: "flex-start",
  textAlign: "left",
});

export const title = style([
  fontStyles.title_b_24,
  {
    margin: 0,
    color: color.gray900,
    display: "flex",
    alignItems: "center",
    gap: "0.8rem",
  },
]);

export const logo = style({
  width: "14rem",
  height: "2.959rem",
});

export const subtitle = style([
  fontStyles.body_m_16,
  {
    margin: 0,
    color: color.gray500,
  },
]);

export const field = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.2rem",
});

export const label = style([
  fontStyles.body_b_14,
  {
    color: color.gray900,
    display: "flex",
    alignItems: "center",
    gap: "0.4rem",
  },
]);

export const required = style({
  color: color.orange500,
});

export const sectionGroup = style({
  display: "flex",
  flexDirection: "column",
  gap: "4rem",
});

export const buttonWrap = style({
  width: "28rem",
  margin: "0 auto",
});
