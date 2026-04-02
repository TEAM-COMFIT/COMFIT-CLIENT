import { style } from "@vanilla-extract/css";

import { themeVars } from "@/app/styles";
import checkboxDisabled from "@/shared/assets/icons/checkbox_small_disabled.svg";
import checkboxPressed from "@/shared/assets/icons/checkbox_small_pressed.svg";

export const checkbox = style({
  appearance: "none",
  boxSizing: "border-box",
  width: "2.4rem",
  height: "2.4rem",

  borderRadius: 0,
  backgroundColor: "transparent",
  backgroundPosition: "center",
  backgroundSize: "2.4rem 2.4rem",
  backgroundImage: `url("${checkboxDisabled}")`,
  cursor: "pointer",
  display: "inline-block",
  verticalAlign: "middle",
  outline: "none",
  selectors: {
    "&:focus-visible": {
      outline: `0.2rem solid ${themeVars.color.blue400}`,
      outlineOffset: "0.2rem",
    },
    "&:checked": {
      backgroundImage: `url("${checkboxPressed}")`,
    },
  },
});
