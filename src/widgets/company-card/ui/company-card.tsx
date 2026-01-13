import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const handleAnalyzeClick = () => {
    navigate(`/company/${id}`);
  };

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
        {/* TODO: enum 타입 받아서 변환(company.ts)*/}
        <span># {scale}</span>
        <span># {industry}</span>
      </section>

      <section className={styles.action}>
        {/* TODO: 버튼 공컴으로 변경  */}
        <button
          type="button"
          className={styles.button}
          onClick={handleAnalyzeClick}
        >
          기업 분석 보기
        </button>
      </section>
    </article>
  );
};

export default CompanyCard;
