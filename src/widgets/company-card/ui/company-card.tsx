import { getIndustryLabel, getScaleLabel } from "@/shared/config";

import CompanyAnalyzeButton from "./company-analyze-button";
import * as styles from "./company-card.css";

import type {
  INDUSTRY_LABEL_TO_CODE,
  IndustryCode,
  SCALE_LABEL_TO_CODE,
  ScaleCode,
} from "@/shared/config";

interface CompanyCardProps {
  logoUrl: string;
  id: number;
  companyName: string;
  industry: IndustryCode;
  scale: ScaleCode;
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
          />
        </div>
        <h3 className={styles.companyName}>{companyName}</h3>
      </section>

      <section className={styles.info}>
        <span># {getScaleLabel(scale)}</span>
        <span># {getIndustryLabel(industry)}</span>
      </section>

      <section className={styles.action}>
        <CompanyAnalyzeButton companyId={id} />
      </section>
    </article>
  );
};

export default CompanyCard;
