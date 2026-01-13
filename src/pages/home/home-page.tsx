import CompanyCard from "@/widgets/company-card/ui/company-card";
import Heart from "@icons/heart.svg?react";
import KERORO from "@images/comfit_web_status.jpg";

import { appContainer } from "./home-page.css";

const HomePage = () => {
  return (
    <div className={appContainer}>
      <h1>프리텐다드</h1>
      <p>카카오로 시작하기</p>
      <CompanyCard
        logoUrl="https://via.placeholder.com/150"
        id={1}
        companyName="LG 전자"
        industry="콘텐츠/미디어/엔터"
        scale="대기업"
      />
      <img src={KERORO} alt="Keroro" width={400} />
      <Heart aria-label="좋아요" />
    </div>
  );
};

export { HomePage };
