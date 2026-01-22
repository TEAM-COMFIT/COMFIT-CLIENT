import { CompanyCard, RefreshButton } from "@/widgets";

import * as styles from "./company-recommendation-section.css";

import type { RecommendCompanyItem } from "@/features/company-detail";

interface CompanyRecommendationSectionProps {
  companyName: string;
  recommendCompanies?: RecommendCompanyItem[];
  onRefresh?: () => void;
  isRefreshing?: boolean;
}

const CompanyRecommendationSection = ({
  companyName,
  recommendCompanies = [],
  onRefresh,
  isRefreshing = false,
}: CompanyRecommendationSectionProps) => {
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
          <RefreshButton onClick={onRefresh} disabled={isRefreshing} />
        </div>

        <div className={styles.companyCardGrid}>
          {recommendCompanies?.map((company) => (
            <CompanyCard
              key={company.id}
              companyName={company.name}
              logoUrl={company.logo}
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
