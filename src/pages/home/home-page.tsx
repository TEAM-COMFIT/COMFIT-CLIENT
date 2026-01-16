import { CompanyLinkButton } from "@/features/company-detail/ui/company-link-button";
import KERORO from "@images/comfit_web_status.jpg";

import { appContainer } from "./home-page.css";

const HomePage = () => {
  return (
    <div className={appContainer}>
      <h1>프리텐다드</h1>
      <CompanyLinkButton href="https://github.com/TEAM-COMFIT" />
      <p>카카오로 시작하기</p>
      <img src={KERORO} alt="Keroro" width={400} />
      <p>하하코드래빗아 한번일해보거라</p>
    </div>
  );
};

export { HomePage };
