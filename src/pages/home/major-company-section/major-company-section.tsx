import { useState } from "react";

import { MajorCompanyCard } from "@/features/home/ui";
import { KERORO } from "@/shared/assets/images";
import { RefreshButton } from "@/widgets";

import * as styles from "./major-company-section.css";

import type { ScaleCode } from "@/shared/config";
interface MockData {
  id: number;
  name: string;
  industry: string;
  scale: ScaleCode;
  logo: string;
  photoUrl: string;
}

const MajorCompanySection = () => {
  // TODO: rank 키값으로 사용 예정
  const [, setRank] = useState<number>(1);

  const generateRank = () => {
    return Math.floor(Math.random() * 100) + 1;
  };

  // TODO: api 연동 후 삭제 예정
  // const { data } = useGetMajorCompany({ rank });

  const data: MockData[] = [
    {
      id: 2,
      name: "에스케이네트웍스서비스(주)",
      industry: "IT",
      scale: "LARGE",
      logo: "https://bucket-com-fit-server.s3.ap-northeast-2.amazonaws.com/company/SKNetworks.png",
      photoUrl:
        "https://bucket-com-fit-server.s3.ap-northeast-2.amazonaws.com/random4.png",
    },
    {
      id: 4,
      name: "㈜컴퓨존",
      industry: "IT",
      scale: "MID_LARGE",
      logo: "https://bucket-com-fit-server.s3.ap-northeast-2.amazonaws.com/company/coumpuzone.jpg",
      photoUrl:
        "https://bucket-com-fit-server.s3.ap-northeast-2.amazonaws.com/random6.png",
    },
    {
      id: 5,
      name: "㈜엘림넷",
      industry: "IT",
      scale: "MID_LARGE",
      logo: "https://bucket-com-fit-server.s3.ap-northeast-2.amazonaws.com/company/elimnet.jpg",
      photoUrl:
        "https://bucket-com-fit-server.s3.ap-northeast-2.amazonaws.com/random2.png",
    },
  ];

  const handleRefreshClick = () => {
    setRank(generateRank());
  };

  // 카드 컴포넌트에 데이터를 집어 넣기 위한 구조 분해 할당
  const [first, second, third] = data;

  return (
    <section className={styles.majorSection}>
      {/* 헤더 */}
      <div className={styles.header}>
        <div className={styles.textGroup}>
          <p className={styles.subTitle}>이 기업도 함께 준비해 보세요!</p>
          <p className={styles.title}>
            동일 업종의 주요 기업을 한눈에 비교해보세요
          </p>
        </div>

        <RefreshButton onClick={handleRefreshClick} />
      </div>

      {/* 카드 영역 */}
      <div className={styles.cardGrid}>
        <div className={styles.smallCards}>
          <MajorCompanyCard
            id={first.id}
            imgUrl={KERORO}
            companyName={first.name}
            scale={first.scale}
          />
          <MajorCompanyCard
            id={second.id}
            imgUrl={KERORO}
            companyName={second.name}
            scale={second.scale}
          />
        </div>

        <MajorCompanyCard
          type="large"
          id={third.id}
          imgUrl={KERORO}
          companyName={third.name}
          scale={third.scale}
        />
      </div>
    </section>
  );
};

export { MajorCompanySection };
