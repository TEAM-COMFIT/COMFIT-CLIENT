import { style, styleVariants } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";

/* ---------- wrapper ---------- */
export const wrapper = style({
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
});

/* ---------- trigger ---------- */
export const trigger = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "0.4rem",
  cursor: "default",
  color: themeVars.color.gray500,
  ...themeVars.fontStyles.body_b_14,
});

/* ---------- icon ---------- */
const iconBase = style({
  flexShrink: 0,
  color: themeVars.color.gray500,
});

/* ---------- icon size variants (help: 20x20, guide: 24x24) ---------- */
export const icon = styleVariants({
  help: [
    iconBase,
    {
      width: "2rem",
      height: "2rem",
    },
  ],
  guide: [
    iconBase,
    {
      width: "2.4rem",
      height: "2.4rem",
    },
  ],
});
/* ---------- tooltip box ---------- */
export const tooltipBox = style({
  position: "absolute",
  top: "100%",
  right: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  backgroundColor: themeVars.color.white,
  border: `1.5px solid ${themeVars.color.normal}`,
  borderRadius: "12px",
  boxShadow: themeVars.shadow.shadow1,

  padding: "2.8rem 4.4rem",
  color: themeVars.color.gray500,
  whiteSpace: "pre-line",

  zIndex: themeVars.zIndex.tooltip,

  opacity: 0,
  pointerEvents: "none",
  transition: "opacity 0.3s ease",

  selectors: {
    [`${wrapper}:hover &`]: {
      opacity: 1,
      pointerEvents: "auto",
    },
    // 트리거와 툴팁 박스 사이 여백 보완
    "&::after": {
      content: '""',
      position: "absolute",
      left: 0,
      right: 0,
      height: "2rem",
      top: "-1.5rem",
      background: "transparent",
    },
  },
  ...themeVars.fontStyles.cap_m_12,
});

export const tooltipBoxSize = styleVariants({
  help: {
    width: "29.1rem",
    height: "23rem",
  },
  guide: {
    width: "28.2rem",
    height: "27.2rem",
  },
});

/* ---------- gap by type ---------- */
export const tooltipGap = styleVariants({
  help: {
    marginTop: "0.8rem",
  },
  guide: {
    marginTop: "1.2rem",
  },
});

/* ---------- hover control ---------- */
export const hoverArea = style({
  selectors: {
    [`${wrapper}:hover &`]: {
      opacity: 1,
      pointerEvents: "auto",
    },
  },
});
