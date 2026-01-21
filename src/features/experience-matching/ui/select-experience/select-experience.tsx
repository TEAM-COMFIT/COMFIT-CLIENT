import { useState } from "react";

import { formatDateWithDots } from "@/shared/lib";
import { Button } from "@/shared/ui";

import { useReportStore } from "../../store/report.store";

import * as styles from "./select-experience.css";

import type { Experience } from "../../type";

const MOCK_EXPERIENCES: Experience[] = [
  {
    id: 1,
    title: "인스타그램 마케팅 캠페인 기획 및 실행",
    updateAt: "2024.12.28",
  },
  {
    id: 2,
    title: "AI 캐릭터 기반 콘텐츠 마케팅 캠페인 운영",
    updateAt: "2024.11.15",
  },
  {
    id: 3,
    title: "CRM 데이터 기반 고객 타겟 마케팅 운영",
    updateAt: "2024.10.04",
  },
  {
    id: 4,
    title: "IT 솔루션 제안서 기반 세일즈 마케팅 기획",
    updateAt: "2024.09.20",
  },
  {
    id: 5,
    title: "콘텐츠 IP 굿즈 글로벌 유통 전략 수립",
    updateAt: "2024.08.11",
  },
  {
    id: 6,
    title: "전자제품 상품 기획 및 구매 데이터 분석",
    updateAt: "2024.07.30",
  },
  {
    id: 7,
    title: "클라우드 오피스 서비스 광고 스위칭 설계",
    updateAt: "2024.06.14",
  },
];

export const SelectExperience = ({
  prevStep,
  nextStep,
}: {
  prevStep: () => void;
  nextStep: () => void;
}) => {
  const setExperience = useReportStore((state) => state.setExperience);
  const experience = useReportStore((state) => state.experience);
  const [isSelect, setIsSelect] = useState<Experience | null>(experience);

  const totalElements = MOCK_EXPERIENCES.length;

  const handleSelectExperience = (card: Experience) => {
    setIsSelect(card);
  };

  const handleSubmit = () => {
    if (isSelect) {
      setExperience(isSelect);
      nextStep();
    }
  };

  return (
    <div className={styles.layout}>
      <div className={styles.totalCount}>
        총 경험&nbsp;<span className={styles.blueCount}>{totalElements}</span>개
      </div>
      <section className={styles.box}>
        {MOCK_EXPERIENCES.map((experience) => (
          <div
            key={experience.id}
            className={styles.card({
              isSelect: isSelect ? isSelect.id == experience.id : false,
            })}
            onClick={() => handleSelectExperience(experience)}
          >
            <div className={styles.cardTitle}>{experience.title}</div>
            <div className={styles.cardDate}>
              {formatDateWithDots(experience.updateAt)}
            </div>
          </div>
        ))}
      </section>
      <div className={styles.buttonWrapper}>
        <Button variant="secondary" onClick={() => prevStep()}>
          이전단계
        </Button>
        <Button onClick={handleSubmit} disabled={!isSelect}>
          분석진행
        </Button>
      </div>
    </div>
  );
};
