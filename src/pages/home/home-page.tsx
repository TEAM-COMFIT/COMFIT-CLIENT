import * as styles from "./home-page.css";
import { MajorCompanySection } from "./ui/search-section/major-company-section";
import { SearchSection } from "./ui/search-section/search-section";

const HomePage = () => {
  return (
    <main className={styles.container}>
      {/* 검색 섹션 */}
      <SearchSection />

      {/* 주요 기업 섹션 */}
      <MajorCompanySection />
    </main>
  );
};

export { HomePage };
