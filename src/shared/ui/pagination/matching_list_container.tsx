// 임시 컴포넌트
import { useState } from "react";

import { Pagination } from "./pagination";

const ITEMS_PER_PAGE = 5;

export const MatchingListContainer = () => {
  // TODO: 서버에서 받아오는 데이터(추후 해당 값으로 변경 필요)
  const [page, setPage] = useState(1);
  const totalPage = 12;
  const totalElements = totalPage * ITEMS_PER_PAGE;

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
        totalPage={totalPage}
        onPageChange={setPage}
      />
    </>
  );
};
