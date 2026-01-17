import { style, styleVariants } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";

export const boxBase = style({
  width: "100%",
  maxWidth: "88.3rem",

  backgroundColor: themeVars.color.gray100,
  border: `1.5px solid ${themeVars.color.normal}`,
  borderRadius: "15px",

  color: themeVars.color.gray800,
  ...themeVars.fontStyles.body_m_16,
});

export const boxPadding = styleVariants({
  medium: { padding: "2.8rem 2rem" },
  large: { padding: "2rem" },
});
