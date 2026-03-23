import { Button, Modal } from "@/shared/ui";

import * as styles from "./policy-modal.css";
import { PrivacyPolicyContent } from "./privacy-policy-content";
import { UsePolicyContent } from "./use-policy-content";

interface PolicyModalProps {
  type: "USE" | "PRIVACY";
  onClose: () => void;
}

export const PolicyModal = ({ type, onClose }: PolicyModalProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.modalHeader}>
        <h2>{type === "USE" ? "이용약관" : "개인정보처리방침"}</h2>
        <div className={styles.buttonWrapper}>
          <Modal.XButton />
        </div>
      </div>
      <Modal.Content>
        <div className={styles.modalContent}>
          {type === "USE" ? <UsePolicyContent /> : <PrivacyPolicyContent />}
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
