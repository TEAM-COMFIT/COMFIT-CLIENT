import { Link } from "react-router-dom";

import { ROUTES } from "@/app/routes/paths";
import { KERORO } from "@/shared/assets/images/index.ts";
import { CompanyCard, RefreshButton } from "@/widgets";

import * as styles from "./company-recommendation-section.css";

import type { IndustryCode, ScaleCode } from "@/shared/config";

interface RecommendCompanyItem {
  id: number;
  companyName: string;
  logoUrl: string;
  industry: IndustryCode;
  scale: ScaleCode;
}

interface CompanyRecommendationSectionProps {
  companyName: string;
  recommendCompanies: RecommendCompanyItem[];
}

const CompanyRecommendationSection = ({
  companyName,
  recommendCompanies,
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

          <div className={styles.refreshButtonArea}>
            <RefreshButton />
          </div>
        </div>

        <div className={styles.companyCardGrid}>
          {recommendCompanies.map((company) => (
            <Link
              key={company.id}
              to={ROUTES.COMPANY(String(company.id))}
              className={styles.companyCardLink}
            >
              <CompanyCard {...company} logoUrl={KERORO} /> {/* 임시 이미지 */}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export { CompanyRecommendationSection };
