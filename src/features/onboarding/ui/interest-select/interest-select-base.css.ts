import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { themeVars } from "@/app/styles";
import { fontStyles } from "@shared/styles/font-style.css";
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
    fontWeight: typography.fontWeight.semibold,
    color: themeVars.color.black,
  },
]);

export const asterisk = style({
  fontSize: typography.fontSize[14],
  fontWeight: typography.fontWeight.semibold,
  lineHeight: "normal",
  color: themeVars.color.orange500,
});

export const inputBox = recipe({
  base: {
    width: "88rem",
    height: "6rem",
    borderRadius: "16px",
    padding: "1.4rem 1.6rem",
    background: themeVars.color.gray100,
    border: `1px solid ${themeVars.color.gray200}`,
    display: "flex",
    alignItems: "center",
    gap: "0.8rem",
  },
  variants: {
    isOpen: {
      true: { cursor: "default" },
      false: { cursor: "pointer" },
    },
  },
  defaultVariants: {
    isOpen: false,
  },
});

export const placeholder = style([
  fontStyles.body_m_16,
  {
    color: themeVars.color.gray400,
  },
]);

export const selectArea = style({
  position: "absolute",
  top: "calc(100% + 0.8rem)",
  left: 0,
  zIndex: 10,
  width: "56rem",
  padding: "2.4rem",
  borderRadius: "12px",
  background: themeVars.color.white,
});

export const gridContainer = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, 16rem)",
  gap: "1.6rem",
});

export const optionButton = recipe({
  base: [
    fontStyles.body_m_16,
    {
      width: "16rem",
      height: "6rem",
      padding: "0.8rem 1.6rem",
      borderRadius: "12px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      whiteSpace: "nowrap",
      userSelect: "none",
      cursor: "pointer",
      border: `1.5px solid ${themeVars.color.gray300}`,
      background: themeVars.color.gray100,
      color: themeVars.color.gray400,
    },
  ],
  variants: {
    state: {
      default: {},
      selected: {
        background: themeVars.color.blue200,
        border: `1.5px solid ${themeVars.color.blue400}`,
        color: themeVars.color.blue600,
      },
      disabled: {
        cursor: "not-allowed",
        opacity: 0.6,
      },
    },
  },
  defaultVariants: {
    state: "default",
  },
});

export const buttonContainer = style({
  display: "flex",
  justifyContent: "flex-end",
  marginTop: "2.4rem",
});
