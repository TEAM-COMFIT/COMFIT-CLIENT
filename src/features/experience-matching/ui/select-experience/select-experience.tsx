import { useState } from "react";

import { formatDateWithDots } from "@/shared/lib";
import { Button } from "@/shared/ui";
import { useGetExperience } from "@features/experience-matching/index";

import { useReportStore } from "../../store/report.store";

import * as styles from "./select-experience.css";

import type { Item } from "@/shared/api/generate/http-client";

export const SelectExperience = ({
  prevStep,
  nextStep,
}: {
  prevStep: () => void;
  nextStep: () => void;
}) => {
  const setExperience = useReportStore((state) => state.setExperience);
  const experience = useReportStore((state) => state.experience);
  const [isSelect, setIsSelect] = useState<Item | null>(experience);

  const { data } = useGetExperience(); // 경험 불러오기 API

  // 경험 선택하기
  const handleSelectExperience = (card: Item) => {
    setIsSelect(card);
  };

  // 다음 단계로
  const handleSubmit = () => {
    if (isSelect) {
      setExperience(isSelect);
      nextStep();
    }
  };

  return (
    <div className={styles.layout}>
      <div className={styles.totalCount}>
        총 경험&nbsp;
        <span className={styles.blueCount}>{data.totalElements}</span>개
      </div>
      <section className={styles.box}>
        {/** 기업 카드  */}
        {data.content &&
          data?.content.map((experience) => (
            <div
              key={experience.id}
              className={styles.card({
                isSelect: isSelect ? isSelect.id === experience.id : false,
              })}
              onClick={() => handleSelectExperience(experience)}
            >
              <div className={styles.cardTitle}>{experience.title}</div>
              <div className={styles.cardDate}>
                {experience.updatedAt
                  ? formatDateWithDots(experience.updatedAt)
                  : "-"}
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
