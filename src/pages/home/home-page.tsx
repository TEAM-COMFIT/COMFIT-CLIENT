import { useState } from "react";

import { IndustryFilter } from "@/features/home/ui/industry-filter";
import Heart from "@icons/heart.svg?react";
import KERORO from "@images/comfit_web_status.jpg";

import { appContainer } from "./home-page.css";

import type { IndustryCode } from "@/shared/config/company";
const HomePage = () => {
  const [industry, setIndustry] = useState<IndustryCode | null>(null);
  return (
    <div className={appContainer}>
      <h1>프리텐다드</h1>
      <p>카카오로 시작하기</p>
      <img src={KERORO} alt="Keroro" width={400} />
      <Heart aria-label="좋아요" />
      <IndustryFilter value={industry} onChange={setIndustry} />
    </div>
  );
};

export { HomePage };
