import { useState } from "react";

import ExperienceFilter from "@/widgets/experience-filter/ui/experience-filter";

import type { ExperienceTypeCode } from "@/shared/config/experience";

const ExperiencePage = () => {
  const [filter, setFilter] = useState<ExperienceTypeCode | null>(null);
  return (
    <div>
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
