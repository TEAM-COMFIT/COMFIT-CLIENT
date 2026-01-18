import { SLIDER_BOTTOM, SLIDER_TOP } from "../../config/company-slider";

import * as styles from "./company-slider.css";

interface SlideGroupProps {
  slide: typeof SLIDER_TOP;
}

export const CompanySlider = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.track}>
        <SlideGroup slide={SLIDER_TOP} />
        <SlideGroup slide={SLIDER_TOP} />
      </div>
      <div className={styles.track}>
        <SlideGroup slide={SLIDER_BOTTOM} />
        <SlideGroup slide={SLIDER_BOTTOM} />
      </div>
    </div>
  );
};

const SlideGroup = ({ slide }: SlideGroupProps) => {
  return (
    <div className={styles.slide}>
      {slide.map((logo, index) => (
        <img
          key={logo.id}
          src={logo.src}
          alt={logo.name}
          className={styles.item({ isEven: index % 2 === 0 })}
        />
      ))}
    </div>
  );
};
