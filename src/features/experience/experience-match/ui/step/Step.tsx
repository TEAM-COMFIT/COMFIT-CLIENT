import * as styles from "./Step.css";

interface StepProps {
  status: "done" | "current" | "pending";
  step: number;
  label: string;
}

export const Step = ({ status, step, label }: StepProps) => {
  return (
    <div className={styles.stepVariants[status]}>
      <div className={styles.content}>
        <span className={styles.badge[status]}>{step}</span>
        <span>{label}</span>
      </div>
    </div>
  );
};
