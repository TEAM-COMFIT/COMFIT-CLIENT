import { createTheme } from "@vanilla-extract/css";

import { fontStyles } from "@/shared/styles/font-style.css";
import { color } from "@/shared/styles/tokens/color.css";

// 테마 토큰 정의
const tokens = {
  color: color,
  fontStyles: fontStyles,
};

// color와 fontStyle 테마로 생성
const [themeClass, themeVars] = createTheme(tokens);

export { themeClass, themeVars, tokens };
