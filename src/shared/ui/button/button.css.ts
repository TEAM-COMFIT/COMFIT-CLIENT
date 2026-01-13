import {
  style,
  createVar,
  globalStyle,
  fallbackVar,
} from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { fontStyles } from "@/shared/styles/font-style.css";
import { color } from "@/shared/styles/tokens/color.css";

export const bgVar = createVar();
export const textVar = createVar();
export const borderVar = createVar();
export const widthVar = createVar();
export const pressedBgVar = createVar();
export const pressedTextVar = createVar();
export const pressedBorderVar = createVar();

const buttonBase = style({
  vars: {
    [widthVar]: "auto",
  },
  boxSizing: "border-box",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0.8rem 1.6rem",
  gap: "0.4rem",
  fontFamily: "Pretendard",
  border: `1.5px solid ${borderVar}`,
  backgroundColor: bgVar,
  color: textVar,
  width: widthVar,
  cursor: "pointer",
  userSelect: "none",
  transition: "all 0.2s ease-in-out",
  whiteSpace: "nowrap",
  overflow: "hidden",

  selectors: {
    "&:disabled": {
      opacity: 1,
      backgroundColor: color.gray100,
      border: "1.5px solid var(--Line-normal, rgba(112, 115, 124, 0.22))",
      color: color.gray400,
    },
    "&:active:not(:disabled), &[data-toggled='true']": {
      backgroundColor: fallbackVar(pressedBgVar, bgVar),
      color: fallbackVar(pressedTextVar, textVar),
      borderColor: fallbackVar(pressedBorderVar, borderVar),
    },
  },
});

export const iconWrapper = style({
  display: "inline-flex",
  lineHeight: 0,
});

// 아이콘 크기
globalStyle(`${iconWrapper} svg`, {
  width: "var(--icon-size, 2.4rem)",
  height: "var(--icon-size, 2.4rem)",
  flexShrink: 0,
});

export const iconDefaultStyle = style({
  display: "inline-flex",
  transition: "opacity 0.1s",
  selectors: {
    [`${buttonBase}:active:not(:disabled) &, ${buttonBase}[data-toggled='true'] &`]:
      {
        display: "none",
      },
  },
});

export const iconPressedStyle = style({
  display: "none",
  selectors: {
    [`${buttonBase}:active:not(:disabled) &, ${buttonBase}[data-toggled='true'] &`]:
      {
        display: "inline-flex",
      },
  },
});

export const button = recipe({
  base: buttonBase,
  variants: {
    variant: {
      primary: {
        vars: {
          [bgVar]: color.blue500,
          [textVar]: color.white,
          [borderVar]: "transparent",
        },
        selectors: {
          "&:hover:not(:disabled)": { vars: { [bgVar]: color.blue600 } },
          "&:active:not(:disabled)": { vars: { [bgVar]: color.blue600 } },
        },
      },
      secondary: {
        vars: {
          [bgVar]: color.white,
          [textVar]: color.blue600,
          [borderVar]: color.blue600,
        },
        selectors: {
          "&:active:not(:disabled)": { vars: { [bgVar]: color.blue200 } },
        },
      },
      outline: {
        vars: {
          [bgVar]: color.white,
          [textVar]: color.blue600,
          [borderVar]: color.blue600,
        },
        selectors: {
          "&:active:not(:disabled)": {
            vars: {
              [bgVar]: color.blue600,
              [textVar]: color.white,
              [borderVar]: "transparent",
            },
          },
        },
      },
    },
    size: {
      full: {
        width: "34rem",
        height: "6rem",
        borderRadius: "12px",
        ...fontStyles.hline_m_18,
      },
      large: {
        width: "16rem",
        height: "6rem",
        borderRadius: "12px",
        ...fontStyles.body_m_14,
      },
      medium: {
        width: "12rem",
        height: "4.8rem",
        borderRadius: "12px",
        ...fontStyles.body_m_14,
      },
      small: {
        width: "8rem",
        height: "4rem",
        borderRadius: "8px",
        ...fontStyles.body_m_14,
      },
    },
    iconOnly: {
      true: {
        minWidth: "auto",
        width: "5.6rem",
        height: "4.8rem",
        border: "1.5px solid var(--Line-normal, rgba(112, 115, 124, 0.22))",
      },
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});

/* 아이콘 버튼 */

export const kakaoStyle = style({
  width: "48rem",
  height: "7.2rem",

  padding: 0,
  border: "none",
  background: "none",
});

export const bookmarkStyle = style({
  ...fontStyles.body_r_14,
  transition: "none",
});

export const companyLinkStyle = style({
  width: "12rem",
  ...fontStyles.body_r_14,
  transition: "none",
});

export const expToggleStyle = style({
  width: "12rem",
  ...fontStyles.body_r_14,
  vars: {
    "--icon-size": "1.6rem",
  },
  transition: "none",
});

export const companyAnalysisStyle = style({
  width: "21.8rem",
  height: "4.8rem",
  gap: "0.8rem",
  transition: "none",
});

export const iconOnlyStyle = style({
  width: "5.6rem",
  height: "4.4rem",
  border: "1.5px solid var(--Line-normal, rgba(112, 115, 124, 0.22))",
  transition: "none",
});
