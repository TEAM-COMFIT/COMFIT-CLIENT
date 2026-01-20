import { useNavigate } from "react-router-dom";

import { ROUTES } from "@/app/routes/paths";
import { COMPANY_BOOK } from "@/shared/assets/images";
import { Button } from "@/shared/ui";

import * as styles from "./company-cta-banner.css";

export interface CompanyCtaBannerProps {
  companyId: number;
  className?: string;
}

const CompanyCtaBanner = ({ companyId, className }: CompanyCtaBannerProps) => {
  const navigate = useNavigate();
  const handleCtaClick = () => {
    navigate(`${ROUTES.EXPERIENCE_MATCHING}?companyId=${companyId}`);
  };
  return (
    <section
      className={[styles.container, className].filter(Boolean).join(" ")}
      aria-label="기업 분석데이터와 자소서 경험 연결 CTA"
    >
      <div className={styles.left}>
        <h3 className={styles.title}>기업 분석데이터와 자소서 경험 연결하기</h3>
        <p className={styles.desc}>
          지금 바로 분석된 기업 정보를 바탕으로 자소서 경험과 연결해보세요!
        </p>
      </div>

      <div className={styles.right}>
        <Button variant="secondary" onClick={handleCtaClick}>
          시작하기
        </Button>
      </div>
      <img
        className={styles.bookImage}
        src={COMPANY_BOOK}
        alt=""
        aria-hidden="true"
      />
    </section>
  );
};

export { CompanyCtaBanner };
