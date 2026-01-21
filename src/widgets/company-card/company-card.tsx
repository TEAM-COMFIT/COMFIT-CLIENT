import { getIndustryLabel, getScaleLabel } from "@/shared/config";

import { CompanyAnalyzeButton } from "./company-analyze-button";
import * as styles from "./company-card.css";
interface CompanyCardProps {
  logoUrl: string;
  id: number;
  companyName: string;
  industry: string;
  scale: string;
}

const CompanyCard = ({
  logoUrl,
  id,
  companyName,
  industry,
  scale,
}: CompanyCardProps) => {
  return (
    <article className={styles.card} aria-label={`${companyName} 기업 카드`}>
      <section className={styles.header}>
        <div className={styles.logoWrapper}>
          <img
            src={logoUrl}
            alt={`${companyName} 로고`}
            className={styles.logoImage}
            loading="lazy"
            decoding="async"
          />
        </div>
        <h3 className={styles.companyName}>{companyName}</h3>
      </section>

      <p className={styles.info}>
        # {getScaleLabel(scale)} <br /> # {getIndustryLabel(industry)}
      </p>

      <section className={styles.action}>
        <CompanyAnalyzeButton companyId={id} />
      </section>
    </article>
  );
};

export { CompanyCard };
