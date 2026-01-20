import { KERORO } from "@/shared/assets/images/index";
import { CompanyCard, RefreshButton } from "@/widgets";

import * as styles from "./company-recommendation-section.css";

import type { RecommendCompanyItem } from "@/pages/company-detail/company-detail-page";

interface CompanyRecommendationSectionData {
  name: string;
  recommendCompanies: RecommendCompanyItem[];
}

interface CompanyRecommendationSectionProps {
  data: CompanyRecommendationSectionData;
}

const CompanyRecommendationSection = ({
  data,
}: CompanyRecommendationSectionProps) => {
  const { name: companyName, recommendCompanies } = data;
  return (
    <section className={styles.recommendSection}>
      <div className={styles.recommendInner}>
        <div className={styles.recommendHeader}>
          <div className={styles.recommendTextGroup}>
            <h2 className={styles.recommendTitle}>
              이 기업과 함께 준비해 보세요
            </h2>
            <p className={styles.recommendDesc}>
              {companyName}과(와) 비슷한 업종의 기업 리스트를 모았습니다.
            </p>
          </div>
          {/* TODO: 새로고침 기능 연동 예정 */}
          <RefreshButton />
        </div>

        <div className={styles.companyCardGrid}>
          {recommendCompanies.map((company) => (
            <CompanyCard
              key={company.id}
              companyName={company.name}
              logoUrl={KERORO}
              id={company.id}
              industry={company.industry}
              scale={company.scale}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { CompanyRecommendationSection };
