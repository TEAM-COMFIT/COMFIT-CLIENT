import { Textbox } from "@/widgets";

import * as styles from "./detail-section.css";

interface Perspective {
  perspective: string;
  source: string;
  reason: string;
}

interface Density {
  perspective: string;
  connection: string;
  reason: string;
}

interface AppealPoint {
  element: string;
  importance: string;
  starPhase: string;
  direction: string;
  placement: string;
}

export interface CompanyDetail {
  companyName: string;
  experienceTitle: string;
  jobDescription: string;
  perspectives: Perspective[];
  density: Density[];
  appealPoint: AppealPoint[];
  suggestion: string;
  guidance: string;
}

interface DetailSectionProps {
  data: CompanyDetail;
}

const DetailSection = ({ data }: DetailSectionProps) => {
  return (
    <section className={styles.sectionContainer}>
      {/* 지원 기업 */}
      <div className={styles.itemWrapper}>
        <h2 className={styles.itemTitle}>지원 기업</h2>
        <Textbox type="medium">{data.companyName}</Textbox>
      </div>

      {/* 선택된 경험 */}
      <div className={styles.itemWrapper}>
        <h2 className={styles.itemTitle}>선택된 경험</h2>
        <Textbox type="medium">{data.experienceTitle}</Textbox>
      </div>

      {/* 직무 설명 (JD) */}
      <div className={styles.itemWrapper}>
        <h2 className={styles.itemTitle}>직무 설명 (Job Description)</h2>
        <Textbox type="medium">
          <div className={styles.whiteSpacePre}>{data.jobDescription}</div>
        </Textbox>
      </div>

      {/* [1] 이 기업이 직무에서 중요하게 보는 관점 */}
      <div className={styles.itemWrapper}>
        <h2 className={styles.itemTitle}>
          [1] 이 기업이 직무에서 중요하게 보는 관점
        </h2>
        <Textbox type="medium">
          {data.perspectives.map((p, i) => (
            <div key={i} className={styles.listContent}>
              <strong>• {p.perspective}</strong>
              <p>{p.reason}</p>
            </div>
          ))}
        </Textbox>
      </div>

      {/* [2] 선택한 경험과의 연결 강도 */}
      <div className={styles.itemWrapper}>
        <h2 className={styles.itemTitle}>[2] 선택한 경험과의 연결 강도</h2>
        <Textbox type="medium">
          {data.density.map((d, i) => (
            <div key={i} className={styles.listContent}>
              <strong>
                • {d.perspective} ({d.connection})
              </strong>
              <p>{d.reason}</p>
            </div>
          ))}
        </Textbox>
      </div>

      {/* [3] 반드시 드러내야 할 요소 */}
      <div className={styles.itemWrapper}>
        <h2 className={styles.itemTitle}>[3] 반드시 드러내야 할 요소</h2>
        <Textbox type="medium">
          {data.appealPoint.map((a, i) => (
            <div key={i} className={styles.listContent}>
              <strong>
                • {a.element} (STAR 단계: {a.starPhase})
              </strong>
              <p>{a.direction}</p>
            </div>
          ))}
        </Textbox>
      </div>

      {/* [4] 표현 조정 또는 주의 포인트 */}
      <div className={styles.itemWrapper}>
        <h2 className={styles.itemTitle}>[4] 표현 조정 또는 주의 포인트</h2>
        <Textbox type="medium">
          <div className={styles.whiteSpacePre}>{data.suggestion}</div>
        </Textbox>
      </div>

      {/* [5] 자소서 활용 구조 가이드 */}
      <div className={styles.itemWrapper}>
        <h2 className={styles.itemTitle}>[5] 자소서 활용 구조 가이드</h2>
        <Textbox type="medium">
          <div className={styles.whiteSpacePre}>{data.guidance}</div>
        </Textbox>
      </div>
    </section>
  );
};

export { DetailSection };
