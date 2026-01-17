import { Alert } from "@/shared/ui/alert";
import { useAlert } from "@/shared/ui/alert/use-alert";
import Heart from "@icons/heart.svg?react";
import KERORO from "@images/comfit_web_status.jpg";

import { appContainer } from "./home-page.css";

const HomePage = () => {
  const { alertState, actions } = useAlert({
    defaultOpen: true,
    defaultVariant: "info",
    defaultTitle: "Info",
    defaultDescription: "날짜 형식이 올바르지 않습니다.",
  });

  return (
    <div className={appContainer}>
      <h1>프리텐다드</h1>
      <p>카카오로 시작하기</p>
      <img src={KERORO} alt="Keroro" width={400} />
      <Heart aria-label="좋아요" />

      {/* Alert 공통 컴포넌트 확인용 버튼 */}
      <div style={{ display: "flex", gap: 8 }}>
        <button
          onClick={() =>
            actions.open("error", "Error", "날짜 형식이 올바르지 않습니다.")
          }
        >
          Error
        </button>
        <button
          onClick={() =>
            actions.open("success", "Success", "저장이 완료되었습니다.")
          }
        >
          Success
        </button>
        <button
          onClick={() =>
            actions.open("warning", "Warning", "입력값을 다시 확인해주세요.")
          }
        >
          Warning
        </button>
        <button
          onClick={() =>
            actions.open("info", "Info", "회원님의 정보를 조회합니다.")
          }
        >
          Info
        </button>
      </div>

      {alertState.open && (
        <Alert
          variant={alertState.variant}
          title={alertState.title}
          description={alertState.description}
          onClose={actions.close}
        />
      )}
    </div>
  );
};

export { HomePage };
