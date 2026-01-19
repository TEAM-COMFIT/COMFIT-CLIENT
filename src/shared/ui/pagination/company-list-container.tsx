import { useState } from "react";

import { ScaleFilter, IndustryFilter } from "@/features/home/ui";
import { Logo } from "@/shared/assets/images";
import { Toggle } from "@/shared/ui";
import { CompanyCard } from "@/widgets";

import * as styles from "./company-list-container.css";
import { Pagination } from "./pagination";

import type { IndustryCode, ScaleCode } from "@/shared/config";
const ITEMS_PER_PAGE = 8; // 한 페이지 당 아이템 수

const CompanyGridContainer = () => {
  // TODO: 서버에서 받아오는 데이터(추후 해당 값으로 변경 필요) -> queryparams로 페이지네이션 처리
  const [page, setPage] = useState(1);
  const totalPage = 11;
  const [selectedIndustry, setIndustryFilter] = useState<IndustryCode | null>(
    null
  );
  const [scaleFilter, setScaleFilter] = useState<ScaleCode | null>(null);
  const [isRecruited, setIsRecruited] = useState<boolean>(false);
  return (
    <div className={styles.container}>
      {/* 필터링 섹션 */}
      <div className={styles.filterWrapper}>
        <IndustryFilter value={selectedIndustry} onChange={setIndustryFilter} />
        <ScaleFilter value={scaleFilter} onChange={setScaleFilter} />
        <p className={styles.toggle}>총 {2}개 | 채용중인 기업만</p>
        <Toggle onCheckedChange={setIsRecruited} checked={isRecruited} />
      </div>
      <div className={styles.companyGridStyle}>
        {Array.from({ length: ITEMS_PER_PAGE }).map((_, idx) => (
          <CompanyCard
            id={1 + idx}
            key={idx}
            companyName="(주) Comfit"
            industry={"MEDIA_CONTENTS"}
            scale={"LARGE"}
            logoUrl={Logo}
          />
        ))}
      </div>

      <Pagination
        currentPage={page}
        totalPage={totalPage}
        onPageChange={setPage}
      />
    </div>
  );
};

export { CompanyGridContainer };
