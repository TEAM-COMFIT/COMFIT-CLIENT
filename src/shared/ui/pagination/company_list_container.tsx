// 임시 컴포넌트(삭제 예정)
import { useState } from "react";

import { Pagination } from "./pagination";

const ITEMS_PER_PAGE = 8;

const CompanyGridContainer = () => {
  const [page, setPage] = useState(1);
  const totalPages = 15;

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1.6rem",
        }}
      >
        {Array.from({ length: ITEMS_PER_PAGE }).map((_, idx) => (
          <div key={idx} style={{ height: "10rem", background: "#eee" }}>
            Grid Item {idx + 1 + (page - 1) * ITEMS_PER_PAGE}
          </div>
        ))}
      </div>

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
        blockSize={8}
      />
    </>
  );
};

export { CompanyGridContainer };
