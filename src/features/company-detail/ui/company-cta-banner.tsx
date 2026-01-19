import * as styles from "./company-cta-banner.css";

interface CompanyCtaBannerProps {
  title?: string;
  description?: string;
  buttonText?: string;
  onClick?: () => void;
}

const CompanyCtaBanner = ({
  title = "기업 분석데이터와 자소서 경험 연결하기",
  description = "지금 바로 분석한 기업 정보를 바탕으로 자소서 경험과 연결해보세요!",
  buttonText = "시작하기",
  onClick,
}: CompanyCtaBannerProps) => {
  return (
    <section className={styles.container} aria-label="CTA 배너">
      <div className={styles.textGroup}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{description}</p>
      </div>

      <button type="button" className={styles.button} onClick={onClick}>
        {buttonText}
      </button>

      <div className={styles.decor} aria-hidden />
    </section>
  );
};

export { CompanyCtaBanner };
