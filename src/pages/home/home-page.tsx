import {
  IndustryInterestSelect,
  JobInterestSelect,
} from "@/features/onboarding";
import KERORO from "@images/comfit_web_status.jpg";

import { appContainer } from "./home-page.css";

const HomePage = () => {
  return (
    <div className={appContainer}>
      <h1>프리텐다드</h1>
      <p>카카오로 시작하기</p>
      <img src={KERORO} alt="Keroro" width={400} />
      {/* 관심 분야 선택 컴포넌트 확인용 */}
      <section style={{ marginTop: 40, display: "grid", gap: 40 }}>
        <IndustryInterestSelect />
        <JobInterestSelect />
      </section>
    </div>
  );
};

export { HomePage };
