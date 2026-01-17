import { useState } from "react";

import { ExperienceFilter } from "@/widgets";

import { appContainer } from "./experience-page.css";

import type { ExperienceTypeCode } from "@/shared/config/experience";
const ExperiencePage = () => {
  const [filter, setFilter] = useState<ExperienceTypeCode | null>(null);
  return (
    <div className={appContainer}>
      <h1>Experience List Page</h1>
      <div
        style={{
          paddingLeft: "1rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <p>선택된 경험분류: {filter}</p>
        <ExperienceFilter value={filter} onChange={setFilter} />
      </div>
    </div>
  );
};

export { ExperiencePage };
