import {
  Children,
  isValidElement,
  useState,
  type ReactElement,
  type ReactNode,
} from "react";

interface UseFunnelProps<T> {
  defaultStep: T;
  stepList: T[];
}

interface StepProps<T> {
  name: T;
  children: ReactNode;
}

interface FunnelProps<T> {
  children: Array<ReactElement<StepProps<T>>> | ReactElement<StepProps<T>>;
}

export const useFunnel = <T extends string>({
  defaultStep,
  stepList,
}: UseFunnelProps<T>) => {
  const [currentStep, setCurrentStep] = useState<T>(defaultStep);

  /** Funnel과 Step 컴포넌트 */
  const Step = ({ children }: StepProps<T>) => {
    return children as ReactNode;
  };
  const Funnel = ({ children }: FunnelProps<T>) => {
    const targetStep = Children.toArray(children).find((child) => {
      if (!isValidElement(child)) {
        return false;
      }
      const stepChild = child as ReactElement<StepProps<T>>;
      return stepChild.props.name === currentStep; // currentStep과 일치하는 name을 가지는 child 반환
    });
    return (targetStep as ReactElement) || null;
  };

  /**
   * 이전 단계로 이동하는 함수 (마지막 단계가 아닌 경우)
   */
  const prevStep = () => {
    const current = stepList.findIndex((step) => step === currentStep);
    if (current > 0) {
      setCurrentStep(stepList[current - 1]);
    }
  };

  /**
   * 다음 단계로 이동하는 함수 (처음 단계가 아닌 경우)
   */
  const nextStep = () => {
    const current = stepList.findIndex((step) => step === currentStep);
    if (current < stepList.length - 1) {
      setCurrentStep(stepList[current + 1]);
    }
  };

  return { currentStep, Step, Funnel, prevStep, nextStep };
};
