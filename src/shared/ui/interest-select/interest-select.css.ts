import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { themeVars } from "@/app/styles";

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

export const title = style({
  color: themeVars.color.black,
  ...themeVars.fontStyles.body_b_16,
});

export const asterisk = style({
  color: themeVars.color.orange500,
  ...themeVars.fontStyles.body_b_16,
});

export const inputBox = recipe({
  base: {
    width: "88rem",
    height: "6rem",
    borderRadius: "12px",
    padding: "1.4rem 1.6rem",
    background: themeVars.color.white,
    border: `1.5px solid ${themeVars.color.normal}`,
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

export const placeholder = style({
  color: themeVars.color.gray400,
  ...themeVars.fontStyles.body_m_16,
});

export const selectArea = style({
  position: "absolute",
  top: "calc(100% + 0.8rem)",
  left: 0,
  zIndex: 10,
  width: "56rem",
  padding: "2.4rem",
  borderRadius: "12px",
  background: themeVars.color.white,
  boxShadow: themeVars.shadow.shadow1,
});

export const gridContainer = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, 16rem)",
  gap: "1.6rem",
});

export const optionButton = recipe({
  base: [
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

      color: themeVars.color.gray600,
      ...themeVars.fontStyles.body_m_16,
    },
  ],
  variants: {
    state: {
      default: {},

      inactive: {
        color: themeVars.color.gray400,
      },

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
