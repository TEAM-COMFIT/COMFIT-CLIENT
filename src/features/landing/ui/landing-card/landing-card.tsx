import * as styles from "./landing-card.css";

interface LandingCardProps {
  title: string;
  content: string;
  sideImg: string;
}

const LandingCard = ({ title, content, sideImg }: LandingCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.textGroup}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.content}>{content}</p>
      </div>

      <img
        src={sideImg}
        alt={`${title} 이미지`}
        aria-hidden="true"
        className={styles.sideImage}
      />
    </div>
  );
};

export { LandingCard };
