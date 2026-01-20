import { useReportStore } from "@/app/store";
import {
  useFunnel,
  ProgressBar,
  CompanyDetail,
  SelectExperience,
  SelectCompany,
  Analyzing,
} from "@/features/experience-matching";
import { IconAI } from "@/shared/assets/icons";

import * as styles from "./experience-matching-page.css";

import type { Step } from "@/shared/model/auth/report.store";

const STEP: Step[] = [
  "기업 선택",
  "기업 정보 확인",
  "나의 경험 확인",
  "AI 분석 진행",
  "결과 확인",
];

const ExperienceMatchingPage = () => {
  const setCurrentStep = useReportStore((state) => state.setCurrentStep);
  const { currentStep, Step, Funnel, prevStep, nextStep } = useFunnel({
    defaultStep: STEP[0],
    stepList: STEP,
    onStepChange: (step) => setCurrentStep(step), // useFunnel step의 변경에 따른 zustand 동기화
  });

  return (
    <main className={styles.container({ isFirst: currentStep == STEP[0] })}>
      {/** 타이틀 */}
      {currentStep !== STEP[0] && (
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
      {/** useFunnel을 통한 각 단계 컴포넌트 렌더링 */}
      {/**
       * 0. 기업 선택
       * 1. 기업 정보 확인
       * 2. 나의 경험 확인
       * 3. AI 분석 진행
       * 4. [4단계 (데이터가 불러와지면) 결과 확인 이동]  */}
      <Funnel>
        <Step name="기업 선택">
          <SelectCompany onClick={() => nextStep()} />
        </Step>
        <Step name="기업 정보 확인">
          <CompanyDetail nextStep={() => nextStep()} />
        </Step>
        <Step name="나의 경험 확인">
          <SelectExperience
            prevStep={() => prevStep()}
            nextStep={() => nextStep()}
          />
        </Step>
        <Step name="AI 분석 진행">
          <Analyzing nextStep={() => nextStep()} />
        </Step>
        <Step name="결과 확인">
          <div>결과 확인란 입니다</div>
        </Step>
      </Funnel>
    </main>
  );
};

export { ExperienceMatchingPage };
