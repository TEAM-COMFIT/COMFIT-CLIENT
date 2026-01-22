import { Button } from "../button/button";

import { Modal } from "./modal";

interface ModalBasicProps {
  isOpen: boolean; // 모달 오픈 여부
  onClose: () => void; // 모달 닫기 액션
  onConfirm: () => void; // 모달 작업 확인 액션
  title: string; // 모달 제목
  subTitle?: string; // 모달 소제목
  closeText?: string; // 모달 닫기 버튼 텍스트
  confirmText?: string; // 모달 작업 확인 텍스트
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
  closeText = "나가기",
  confirmText = "이어서 작성하기",
}: ModalBasicProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.XButton />
      <Modal.Content>
        <Modal.Title>{title}</Modal.Title>
        {subTitle && <Modal.SubTitle>{subTitle}</Modal.SubTitle>}
      </Modal.Content>
      <Modal.Buttons>
        <Button variant="secondary" size="large" onClick={onClose}>
          {closeText}
        </Button>
        <Button variant="primary" size="large" onClick={onConfirm}>
          {confirmText}
        </Button>
      </Modal.Buttons>
    </Modal>
  );
};
