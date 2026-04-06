import { style } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";

export const footerLayout = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  backgroundColor: themeVars.color.gray100,
  width: "100%",
  height: themeVars.height.footer,
  padding: "0 19rem",
});

export const footerLogo = style({
  width: "9.2rem",
  height: "2rem",
  marginBottom: "1.8rem",
});

export const policyContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  rowGap: "0.8rem",
});

export const policyRow = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
});

export const policyItem = style({
  position: "relative",
  color: themeVars.color.gray500,
  ...themeVars.fontStyles.body_m_16,

  selectors: {
    "& + &": {
      marginLeft: "24px",
    },
    "& + &::before": {
      content: "",
      position: "absolute",
      left: "-12px",
      top: "50%",
      transform: "translateY(-50%)",
      width: "1px",
      height: "1.5rem",
      backgroundColor: themeVars.color.gray300,
    },
  },
});

export const instagramIcon = style({
  width: "1.7rem",
  height: "1.7rem",
});

export const footerCopyright = style({
  marginTop: "1.6rem",
  color: themeVars.color.gray400,
  ...themeVars.fontStyles.body_r_14,
});
