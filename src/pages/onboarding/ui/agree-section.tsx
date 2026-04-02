import { PolicyModal } from "@/features/onboarding/ui/policy-modal/policy-modal";
import { AgreeCheckIcon } from "@/shared/assets/icons";
import { modalStore } from "@/shared/model/store";

import * as styles from "../onboarding-page.css";

interface AgreeSectionProps {
  isAgreed: boolean;
  setIsAgreed: (isAgreed: boolean) => void;
}

const AgreeSection = ({ isAgreed, setIsAgreed }: AgreeSectionProps) => {
  const handleModal = (type: "USE" | "PRIVACY") => {
    const MODAL_ID = "ONBOARD_MODAL";

    modalStore.open(
      <PolicyModal type={type} onClose={() => modalStore.close(MODAL_ID)} />,
      undefined,
      undefined,
      MODAL_ID,
      "auto"
    );
  };

  return (
    <div className={styles.agreeGroup}>
      <input
        type="checkbox"
        checked={isAgreed}
        id="agree"
        onChange={() => setIsAgreed(!isAgreed)}
      />
      {/** 실제 눈에 보이는 체크박스, 텍스트 */}
      <label htmlFor="agree" aria-label="이용약관 및 개인정보처리방침 동의">
        <div className={styles.checkbox({ isAgreed })}>
          <AgreeCheckIcon />
        </div>
      </label>
      <div className={styles.agreeContent}>
        Comfit&nbsp;
        <span
          className={styles.underlineText}
          onClick={() => handleModal("USE")}
        >
          이용약관&nbsp;
        </span>
        및&nbsp;
        <span
          className={styles.underlineText}
          onClick={() => handleModal("PRIVACY")}
        >
          개인정보처리방침
        </span>
        에 동의합니다.
      </div>
    </div>
  );
};

export { AgreeSection };
