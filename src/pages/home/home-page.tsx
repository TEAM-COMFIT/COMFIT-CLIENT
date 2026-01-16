import { CompanyGridContainer } from "@/shared/ui/pagination/company-list-container";
import { MatchingListContainer } from "@/shared/ui/pagination/matching-list-container";
import { CompanyCard } from "@/widgets";
import KERORO from "@images/comfit_web_status.jpg";
import LGLOGO from "@images/lg_logo.png";

import { appContainer } from "./home-page.css";

const HomePage = () => {
  return (
    <div className={appContainer}>
      <h1>프리텐다드</h1>
      <p>카카오로 시작하기</p>
      <CompanyCard
        logoUrl={LGLOGO}
        id={1}
        companyName="LG 전자"
        industry={"MEDIA_CONTENTS"}
        scale={"LARGE"}
      />
      <CompanyGridContainer />
      <MatchingListContainer />
      <img src={KERORO} alt="Keroro" width={400} />
      <p>하하코드래빗아 한번일해보거라</p>
    </div>
  );
};

export { HomePage };
