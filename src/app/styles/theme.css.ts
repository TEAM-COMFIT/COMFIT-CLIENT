import { createTheme } from "@vanilla-extract/css";

import { fontStyles } from "@/shared/styles/font-style.css";
import { color } from "@/shared/styles/tokens/color.css";
import { gradient } from "@/shared/styles/tokens/gradient.css";
import { height } from "@/shared/styles/tokens/height.css";
import { shadow } from "@/shared/styles/tokens/shadow.css";
import { zIndex } from "@/shared/styles/tokens/z-index.css";

// 테마 토큰 정의
const tokens = {
  color,
  fontStyles,
  shadow,
  zIndex,
  height,
  gradient,
};

const [themeClass, themeVars] = createTheme(tokens);

export { themeClass, themeVars, tokens };
