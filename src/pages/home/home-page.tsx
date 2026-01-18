import {
  IndustryInterestSelect,
  JobInterestSelect,
} from "@/features/onboarding";
import KERORO from "@images/comfit_web_status.jpg";
import { MajorCompanyCard } from "@/features/home/ui";
import { Company } from "@/shared/assets/images";
import { CompanyGridContainer } from "@/shared/ui/pagination/company-list-container";
import { MatchingListContainer } from "@/shared/ui/pagination/matching-list-container";
import { CompanyCard } from "@/widgets";

import { appContainer } from "./home-page.css";

const HomePage = () => {
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
      {/* 관심 분야 선택 컴포넌트 확인용 */}
      <section style={{ marginTop: 40, display: "grid", gap: 40 }}>
        <IndustryInterestSelect />
        <JobInterestSelect />
      </section>
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
