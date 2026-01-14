import { useState } from "react";

import { IndustryFilter, ScaleFilter } from "@/features/home/ui";
import { CompanyGridContainer } from "@/shared/ui/pagination/company-list-container";
import { MatchingListContainer } from "@/shared/ui/pagination/matching-list-container";
import CompanyCard from "@/widgets/company-card/ui/company-card";
import Heart from "@icons/heart.svg?react";
import KERORO from "@images/comfit_web_status.jpg";

import { appContainer } from "./home-page.css";

import type { IndustryCode, ScaleCode } from "@/shared/config/company";

const HomePage = () => {
  const [industry, setIndustry] = useState<IndustryCode | null>(null);
  const [scale, setScale] = useState<ScaleCode | null>(null);
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
      <Heart aria-label="좋아요" />
      <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
        <IndustryFilter value={industry} onChange={setIndustry} />
        <ScaleFilter value={scale} onChange={setScale} />
      </div>
    </div>
  );
};

export { HomePage };
