import { AgreeCheckIcon } from "@/shared/assets/icons";

import * as styles from "../onboarding-page.css";

interface AgreeSectionProps {
  isAgreed: boolean;
  setIsAgreed: (isAgreed: boolean) => void;
}

const AgreeSection = ({ isAgreed, setIsAgreed }: AgreeSectionProps) => {
  return (
    <div className={styles.agreeGroup}>
      <input
        type="checkbox"
        checked={isAgreed}
        id="agree"
        onChange={() => setIsAgreed(!isAgreed)}
      />
      {/** 실제 눈에 보이는 체크박스, 텍스트 */}
      <label htmlFor="agree" className={styles.agreeContent}>
        <div className={styles.checkbox({ isAgreed })}>
          <AgreeCheckIcon />
        </div>
        <p>
          Comfit <span className={styles.underlineText}>이용약관</span> 및{" "}
          <span className={styles.underlineText}>개인정보처리방침</span>에
          동의합니다.
        </p>
      </label>
    </div>
  );
};

export { AgreeSection };
