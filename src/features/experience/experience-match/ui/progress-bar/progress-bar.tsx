import { Step } from "../step/Step";

import * as styles from "./progress-bar.css";

export const ProgressBar = ({
  currentStep,
  stepList,
}: {
  currentStep: string;
  stepList: string[];
}) => {
  /** currentStep과 step과의 비교에 따라 status 처리
   * ('결과 확인'은 currentStep 제외하고 나머지 step은 done 처리)
   */
  const isStatus = (step: string) => {
    if (step === currentStep) return "current";
    else if (currentStep === "결과 확인") return "done";
    return "pending";
  };

  return (
    <div className={styles.layout}>
      {stepList.map((step, idx) => {
        if (step === stepList[0]) return;
        return <Step status={isStatus(step)} step={idx} label={step} />;
      })}
    </div>
  );
};
