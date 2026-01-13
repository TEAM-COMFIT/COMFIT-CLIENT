import { useState } from "react";

import { IndustryFilter, ScaleFilter } from "@/features/home/ui";
import Heart from "@icons/heart.svg?react";
import KERORO from "@images/comfit_web_status.jpg";

import { appContainer } from "./home-page.css";

import type { IndustryCode, ScaleCode } from "@/shared/config/company";
const HomePage = () => {
  const [industry, setIndustry] = useState<IndustryCode | null>(null);
  const [scale, setScale] = useState<ScaleCode | null>(null);
  return (
    <div className={appContainer}>
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
