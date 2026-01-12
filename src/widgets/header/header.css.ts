import { style } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";

const flexCenter = {
  display: "flex",
  alignItems: "center",
};

export const headerLayout = style({
  display: "flex",
  justifyContent: "center",
  backgroundColor: themeVars.color.white,
  border: `1px solid ${themeVars.color.normal}`,
});

export const header = style({
  ...flexCenter,
  justifyContent: "space-between",
  width: "106rem",
  padding: "1.4rem 2rem",
  margin: "0 auto",
});

export const linkBase = style({
  userSelect: "none",
  textDecoration: "none",
  color: themeVars.color.black,
  flexShrink: 0,
});

export const menus = style({
  ...flexCenter,
  gap: "6.4rem",
});

export const textMenus = style([
  linkBase,
  {
    ...flexCenter,
    gap: "4rem",
  },
]);

export const menu = style([
  linkBase,
  {
    textAlign: "center",
    ...themeVars.fontStyles.body_m_16,
  },
]);

export const profile = style({
  ...flexCenter,
  gap: "2rem",
});

export const name = style([
  linkBase,
  {
    padding: "0.7rem 1.4rem",
    border: `1px solid ${themeVars.color.normal}`,
    borderRadius: "8px",
    ...themeVars.fontStyles.body_m_16,
  },
]);
