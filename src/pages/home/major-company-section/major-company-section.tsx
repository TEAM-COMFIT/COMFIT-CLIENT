import { useState } from "react";

import { useAuthStore } from "@/app/store";
import { useGetMajorCompanies } from "@/features/home/api/use-get-major-companies.query";
import { MajorCompanyCard } from "@/features/home/ui";
import { RefreshButton } from "@/widgets";

import * as styles from "./major-company-section.css";

const MajorCompanySection = () => {
  const { isLoggedIn } = useAuthStore();
  const [rank, setRank] = useState<number>(1);
  const { data, isLoading } = useGetMajorCompanies({ rank });

  const safeData = data || [];

  const [first, second, third] = safeData;

  const handleRefreshClick = () => {
    const generateRank = Math.floor(Math.random() * 100) + 1;
    setRank(generateRank);
  };

  const subTitle = isLoggedIn
    ? "이 기업도 함께 준비해 보세요!"
    : "아직 관심 산업을 설정하지 않았어요.";
  const title = isLoggedIn
    ? "관심 산업의 주요 기업을 한눈에 비교해보세요"
    : "이런 기업부터 살펴보는 건 어떨까요?";

  return (
    <section className={styles.majorSection}>
      <div className={styles.header}>
        <div className={styles.textGroup}>
          <p className={styles.subTitle}>{subTitle}</p>
          <p className={styles.title}>{title}</p>
        </div>
        <RefreshButton onClick={handleRefreshClick} />
      </div>

      <div className={styles.cardGrid}>
        {isLoading || safeData.length < 3 ? (
          <div className={styles.emptyWrapper}>로딩 중...</div>
        ) : (
          <>
            <div className={styles.smallCards}>
              <MajorCompanyCard
                id={first.id}
                imgUrl={first.photoUrl}
                companyName={first.name}
                scale={first.scale}
              />
              <MajorCompanyCard
                id={second.id}
                imgUrl={second.photoUrl}
                companyName={second.name}
                scale={second.scale}
              />
            </div>

            <MajorCompanyCard
              type="large"
              id={third.id}
              imgUrl={third.photoUrl}
              companyName={third.name}
              scale={third.scale}
            />
          </>
        )}
      </div>
    </section>
  );
};

export { MajorCompanySection };
