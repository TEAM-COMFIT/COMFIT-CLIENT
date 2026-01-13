import { Modal } from "@/shared/ui/modal/modal";
import { useModal } from "@/shared/ui/modal/use-modal";
import Heart from "@icons/heart.svg?react";
import KERORO from "@images/comfit_web_status.jpg";

import { appContainer } from "./home-page.css";

const HomePage = () => {
  const { autoPlay, isOpen, handleModal } = useModal(3000);

  return (
    <div className={appContainer}>
      <h1>프리텐다드</h1>
      <p>카카오로 시작하기</p>
      <img src={KERORO} alt="Keroro" width={400} />
      <Heart aria-label="좋아요" />
      <button onClick={handleModal}>보이게</button>
      {isOpen && (
        <Modal autoPlay={autoPlay} isOpen={isOpen} onClose={handleModal}>
          {/* type(스타일)은 자동 닫힘 모달에서만 사용됩니다. */}
          <Modal.Content type="auto">
            <Modal.Title>타이틀</Modal.Title>
            <Modal.SubTitle>서브 타이틀</Modal.SubTitle>
          </Modal.Content>
          <Modal.Image />
        </Modal>
      )}
    </div>
  );
};

export { HomePage };
