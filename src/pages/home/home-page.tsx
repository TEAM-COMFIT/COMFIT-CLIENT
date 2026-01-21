import * as styles from "./home-page.css";
import { MajorCompanySection } from "./major-company-section/major-company-section";
import { SearchSection } from "./search-section/search-section";

const HomePage = () => {
  return (
    <main className={styles.container}>
      <SearchSection />
      <MajorCompanySection />
    </main>
  );
};

export { HomePage };
