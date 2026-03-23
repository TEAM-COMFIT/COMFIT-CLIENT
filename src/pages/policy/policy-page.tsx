import * as styles from "./policy-page.css";
import { PrivacyPolicy } from "./ui/privacy-policy";
import { UsePolicy } from "./ui/use-policy";

interface PolicyPageProps {
  mode: "USE" | "PRIVACY";
}

const POLICY_CONTENT = {
  USE: {
    title: "이용약관",
    subTitle:
      "컴핏 관련 제반 서비스의 이용과 관련하여 필요한 사항을 규정합니다.",
    gap: 24 as const,
    Component: <UsePolicy />,
  },
  PRIVACY: {
    title: "개인정보처리방침",
    subTitle: "컴핏은 개인정보 보호 등에 관한 법률을 준수합니다.",
    gap: 40 as const,
    Component: <PrivacyPolicy />,
  },
};

const PolicyPage = ({ mode }: PolicyPageProps) => {
  const currentPolicy = POLICY_CONTENT[mode];

  return (
    <div className={styles.background}>
      <div
        className={`${styles.wrapper} ${styles.flexColumn({ gap: currentPolicy.gap })}`}
      >
        {/** 약관 타이틀 */}
        <div className={styles.flexColumn({ gap: 16 })}>
          <h1 className={styles.title}>{currentPolicy.title}</h1>
          <p className={styles.subTitle}>{currentPolicy.subTitle}</p>
        </div>
        <div className={styles.divider} />
        {/** 약관 컨텐츠 */}
        {currentPolicy.Component}
      </div>
    </div>
  );
};

export { PolicyPage };
