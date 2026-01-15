import { MajorCompanyCard } from "@/features/home/ui";
import { Company, KERORO } from "@/shared/assets/images";

import { appContainer } from "./home-page.css";

const HomePage = () => {
  return (
    <div className={appContainer}>
      <h1>프리텐다드</h1>
      <p>카카오로 시작하기</p>
      <img src={KERORO} alt="Keroro" width={400} />
      <MajorCompanyCard
        id={1}
        companyName="IBK 기업은행"
        industry="LARGE"
        type="medium"
        imgUrl={Company}
      />
      <MajorCompanyCard
        id={2}
        companyName="컴핏"
        industry="PUBLIC_CORP"
        type="large"
        imgUrl={Company}
      />
    </div>
  );
};

export { HomePage };
