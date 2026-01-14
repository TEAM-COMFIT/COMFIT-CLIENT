import { ModalBasic } from "@/shared/ui/modal/modal-basic";
import { useModal } from "@/shared/ui/modal/use-modal";
import KERORO from "@images/comfit_web_status.jpg";

import { appContainer } from "./home-page.css";

const HomePage = () => {
  const { isOpen, handleModal } = useModal();

  return (
    <div className={appContainer}>
      <h1>프리텐다드</h1>
      <p>카카오로 시작하기</p>
      <img src={KERORO} alt="Keroro" width={400} />
      <button onClick={handleModal}>열려라 참깨</button>
      <ModalBasic
        isOpen={isOpen}
        onClose={handleModal}
        onConfirm={() => alert("하이")}
        title={`작성 중인 내용이 있습니다.\n 정말 나가시겠습니까?`}
        subTitle={`저장하지 않으면 정보가 사라져요.`}
      />
    </div>
  );
};

export { HomePage };
