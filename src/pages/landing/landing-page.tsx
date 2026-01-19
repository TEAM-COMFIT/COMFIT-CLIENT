import { useRef } from "react";

import {
  LandingCard,
  WorryCard,
  PointCard,
  CompanySlider,
  AlertModal,
} from "@/features/landing";
import { LANDING_CARD_ITEMS } from "@/features/landing/config/landing-card.constant";
import { CHARACTER, FLOAT_IMG, KEY } from "@/shared/assets/images";
import useDevice from "@/shared/model/use-device";

import * as styles from "./landing-page.css";

const LandingPage = () => {
  const { isMobile } = useDevice();
  const modalRef = useRef<HTMLDialogElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleModal = () => {
    modalRef.current?.showModal();
  };

  const handleScrollToSection = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.layout}>
      {/** 배너 섹션 (Section1) */}
      <section className={styles.banner}>
        <div className={styles.bannerWrapper}>
          <div className={styles.title}>
            <h2 className={styles.gradientTitle}>컴핏으로 완성하는</h2>
            <h2>나만의 커리어 스토리</h2>
          </div>
          <button
            type="button"
            className={styles.button}
            onClick={handleScrollToSection}
          >
            둘러보기
          </button>
        </div>
        <img className={styles.floatImage} src={FLOAT_IMG} alt="홈 이미지" />
      </section>
      {/** 이런 고민 있으신가요? (Section2) */}
      <section className={styles.second} ref={sectionRef}>
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
          {!isMobile && <img src={CHARACTER} alt="코니와 키니" />}
        </div>
      </section>
      {/** 세 번째 섹션 */}
      <section className={styles.third}>
        <h2 className={styles.thirdTitle}>
          <span className={styles.blueText}>컴핏이 제공하는 솔루션</span>
          <br />
          체계적인 프로세스로 {isMobile && <br />}준비 방향을 명확하게
          잡아드립니다
        </h2>
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
      </section>
      {/** 네 번째 섹션 */}
      <section className={styles.fourth}>
        <div className={styles.fourthHeader}>
          <img className={styles.key} src={KEY} alt="키 캐릭터" />
          <div className={styles.fourtTitleWrapper}>
            <h2 className={styles.fourthTitle}>
              <span className={styles.blueText}>
                컴핏과 함께하면{isMobile && <br />}
              </span>{" "}
              확실하게 달라집니다!
            </h2>
            <p className={styles.fourthSubtitle}>
              내가 지원하고 싶은 기업과 나, 이렇게 연결해드려요!
            </p>
          </div>
        </div>
        <PointCard />
      </section>
      {/** 다섯 번째 섹션 */}
      <section className={styles.fifth}>
        <h2 className={styles.fifthTitle}>
          플랫폼·콘텐츠·커머스까지
          <br />
          마케터가 지원하는 기업을 한 곳에
        </h2>
        <CompanySlider />
      </section>
      <footer className={styles.footer}>
        <div className={styles.footerTitleWrapper}>
          <h2 className={styles.footerTitle}>지금 바로 시작하세요</h2>
          <p className={styles.footerSubTitle}>
            첫 커리어 준비, 누구에게나 낯설고 막연합니다.
            <br /> 하지만 올바른 방향과 전략이 있다면 충분히 해낼 수 있습니다
          </p>
        </div>
        <button className={styles.footerButton} onClick={handleModal}>
          경험 매칭하기
        </button>
      </footer>
      {/** 모달  */}
      <AlertModal ref={modalRef} />
    </div>
  );
};

export { LandingPage };
