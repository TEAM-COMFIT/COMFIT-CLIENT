import {
  AIFRICA,
  BUNKERKIDS,
  CJENM,
  COMPUZONE,
  COUPANG,
  POLARIS,
  SARAMIN,
  SK,
} from "@/shared/assets/images";

export const SLIDER_TOP = [
  { id: 1, name: "Coupang", src: COUPANG },
  { id: 2, name: "SK", src: SK },
  { id: 3, name: "CJ ENM", src: CJENM },
  { id: 4, name: "Saramin", src: SARAMIN },
  { id: 5, name: "Polaris", src: POLARIS },
  { id: 6, name: "AIFRICA", src: AIFRICA },
  { id: 7, name: "Bunkerkids", src: BUNKERKIDS },
  { id: 8, name: "Compuzone", src: COMPUZONE },
];

export const SLIDER_BOTTOM = [
  ...SLIDER_TOP.slice(4),
  ...SLIDER_TOP.slice(0, 4),
];
