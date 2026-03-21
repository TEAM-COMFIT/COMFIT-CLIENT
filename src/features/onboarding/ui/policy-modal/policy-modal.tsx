import { Button, Modal } from "@/shared/ui";

import * as styles from "./policy-modal.css";
import { UsePolicyContent } from "./use-policy-content";

interface modalProps {
  type: "USE" | "PRIVACY";
  onClose: () => void;
}

export const PolicyModal = ({ type, onClose }: modalProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.modalHeader}>
        <div>{type === "USE" ? "이용약관" : "개인정보처리방침"}</div>
        <div className={styles.buttonWrapper}>
          <Modal.XButton />
        </div>
      </div>
      <Modal.Content>
        <div className={styles.modalCotent}>
          {type === "USE" ? <UsePolicyContent /> : <></>}
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
