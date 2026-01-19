import { keyframes, style } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";
import { screen } from "@/shared/styles/tokens/screen.css";
import { BANNER_BG, FOOTER_BG, SECTION_BG } from "@images/index";

const textAlign = {
  right: { textAlign: "right" },
  center: { textAlign: "center" },
} as const;

const suspenseLayout = keyframes({
  "0%": {
    opacity: 0,
  },
  "100%": {
    opacity: 1,
  },
});

export const layout = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  animation: `${suspenseLayout} 1s linear`,
  overflow: "hidden",
});

/** ----- 첫 번째 섹션 ----- */
export const banner = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "6.2rem",

  width: "100%",
  height: "100rem",
  padding: "0 7.2rem",

  ...screen.mobile({
    height: "56.8rem",
    padding: "0 1.4rem",
  }),
});

export const bannerWrapper = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "2.4rem",

  width: "100%",
  height: "70.9rem",
  background: `url(${BANNER_BG}) no-repeat center/cover`,
  borderRadius: "32px",

  ...screen.mobile({
    width: "34.7rem",
    height: "47.6rem",
    gap: "5.2rem",
    background: `url(${BANNER_BG}) no-repeat center/cover`,
    backgroundPosition: "-22rem",
  }),
});

export const title = style({
  marginTop: "8rem",
  textAlign: "center",
  ...themeVars.fontStyles.display_b_40,
  fontWeight: 700,

  ...screen.mobile({
    marginTop: "9rem",
    fontSize: "3rem",
  }),
});

export const gradientTitle = style({
  background: themeVars.gradient.bluePrimary,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",

  backgroundClip: "text",
  color: "transparent",
});

export const button = style({
  width: "18rem",
  padding: "1.65rem 2.4rem",
  backgroundColor: themeVars.color.blue500,
  color: themeVars.color.white,
  borderRadius: "200px",
  ...themeVars.fontStyles.hline_b_18,
  transition: "background-color 0.2s ease-in",

  ...screen.mobile({
    marginBottom: "0.8rem",
  }),

  selectors: {
    "&:hover": {
      backgroundColor: themeVars.color.blue600,
    },
  },
});

export const floatImage = style({
  width: "90rem",
  aspectRatio: 1 / 1,

  position: "absolute",
  top: "35.4rem",

  ...screen.mobile({ width: "32rem", top: "34.2rem" }),
});

/** ------ 두 번째 섹션 ------- */
export const second = style({
  display: "flex",
  justifyContent: "space-between",
  alignSelf: "center",
  width: "144rem",
  height: "90rem",
  margin: "17.7rem 5.7rem 0 0",
  overflow: "hidden",

  ...screen.mobile({
    width: "100%",
    height: "auto",
    minHeight: "59rem",
    flexDirection: "column-reverse",
    justifyContent: "flex-end",
    alignItems: "center",
    margin: "0",
    padding: "2.8rem 1.4rem 7.6rem 1.4rem",
    gap: "4rem",
  }),
});

export const worryCardLeft = style({
  position: "relative",
  ...screen.mobile({
    display: "flex",
    flexDirection: "column",
    gap: "2.4rem",
    width: "100%",
  }),
});

export const worryCardRight = style({
  alignSelf: "flex-end",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  marginLeft: "auto",
  marginBottom: "-8rem",

  ...screen.mobile({
    alignSelf: "center",
    margin: 0,
    alignItems: "center",
    textAlign: "center",
  }),
});

export const worryCardTitle = style({
  color: themeVars.color.gray700,
  ...themeVars.fontStyles.display_b_40,
  ...textAlign.right,
  fontWeight: 700,

  ...screen.mobile({
    ...textAlign.center,
    fontSize: "2.4rem",
    lineHeight: "1.5",
    marginBottom: "0.8rem",
  }),
});

export const blueText = style({
  color: themeVars.color.blue600,
});

export const worryCardContent = style({
  color: themeVars.color.gray500,
  ...themeVars.fontStyles.hline_m_18,
  ...textAlign.right,

  ...screen.mobile({
    fontSize: "1.2rem",
    fontWeight: 500,
  }),
});

/** ------ 세 번째 섹션------ */
export const third = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "8rem",
  zIndex: 0,
  height: "100rem",
  backgroundColor: themeVars.color.blue200,
  selectors: {
    "&::before": {
      content: '""',
      position: "absolute",
      inset: 0,
      background: `url(${SECTION_BG}) lightgray 50% / cover no-repeat`,
      opacity: 0.3,
      zIndex: -1,
    },
  },
  ...screen.mobile({
    justifyContent: "flex-start",
    height: "auto",
    padding: "4.8rem 1.3rem",
    gap: "6rem",
  }),
});

export const thirdTitle = style({
  ...textAlign.center,
  ...themeVars.fontStyles.title_b_36,
  fontWeight: 700,

  ...screen.mobile({
    textAlign: "left",
    fontSize: "2.4rem",
  }),
});

export const landingCard = style({
  display: "flex",
  flexDirection: "column",
  gap: "3.2rem",
  ...screen.mobile({
    gap: "2rem",
  }),
});

/** -------- 네 번째 섹션-------- */
export const fourth = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "8rem",

  padding: "15.6rem",

  ...screen.mobile({
    margin: "0 auto",
    padding: "13.6rem 0",
    width: "100%",
    gap: "4.8rem",
  }),
});

export const fourthHeader = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "4rem",

  ...screen.mobile({
    gap: "0.8rem",
  }),
});

export const key = style({
  width: "4.8rem",
  height: "6.1rem",
  aspectRatio: 48 / 61,
});

export const fourtTitleWrapper = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "0.4rem",

  ...screen.mobile({
    textAlign: "center",
  }),
});

export const fourthTitle = style({
  color: themeVars.color.gray800,
  ...themeVars.fontStyles.title_b_36,
  fontWeight: 700,

  ...screen.mobile({
    fontSize: "2.4rem",
  }),
});

export const fourthSubtitle = style({
  color: themeVars.color.gray500,
  ...themeVars.fontStyles.hline_m_18,

  ...screen.mobile({
    fontSize: "1.2rem",
  }),
});

/**-------- 다섯 번째 섹션-------- */
export const fifth = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "4rem",
  height: "60rem",
  padding: "7.2rem 0",
  backgroundColor: themeVars.color.blue100,

  ...screen.mobile({
    height: "47.2rem",
    padding: "9.1rem 0",
  }),
});

export const fifthTitle = style({
  color: themeVars.color.gray700,
  ...themeVars.fontStyles.title_b_28,
  ...textAlign.center,
  fontWeight: 700,

  ...screen.mobile({
    fontSize: "2.4rem",
  }),
});

/** ------- 푸터 섹션 -------- */
export const footer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "6rem",
  height: "60rem",
  padding: "18rem 0",
  background: `url(${FOOTER_BG}) no-repeat center/cover`,

  ...screen.mobile({
    justifyContent: "center",
    height: "39.4rem",
    padding: 0,
  }),
});

export const footerTitleWrapper = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "1.6rem",
  textAlign: "center",
});

export const footerTitle = style({
  color: themeVars.color.gray700,
  ...themeVars.fontStyles.title_b_36,
  fontWeight: 700,

  ...screen.mobile({
    fontSize: "3.1rem",
  }),
});

export const footerSubTitle = style({
  color: themeVars.color.gray500,
  ...themeVars.fontStyles.body_r_16,
  fontWeight: 400,

  ...screen.mobile({
    fontSize: "1.3rem",
  }),
});

export const footerButton = style({
  width: "16rem",
  height: "6rem",
  padding: "0.8rem 1.6rem",
  color: themeVars.color.white,
  backgroundColor: themeVars.color.blue500,
  borderRadius: "12px",

  selectors: {
    "&:hover": {
      backgroundColor: themeVars.color.blue600,
      ...themeVars.fontStyles.body_m_16,
    },
  },

  ...screen.mobile({
    width: "18rem",
    borderRadius: "200px",
    ...themeVars.fontStyles.hline_b_18,
  }),
});
