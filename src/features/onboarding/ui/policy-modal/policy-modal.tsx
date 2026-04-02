import { Button, Modal } from "@/shared/ui";

import * as styles from "./policy-modal.css";
import { PrivacyPolicyContent } from "./privacy-policy-content";
import { UsePolicyContent } from "./use-policy-content";

interface PolicyModalProps {
  type: "USE" | "PRIVACY";
  onClose: () => void;
}

const POLICY_MODAL_CONTENT = {
  USE: {
    title: "이용약관",
    Content: UsePolicyContent,
  },
  PRIVACY: {
    title: "개인정보처리방침",
    Content: PrivacyPolicyContent,
  },
};

export const PolicyModal = ({ type, onClose }: PolicyModalProps) => {
  const { title, Content } = POLICY_MODAL_CONTENT[type]; // 타입에 따른 약관모달 선택

  return (
    <div className={styles.wrapper}>
      <div className={styles.modalHeader}>
        <h2>{title}</h2>
        <div className={styles.buttonWrapper}>
          <Modal.XButton />
        </div>
      </div>
      <Modal.Content>
        <div className={styles.modalContent}>
          <Content />
        </div>
      </Modal.Content>
      <Modal.Buttons>
        <Button variant="primary" size="full" onClick={onClose}>
          확인
        </Button>
      </Modal.Buttons>
    </div>
  );
};
