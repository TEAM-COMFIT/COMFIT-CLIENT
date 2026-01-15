import { createTheme } from "@vanilla-extract/css";

import { fontStyles } from "@/shared/styles/font-style.css";
import { color } from "@/shared/styles/tokens/color.css";
import { shadow } from "@/shared/styles/tokens/shadow.css";
import { zIndex } from "@/shared/styles/tokens/z-index.css";

// 테마 토큰 정의
const tokens = {
  color,
  fontStyles,
  shadow,
  zIndex,
};

const [themeClass, themeVars] = createTheme(tokens);

export { themeClass, themeVars, tokens };
