import { style, styleVariants } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";

const arrowSize = "2.4rem";

const baseStep = style({
  position: "relative",

  width: "27.8rem",
  padding: `2rem calc(${arrowSize}) 2rem calc(${arrowSize} * 2)`,
  borderRadius: "0.4rem",
  userSelect: "none",
  ...themeVars.fontStyles.body_b_16,

  clipPath: `polygon(
    calc(100% - ${arrowSize}) 0%, 
    100% 50%, 
    calc(100% - ${arrowSize}) 100%, 
    0% 100%, 
    ${arrowSize} 50%, 
    0% 0%
  )`,

  // 이전 스텝의 화살표 머리 위로 올라오지 않도록 겹침 처리
  //marginLeft: `calc(${arrowSize} * -1)`,

  selectors: {
    "&:not(:first-child)": {
      marginLeft: "-0.9rem",
    },
    "&:first-child": {
      clipPath: `polygon(
        0% 0%, 
        calc(100% - ${arrowSize}) 0%, 
        100% 50%, 
        calc(100% - ${arrowSize}) 100%, 
        0% 100%
      )`,
    },
    "&:last-child": {
      paddingRight: arrowSize,
      clipPath: `polygon(
        0% 0%,
        100% 0%,
        100% 100%,
        0% 100%,
        ${arrowSize} 50%
      )`,
    },
  },
});

export const stepVariants = styleVariants({
  current: [
    baseStep,
    {
      background: themeVars.color.blue600,
      color: themeVars.color.white,
    },
  ],
  pending: [
    baseStep,
    {
      background: themeVars.color.blue100,
      color: themeVars.color.gray800,
    },
  ],
  // 4단계 결과 (current 제외 이전 step)
  done: [
    baseStep,
    {
      background: themeVars.color.blue200,
      color: themeVars.color.gray900,
    },
  ],
});

export const content = style({
  display: "flex",
  alignItems: "center",
  gap: "1.2rem",
  maxWidth: "17.9rem",
});

// 숫자 뱃지 스타일
export const badge = styleVariants({
  current: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "2rem",
    height: "2rem",
    flexShrink: 0,
    borderRadius: "50%",
    background: themeVars.color.blue200,
    color: themeVars.color.blue600,
    ...themeVars.fontStyles.cap_m_12,
  },
  pending: {
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "2rem",
    height: "2rem",
    borderRadius: "50%",
    background: themeVars.color.blue200,
    color: themeVars.color.blue600,
    ...themeVars.fontStyles.cap_m_12,
  },
  done: {
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "2rem",
    height: "2rem",
    borderRadius: "50%",
    background: themeVars.color.blue300,
    color: themeVars.color.blue600,
    ...themeVars.fontStyles.cap_m_12,
  },
});
