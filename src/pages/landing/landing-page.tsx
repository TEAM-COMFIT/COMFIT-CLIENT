import { LANDING_CARD_ITEMS } from "@/features/landing/config/landing-card.constant";
import { LandingCard } from "@/features/landing/ui/landing-card/landing-card";
import { FLOAT_IMG } from "@/shared/assets/images";

import * as styles from "./landing-page.css";

const LandingPage = () => {
  return (
    <div>
      <div className={styles.banner}>
        <div className={styles.bannerWrapper}>
          <div className={styles.title}>
            <h1 className={styles.gradientTitle}>컴핏으로 완성하는</h1>
            <h1>나만의 커리어 스토리</h1>
          </div>
          <button type="button" className={styles.button}>
            지금 바로 시작하기
          </button>
        </div>
        <img className={styles.floatImage} src={FLOAT_IMG} alt="홈 이미지" />
      </div>
      <div className="섹션1"></div>
      <div className="섹션2"></div>
      <div className="섹션3">
        {LANDING_CARD_ITEMS.map((item) => (
          <LandingCard
            key={item.title}
            title={item.title}
            content={item.content}
            sideImg={item.sideImg}
          />
        ))}
      </div>
      <div className="섹션4"></div>
      <div className="푸터1"></div>
    </div>
  );
};

export { LandingPage };
