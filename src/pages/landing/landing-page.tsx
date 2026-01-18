import { LandingCard, WorryCard, PointCard } from "@/features/landing";
import { LANDING_CARD_ITEMS } from "@/features/landing/config/landing-card.constant";
import { CHARACTER, FLOAT_IMG, KEY } from "@/shared/assets/images";

import * as styles from "./landing-page.css";

const LandingPage = () => {
  return (
    <div className={styles.layout}>
      {/** 배너 섹션 (Section1) */}
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
      {/** 이런 고민 있으신가요? (Section2) */}
      <div className={styles.second}>
        <div className={styles.worryCardLeft}>
          <WorryCard />
        </div>
        <div className={styles.worryCardRight}>
          <div className={styles.worryCardTitle}>
            <span className={styles.blueText}>이런 고민</span>, 하고 계신가요?
          </div>
          <div className={styles.worryCardContent}>
            마케팅 취준의 가장 큰 어려움은 방향성입니다
          </div>
          <img src={CHARACTER} alt="컴핏 캐릭터" />
        </div>
      </div>
      {/** 세 번째 섹션 */}
      <div className={styles.third}>
        <h1 className={styles.thirdTitle}>
          <span className={styles.blueText}>컴핏이 제공하는 솔루션</span>
          <br />
          체계적인 프로세스로 준비 방향을 명확하게 잡아드립니다
        </h1>
        <div className={styles.landingCard}>
          {LANDING_CARD_ITEMS.map((item) => (
            <LandingCard
              key={item.title}
              title={item.title}
              content={item.content}
              sideImg={item.sideImg}
            />
          ))}
        </div>
      </div>
      {/** 네 번째 섹션 */}
      <div className={styles.fourth}>
        <div className={styles.fourthHeader}>
          <img src={KEY} alt="키 캐릭터" />
          <div className={styles.fourtTitleWrapper}>
            <h1 className={styles.fourthTitle}>
              <span className={styles.blueText}>컴핏과 함께하면</span> 확실하게
              달라집니다!
            </h1>
            <p className={styles.fourthSubtitle}>
              내가 지원하고 싶은 기업과 나, 이렇게 연결해드려요!
            </p>
          </div>
        </div>
        <PointCard />
      </div>
      <div className={styles.fifth}></div>
      <div className="푸터1"></div>
    </div>
  );
};

export { LandingPage };
