import { style, styleVariants } from "@vanilla-extract/css";

import { fontStyles } from "@shared/styles/font-style.css";
import { color } from "@shared/styles/tokens/color.css";
import { shadow } from "@shared/styles/tokens/shadow.css";
import { typography } from "@shared/styles/tokens/typography.css";

export const container = style({
  display: "grid",
  gap: "1.6rem",
});

export const boxWrapper = style({
  position: "relative",
});

export const titleRow = style({
  display: "flex",
  alignItems: "center",
  gap: "0.2rem",
  marginBottom: "0.8rem",
});

export const title = style([
  fontStyles.body_m_16,
  {
    fontWeight: "600",
    color: color.black,
  },
]);

export const asterisk = style({
  fontSize: typography.fontSize[14],
  fontWeight: "600",
  lineHeight: "normal",
  color: color.orange500,
});

export const inputBox = style({
  width: "88rem",
  height: "6rem",
  borderRadius: "1.6rem",
  padding: "1.4rem 1.6rem",
  background: color.gray100,
  border: `1px solid ${color.gray200}`,
  display: "flex",
  alignItems: "center",
  gap: "0.8rem",
});

export const inputBoxClickable = style({
  cursor: "pointer",
});

export const inputBoxDefault = style({
  cursor: "default",
});

export const placeholder = style([
  fontStyles.body_m_16,
  {
    color: color.gray400,
  },
]);

export const selectArea = style({
  position: "absolute",
  top: "calc(100% + 0.8rem)",
  left: 0,
  zIndex: 10,
  width: "56rem",
  padding: "2.4rem",
  borderRadius: "1.2rem",
  background: color.white,
  border: `1px solid ${color.gray200}`,
  boxShadow: shadow.shadow2,
});

export const gridContainer = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, 16rem)",
  gap: "1.6rem",
});

const baseOptionButton = style([
  fontStyles.body_m_16,
  {
    width: "16rem",
    height: "6rem",
    padding: "0.8rem 1.6rem",
    borderRadius: "1.2rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    whiteSpace: "nowrap",
    userSelect: "none",
  },
]);

export const optionButton = styleVariants({
  default: [
    baseOptionButton,
    {
      background: color.gray100,
      border: `1.5px solid ${color.gray300}`,
      color: color.gray400,
      cursor: "pointer",
    },
  ],
  selected: [
    baseOptionButton,
    {
      background: color.blue200,
      border: `1.5px solid ${color.blue400}`,
      color: color.blue600,
      cursor: "pointer",
    },
  ],
  disabled: [
    baseOptionButton,
    {
      background: color.gray100,
      border: `1.5px solid ${color.gray300}`,
      color: color.gray400,
      cursor: "not-allowed",
      opacity: 0.6,
    },
  ],
});

export const buttonContainer = style({
  display: "flex",
  justifyContent: "flex-end",
  marginTop: "2.4rem",
});
