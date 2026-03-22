import * as styles from "./policy-page.css";
import { PrivacyPolicy } from "./ui/privacy-policy";
import { UsePolicy } from "./ui/use-policy";

interface PolicyPageProps {
  mode: "USE" | "PRIVACY";
}

const PolicyPage = ({ mode }: PolicyPageProps) => {
  return (
    <div className={styles.background}>
      {mode === "USE" ? (
        <div className={`${styles.wrapper} ${styles.flexColumn({ gap: 24 })}`}>
          <div className={styles.flexColumn({ gap: 16 })}>
            <h1 className={styles.title}>이용약관</h1>
            <p className={styles.subTitle}>
              컴핏 관련 제반 서비스의 이용과 관련하여 필요한 사항을 규정합니다.
            </p>
          </div>
          <div className={styles.divider} />
          <UsePolicy />
        </div>
      ) : mode === "PRIVACY" ? (
        <div className={`${styles.wrapper} ${styles.flexColumn({ gap: 40 })}`}>
          <div className={styles.flexColumn({ gap: 16 })}>
            <h1 className={styles.title}>개인정보처리방침</h1>
            <p className={styles.subTitle}>
              컴핏은 개인정보 보호 등에 관한 법률을 준수합니다.
            </p>
          </div>
          <div className={styles.divider} />
          <PrivacyPolicy />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export { PolicyPage };
