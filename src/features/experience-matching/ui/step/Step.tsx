import * as styles from "./Step.css";

interface StepProps {
  status: "done" | "current" | "pending";
  step: number;
  label: string;
}

export const Step = ({ status, step, label }: StepProps) => {
  return (
    <li
      className={styles.stepVariants[status]}
      aria-current={status === "current" ? "step" : undefined}
    >
      <div className={styles.content}>
        <span className={styles.badge[status]}>{step}</span>
        <span>{label}</span>
      </div>
    </li>
  );
};
