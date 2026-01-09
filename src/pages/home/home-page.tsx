import { CompanyGridContainer } from "@/shared/ui/pagination/company_list_container";
import { ExperienceListContainer } from "@/shared/ui/pagination/experience_list_container";
import Heart from "@icons/heart.svg?react";
import KERORO from "@images/comfit_web_status.jpg";

import { appContainer } from "./home-page.css";
const HomePage = () => {
  return (
    <div className={appContainer}>
      <h1>프리텐다드</h1>
      <p>카카오로 시작하기</p>
      <CompanyGridContainer />
      <ExperienceListContainer />
      <img src={KERORO} alt="Keroro" width={400} />
      <Heart aria-label="좋아요" />
    </div>
  );
};

export { HomePage };
