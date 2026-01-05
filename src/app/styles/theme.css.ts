import { createTheme } from "@vanilla-extract/css";
import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

import { fontStyles } from "@/shared/styles/font-style.css";
import { color } from "@/shared/styles/tokens/color.css";

const tokens = {
  color: color,
  fontStyles: fontStyles,
};

const properties = defineProperties({
  properties: tokens,
});
const sprinkles = createSprinkles(properties);

const [themeClass, themeVars] = createTheme(tokens);

export { sprinkles, themeClass, themeVars, tokens };
