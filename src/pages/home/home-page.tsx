import { useState } from "react";

import { MajorCompanyCard } from "@/features/home/ui";
import { Company, KERORO } from "@/shared/assets/images";
import { CompanyGridContainer } from "@/shared/ui/pagination/company-list-container";
import { MatchingListContainer } from "@/shared/ui/pagination/matching-list-container";
import { CompanyCard } from "@/widgets";
import { Textfield } from "@/shared/ui/textfield";

import { appContainer } from "./home-page.css";

const HomePage = () => {
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
