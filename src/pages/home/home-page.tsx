import { homeBanner } from "@/shared/assets/images";
import { CompanyGridContainer } from "@/shared/ui/pagination/company-list-container";
import { Search } from "@/shared/ui/search/search";

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
    </main>
  );
};

export { HomePage };
