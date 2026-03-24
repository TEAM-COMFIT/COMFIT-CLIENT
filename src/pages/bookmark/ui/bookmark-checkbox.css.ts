import { style } from "@vanilla-extract/css";

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
    "&:checked": {
      backgroundImage: `url("${checkboxPressed}")`,
    },
  },
});
