import { MajorCompanyCard } from "@/features/home/ui";
import { homeBanner, KERORO } from "@/shared/assets/images";
import { CompanyGridContainer } from "@/shared/ui/pagination/company-list-container";
import { Search } from "@/shared/ui/search/search";
import { RefreshButton } from "@/widgets";

import * as styles from "./home-page.css";

const HomePage = () => {
  return (
    <main className={styles.container}>
      <section
        className={styles.heroSection}
        style={{ backgroundImage: `url(${homeBanner})` }}
      >
        <div className={styles.heroContent}>
          <p className={styles.subText}>
            마케터를 위한 기업 분석과 자소서 작성 가이드
          </p>

          <h1 className={styles.mainText}>
            기업을 이해하는 깊이만큼,
            <br />
            <span className={styles.highlight}>지원 전략</span>이 달라집니다
          </h1>

          <div className={styles.searchWrapper}>
            <Search
              size="medium"
              placeholder="지원하고 싶은 기업을 검색해보세요"
            />
          </div>
        </div>
      </section>
      {/* 기업 리스트 섹션 */}
      <section className={styles.companyListSection}>
        {/* 기업 리스트 섹션 */}
        <CompanyGridContainer />
      </section>

      {/* 주요 기업 섹션 */}
      <section className={styles.majorSection}>
        {/* 텍스트 섹션 */}
        <div className={styles.header}>
          <div className={styles.textGroup}>
            <p className={styles.subTitle}>이 기업도 함께 준비해 보세요!</p>
            <p className={styles.title}>
              동일 업종의 주요 기업을 한눈에 비교해보세요
            </p>
          </div>

          <RefreshButton />
        </div>

        {/* 카드 섹션 */}
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
    </main>
  );
};

export { HomePage };
