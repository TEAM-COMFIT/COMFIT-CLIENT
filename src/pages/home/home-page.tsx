import { useState } from "react";

import { IndustryFilter } from "@/features/home/ui/industry-filter";
import { ScaleFilter } from "@/features/home/ui/scale-filter";
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
      <img src={KERORO} alt="Keroro" width={400} />
      <Heart aria-label="좋아요" />
      <IndustryFilter value={industry} onChange={setIndustry} />
      <ScaleFilter value={scale} onChange={setScale} />
    </div>
  );
};

export { HomePage };
