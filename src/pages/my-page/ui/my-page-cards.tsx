import { IconExpandMore } from "@/shared/assets/icons";
import { getEducationLabel } from "@features/onboarding/config/education";
import {
  getIndustryLabel,
  getJobLabel,
} from "@features/onboarding/config/interest-select.constants";

import * as styles from "./my-page-cards.css";

import type { HTMLAttributes } from "react";

type CardType = keyof typeof styles.boxType;

type CardProps = HTMLAttributes<HTMLElement> & {
  type: CardType;
  as?: "section" | "div";
};

const Card = ({
  type,
  as: Component = "div",
  className,
  children,
  ...rest
}: CardProps) => {
  const mergedClassName = [
    styles.boxBase,
    styles.boxType[type],
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component className={mergedClassName} {...rest}>
      {children}
    </Component>
  );
};

export interface MyPageCardsProps {
  name: string;
  email: string;
  educationLevel: string;
  firstIndustry: string;
  firstJob: string;
}

const MyPageCards = ({
  name,
  email,
  educationLevel,
  firstIndustry,
  firstJob,
}: MyPageCardsProps) => {
  return (
    <div className={styles.wrapper}>
      <Card type="large" as="section" aria-label="유저 기본 정보">
        <div className={styles.largeRow}>
          <span className={styles.largeText}>이름:</span>
          <span className={styles.largeText}>{name}</span>
        </div>

        <div className={styles.largeRow}>
          <span className={styles.largeText}>이메일:</span>
          <span className={styles.largeText}>{email}</span>
        </div>
      </Card>

      <section className={styles.grid} aria-label="사용자 설정 정보 요약">
        <Card type="medium">
          <h2 className={styles.mediumTitle}>최종학력</h2>
          <p className={styles.mediumBody}>
            {getEducationLabel(educationLevel)}
          </p>
        </Card>

        <Card type="medium">
          <h2 className={styles.mediumTitle}>관심산업</h2>
          <p className={styles.mediumBody}>{getIndustryLabel(firstIndustry)}</p>
        </Card>

        <Card type="medium">
          <h2 className={styles.mediumTitle}>관심직무</h2>
          <p className={styles.mediumBody}>{getJobLabel(firstJob)}</p>
        </Card>

        <Card
          type="medium"
          className={styles.mediumIconPadding}
          aria-label="기업 북마크"
        >
          <div className={styles.titleWithIcon}>
            <h2 className={styles.mediumTitle}>기업 북마크</h2>
            <span className={styles.iconWrap}>
              <IconExpandMore aria-hidden="true" />
            </span>
          </div>
        </Card>
      </section>
    </div>
  );
};

export { MyPageCards };
