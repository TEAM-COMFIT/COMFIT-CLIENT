// home-page.tsx
import { useState } from "react";

import { MajorCompanyCard } from "@/features/home/ui";
import { Company, KERORO } from "@/shared/assets/images";
import { CompanyGridContainer } from "@/shared/ui/pagination/company-list-container";
import { MatchingListContainer } from "@/shared/ui/pagination/matching-list-container";
import { Search } from "@/shared/ui/search";
import { CompanyCard } from "@/widgets";

import { appContainer } from "./home-page.css";

const HomePage = () => {
  const [value, setValue] = useState("");

  return (
    <div className={appContainer}>
      <h1>프리텐다드</h1>
      <p>카카오로 시작하기</p>

      {/* Search 공통 컴포넌트 임시 확인 영역 */}
      <div style={{ margin: "2.4rem 0" }}>
        <Search
          size="full"
          value={value}
          onChange={setValue}
          onSearch={(v: string) => console.log("search:", v)}
          placeholder="Search"
        />
      </div>

      {/* 사이즈별 확인 */}
      <Search size="large" placeholder="Large" />
      <div style={{ height: "1.2rem" }} />
      <Search size="medium" placeholder="Medium" />
      <div style={{ height: "1.2rem" }} />
      <Search size="small" placeholder="Small" />

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
