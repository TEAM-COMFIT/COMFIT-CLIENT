import { globalStyle, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { fontStyles } from "@/shared/styles/font-style.css";
import { color } from "@/shared/styles/tokens/color.css";

const VARIANT = {
  warning: {
    bg: color.toastWarningBg,
    border: color.toastWarningBorder,
    icon: color.toastWarningIcon,
  },
  info: {
    bg: color.toastInfoBg,
    border: color.toastInfoBorder,
    icon: color.toastInfoIcon,
  },
  success: {
    bg: color.toastSuccessBg,
    border: color.toastSuccessBorder,
    icon: color.toastSuccessIcon,
  },
  error: {
    bg: color.toastErrorBg,
    border: color.toastErrorBorder,
    icon: color.toastErrorIcon,
  },
} as const;

// 우측 하단 고정 위치
export const alertViewport = style({
  position: "fixed",
  right: "6.7rem",
  bottom: "5.3rem",
  zIndex: 1000,
});

// 카드
export const alertRoot = recipe({
  base: {
    width: "41.2rem",
    height: "8rem",
    boxSizing: "border-box",

    borderRadius: 8,
    borderBottomWidth: "0.4rem",
    borderBottomStyle: "solid",

    boxShadow: "0 0.4rem 0.4rem rgba(0,0,0,0.25)",
    overflow: "hidden",

    display: "flex",
    alignItems: "flex-start",
    gap: "1.6rem",

    padding: "1.6rem",
    position: "relative",
  },

  variants: {
    variant: {
      warning: {
        background: VARIANT.warning.bg,
        borderBottomColor: VARIANT.warning.border,
      },
      info: {
        background: VARIANT.info.bg,
        borderBottomColor: VARIANT.info.border,
      },
      success: {
        background: VARIANT.success.bg,
        borderBottomColor: VARIANT.success.border,
      },
      error: {
        background: VARIANT.error.bg,
        borderBottomColor: VARIANT.error.border,
      },
    },
  },
});

// 좌측 아이콘
export const leadingIcon = recipe({
  base: {
    width: "2.8rem",
    height: "2.8rem",
    flexShrink: 0,
    display: "block",
    marginTop: "1rem",
  },
  variants: {
    variant: {
      warning: { color: VARIANT.warning.icon },
      info: { color: VARIANT.info.icon },
      success: { color: VARIANT.success.icon },
      error: { color: VARIANT.error.icon },
    },
  },
});

// SVG 색상 강제
globalStyle(`${leadingIcon.classNames.base} *`, {
  fill: "currentColor",
  stroke: "currentColor",
});

// 텍스트 영역
export const textArea = style({
  flex: 1,
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  gap: "0.6rem",
});

export const title = style({
  margin: 0,
  color: color.black,
  ...fontStyles.body_b_16,
});

export const description = style({
  margin: 0,
  color: color.gray600,
  ...fontStyles.cap_m_12,
});

// 닫기 버튼
export const closeButton = style({
  width: "2.4rem",
  height: "2.4rem",
  position: "absolute",
  top: "1.2rem",
  right: "1.2rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  padding: 0,
  background: "transparent",
  border: 0,
  cursor: "pointer",
  opacity: 0.3,
});

export const closeIcon = style({
  color: color.gray800,
});

globalStyle(`${closeIcon} *`, {
  fill: "currentColor",
  stroke: "currentColor",
});
