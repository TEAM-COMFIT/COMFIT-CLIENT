import { MajorCompanyCard } from "@/features/home/ui";
import { KERORO } from "@/shared/assets/images";
import { RefreshButton } from "@/widgets";

import * as styles from "./major-company-section.css";

const MajorCompanySection = () => {
  return (
    <section className={styles.majorSection}>
      {/* 헤더 */}
      <div className={styles.header}>
        <div className={styles.textGroup}>
          <p className={styles.subTitle}>이 기업도 함께 준비해 보세요!</p>
          <p className={styles.title}>
            동일 업종의 주요 기업을 한눈에 비교해보세요
          </p>
        </div>

        <RefreshButton />
      </div>

      {/* 카드 영역 */}
      <div className={styles.cardGrid}>
        <div className={styles.smallCards}>
          <MajorCompanyCard
            id={1}
            imgUrl={KERORO}
            companyName="쿠팡"
            scale="LARGE"
          />
          <MajorCompanyCard
            id={2}
            imgUrl={KERORO}
            companyName="에어프리카"
            scale="MID_LARGE"
          />
        </div>

        <MajorCompanyCard
          type="large"
          id={3}
          imgUrl={KERORO}
          companyName="SK네트웍스"
          scale="LARGE"
        />
      </div>
    </section>
  );
};

export { MajorCompanySection };
