import { useState } from "react";

import { Alert } from "@/shared/ui/alert";
import Heart from "@icons/heart.svg?react";
import KERORO from "@images/comfit_web_status.jpg";

import { appContainer } from "./home-page.css";

import type { AlertVariant } from "@/shared/ui/alert";

interface AlertState {
  open: boolean;
  variant: AlertVariant;
  title: string;
  description: string;
}

const HomePage = () => {
  const [alert, setAlert] = useState<AlertState>({
    open: true,
    variant: "info",
    title: "Info",
    description: "날짜 형식이 올바르지 않습니다.",
  });

  const showAlert = (
    variant: AlertVariant,
    title: string,
    description: string
  ) => {
    setAlert({
      open: true,
      variant,
      title,
      description,
    });
  };

  const closeAlert = () => {
    setAlert((prev) => ({ ...prev, open: false }));
  };

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
            showAlert("error", "Error", "날짜 형식이 올바르지 않습니다.")
          }
        >
          Error
        </button>
        <button
          onClick={() =>
            showAlert("success", "Success", "저장이 완료되었습니다.")
          }
        >
          Success
        </button>
        <button
          onClick={() =>
            showAlert("warning", "Warning", "입력값을 다시 확인해주세요.")
          }
        >
          Warning
        </button>
        <button
          onClick={() =>
            showAlert("info", "Info", "회원님의 정보를 조회합니다.")
          }
        >
          Info
        </button>
      </div>

      {alert.open && (
        <Alert
          variant={alert.variant}
          title={alert.title}
          description={alert.description}
          onClose={closeAlert}
        />
      )}
    </div>
  );
};

export { HomePage };
