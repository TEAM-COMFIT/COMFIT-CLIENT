// 임시 컴포넌트
import { useState } from "react";

import { Pagination } from "./pagination";

const ITEMS_PER_PAGE = 8; // 한 페이지 당 아이템 수

const CompanyGridContainer = () => {
  // TODO: 서버에서 받아오는 데이터(추후 해당 값으로 변경 필요) -> queryparams로 페이지네이션 처리
  const [page, setPage] = useState(1);
  const totalPage = 11;
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
        totalPage={totalPage}
        onPageChange={setPage}
      />
    </>
  );
};

export { CompanyGridContainer };
