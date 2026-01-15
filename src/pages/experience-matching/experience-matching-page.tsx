import { useFunnel } from "@/features/experience/experience-match/model/useFunnel";
import { ProgressBar } from "@/features/experience/experience-match/ui/progress-bar/progress-bar";
import { IconAI } from "@/shared/assets/icons";

import * as styles from "./experience-matching-page.css";
const STEP = [
  "기업 선택",
  "기업 정보 확인",
  "나의 경험 확인",
  "AI 분석 진행",
  "결과 확인",
];

const ExperienceMatchingPage = () => {
  const { currentStep, Step, Funnel, prevStep, nextStep } = useFunnel({
    defaultStep: STEP[0],
    stepList: STEP,
  });

  return (
    <div className={styles.container}>
      {/** 타이틀 */}
      {currentStep !== "기업 선택" && (
        <>
          <div className={styles.titleContainer}>
            <IconAI />
            <div className={styles.wrapper}>
              <h1 className={styles.title}>경험 매칭 AI</h1>
              <h3 className={styles.subTitle}>
                나의 경험과 기업을 완벽하게 매칭해보세요
              </h3>
            </div>
          </div>
          <ProgressBar currentStep={currentStep} stepList={STEP} />
        </>
      )}
      {/** useFunnel을 통한 각 단계 컴포넌트 렌더링
       * - 각 단계 세부 컴포넌트는 구현예정입니다. (TODO)
       */}
      {/**
       * 0. 기업 선택
       * 1. 기업 정보 확인
       * 2. 나의 경험 확인 => post, (isLoading)
       * 3. [3단계 AI 분석 진행]
       * 4. [4단계 (데이터가 불러와지면) 결과 확인]  */}
      <Funnel>
        <Step name="기업 선택">
          <div>기업 선택 창입니다</div>
          <button onClick={() => nextStep()}>선택하기</button>
        </Step>
        <Step name="기업 정보 확인">
          <div>기업 정보 확인 란입니다</div>
          <button onClick={() => prevStep()}>이전단계</button>
          <button onClick={() => nextStep()}>다음단계</button>
        </Step>
        <Step name="나의 경험 확인">
          <div>나의 경험 확인 란입니다</div>
          <button onClick={() => prevStep()}>이전단계</button>
          <button onClick={() => nextStep()}>다음단계</button>
        </Step>
        {/** TODO: AI 분석 진행 STEP은 '나의 경험 확인' 내부에서 처리(현재는 funnel 동작 확인을 위한 임시 로직) */}
        <Step name="AI 분석 진행">
          <div>분석 진행 란입니다</div>
          <button onClick={() => nextStep()}>다음단계</button>
        </Step>
        <Step name="결과 확인">
          <div>결과 확인란 입니다</div>
        </Step>
      </Funnel>
    </div>
  );
};

export { ExperienceMatchingPage };
