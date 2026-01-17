import { CompanyLinkButton } from "@/features/company-detail";
import { RefreshButton } from "@/widgets/refresh-button/refresh-button";
import KERORO from "@images/comfit_web_status.jpg";

import { appContainer } from "./home-page.css";
const HomePage = () => {
  return (
    <div className={appContainer}>
      <h1>프리텐다드</h1>
      <CompanyLinkButton href="https://github.com/TEAM-COMFIT" />
      <p>카카오로 시작하기</p>
      <img src={KERORO} alt="Keroro" width={400} />
      <RefreshButton onClick={() => console.log("getAPI 이곳에 넘길 예정")} />
    </div>
  );
};

export { HomePage };
