import { ModalBasic } from "@/shared/ui/modal/modal-basic";
import { useModal } from "@/shared/ui/modal/use-modal";
import Heart from "@icons/heart.svg?react";
import KERORO from "@images/comfit_web_status.jpg";

import { appContainer } from "./home-page.css";

const HomePage = () => {
  const { isOpen, handleModal } = useModal(3000);

  return (
    <div className={appContainer}>
      <h1>프리텐다드</h1>
      <p>카카오로 시작하기</p>
      <img src={KERORO} alt="Keroro" width={400} />
      <Heart aria-label="좋아요" />
      <button onClick={handleModal}>보이게</button>
      {isOpen && (
        <ModalBasic
          isOpen={isOpen}
          onClose={handleModal}
          onConfirm={() => alert("하이")}
          title={`작성 중인 내용이 있습니다.\n 정말 나가시겠습니까?`}
          subTitle={`저장하지 않으면 정보가 사라져요.`}
        />
      )}
    </div>
  );
};

export { HomePage };
