import { style } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";

export const layout = style({
  display: "flex",
  width: "106rem",
  height: "39.2rem",
  marginTop: "4.3rem",
  padding: "1.6rem 0.4rem",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "3.2rem",

  background: themeVars.color.gray100,
  borderRadius: "16px",
  border: `1.5px solid ${themeVars.color.normal}`,
});

export const spinner = style({
  width: "22.9rem",
  height: "15.3rem",
});

export const titleBox = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "0.8rem",
});

export const title = style({
  color: themeVars.color.black,
  ...themeVars.fontStyles.hding_b_22,
});

export const subTitle = style({
  color: themeVars.color.gray500,
  ...themeVars.fontStyles.body_m_16,
});
