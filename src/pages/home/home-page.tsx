import { useState } from "react";

import { MajorCompanyCard } from "@/features/home/ui";
import {
  IndustryInterestSelect,
  JobInterestSelect,
} from "@/features/onboarding";
import { Company } from "@/shared/assets/images";
import { Alert } from "@/shared/ui/alert";
import { useAlert } from "@/shared/ui/alert/use-alert";
import { CompanyGridContainer } from "@/shared/ui/pagination/company-list-container";
import { MatchingListContainer } from "@/shared/ui/pagination/matching-list-container";
import { Textfield } from "@/shared/ui/textfield";
import { CompanyCard } from "@/widgets";
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
  const [description, setDescription] = useState("");
  const isEdit = true;

  return (
    <div className={appContainer}>
      <h1>프리텐다드</h1>
      <p>카카오로 시작하기</p>
      <CompanyCard
        logoUrl={KERORO}
        id={1}
        companyName="LG 전자"
        industry={"MEDIA_CONTENTS"}
        scale={"LARGE"}
      />
      <CompanyGridContainer />
      <MatchingListContainer />
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
      {/* 관심 분야 선택 컴포넌트 확인용 */}
      <section style={{ marginTop: 40, display: "grid", gap: 40 }}>
        <IndustryInterestSelect />
        <JobInterestSelect />
      </section>
      <Textfield
        type="jobDescription"
        placeholder="자기소개를 입력해주세요."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        mode={isEdit ? "edit" : "view"}
      />
      <p>하하코드래빗아 한번일해보거라</p>
      <MajorCompanyCard
        id={1}
        companyName="IBK 기업은행"
        scale="LARGE"
        type="medium"
        imgUrl={Company}
      />
      <MajorCompanyCard
        id={2}
        companyName="컴핏"
        scale="PUBLIC_CORP"
        type="large"
        imgUrl={Company}
      />
    </div>
  );
};

export { HomePage };
