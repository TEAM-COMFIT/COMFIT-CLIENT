import * as styles from "@shared/ui/modal/modal.css";

import { Modal } from "./modal";

interface ModalBasicProps {
  isOpen: boolean; // 모달 오픈 여부
  onClose: () => void; // 모달 닫기 액션
  onConfirm: () => void; // 모달 작업 확인 액션
  title: string; // 모달 제목
  subTitle?: string; // 모달 소제목
}

/**
 * @function ModalBasic
 * - 많이 사용되는 모달 스타일을 정의한 모달 래퍼 함수입니다.
 */
export const ModalBasic = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  subTitle,
}: ModalBasicProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.XButton />
      <Modal.Content>
        <Modal.Title>{title}</Modal.Title>
        {subTitle && <Modal.SubTitle>{subTitle}</Modal.SubTitle>}
      </Modal.Content>
      <Modal.Buttons>
        <button
          className={styles.Button({ type: "outline" })}
          onClick={onClose}
        >
          나가기
        </button>
        <button
          className={styles.Button({ type: "default" })}
          onClick={onConfirm}
        >
          이동하기
        </button>
      </Modal.Buttons>
    </Modal>
  );
};
