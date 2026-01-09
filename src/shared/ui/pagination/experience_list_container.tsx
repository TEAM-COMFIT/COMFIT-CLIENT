import { useState } from "react";

import { Pagination } from "./pagination";

const ITEMS_PER_PAGE = 5;

export const ExperienceListContainer = () => {
  const [page, setPage] = useState(1);
  const totalPages = 12;

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
        {Array.from({ length: ITEMS_PER_PAGE }).map((_, idx) => (
          <div key={idx} style={{ height: "6rem", background: "#f2f2f2" }}>
            List Item {idx + 1 + (page - 1) * ITEMS_PER_PAGE}
          </div>
        ))}
      </div>

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
        blockSize={5}
      />
    </>
  );
};
