import { useState } from "react";

import { useAuthStore } from "@/app/store";
import { useGetMajorCompanies } from "@/features/home/api/major-companies.query";
import { MajorCompanyCard } from "@/features/home/ui";
import { RefreshButton } from "@/widgets";

import * as styles from "./major-company-section.css";

import type { GetMajorCompaniesData } from "@/features/home/api/major-companies.query";

const MajorCompanySection = () => {
  const { isLoggedIn } = useAuthStore();
  const [rank, setRank] = useState<number>(1);
  const { data, isLoading } = useGetMajorCompanies({ rank });

  // 2. 레이아웃 배치를 위한 data 구조 분해 할당
  const safeData = data || [];
  const [first, second, third]: GetMajorCompaniesData[] = safeData;

  const generateRank = () => {
    return Math.floor(Math.random() * 100) + 1;
  };

  const handleRefreshClick = () => {
    setRank(generateRank());
  };

  const subTitle = isLoggedIn
    ? "이 기업도 함께 준비해 보세요!"
    : "아직 관심 산업을 설정하지 않았어요.";
  const title = isLoggedIn
    ? "관심 산업의 주요 기업을 한눈에 비교해보세요"
    : "이런 기업부터 살펴보는 건 어떨까요?";

  return (
    <section className={styles.majorSection}>
      {/* 헤더 */}
      <div className={styles.header}>
        <div className={styles.textGroup}>
          <p className={styles.subTitle}>{subTitle}</p>
          <p className={styles.title}>{title}</p>
        </div>

        <RefreshButton onClick={handleRefreshClick} />
      </div>

      {/* 카드 영역 */}
      {/* 2. 카드 영역의 높이를 고정하고, 데이터 교체 시 투명도만 조절 */}
      <div className={styles.cardGrid}>
        {isLoading && !data ? (
          <div className={styles.skeletonWrapper}>로딩 중...</div> // 또는 빈 박스
        ) : (
          <>
            <div className={styles.smallCards}>
              <MajorCompanyCard
                id={first?.id}
                imgUrl={first?.photoUrl}
                companyName={first?.name}
                scale={first?.scale}
              />
              <MajorCompanyCard
                id={second?.id}
                imgUrl={second?.photoUrl}
                companyName={second?.name}
                scale={second?.scale}
              />
            </div>

            <MajorCompanyCard
              type="large"
              id={third?.id}
              imgUrl={third?.photoUrl}
              companyName={third?.name}
              scale={third?.scale}
            />
          </>
        )}
      </div>
    </section>
  );
};

export { MajorCompanySection };
