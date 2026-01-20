import {
  CompanyCtaBanner,
  CompanyIssue,
  CompanyLinkButton,
} from "@/features/company-detail";
import {
  IconIdeal,
  IconIssue,
  IconSummary,
} from "@/shared/assets/icons/index.ts";
import { KERORO } from "@/shared/assets/images/index.ts";
import {
  getIndustryLabel,
  getScaleLabel,
  type IndustryCode,
  type ScaleCode,
} from "@/shared/config";
import { Tag, Textbox } from "@/shared/ui";

import * as styles from "./company-detail-section.css.ts";

type IssueItem = {
  href: string;
  date: string;
  title: string;
  description: string;
};

type CompanyDetailSummary = {
  companyId: number;
  name: string;
  status: string;
  logo: string;
  industry: IndustryCode;
  scale: ScaleCode;
  companyURL: string;
  summary: string;
  talentProfile: string;
  issueList: IssueItem[];
};

interface CompanyDetailSectionProps {
  companyData: CompanyDetailSummary;
}

const CompanyDetailSection = ({ companyData }: CompanyDetailSectionProps) => {
  return (
    <div className={styles.sectionWrap}>
      <section className={styles.header}>
        <div className={styles.headerLeft}>
          <img
            className={styles.logo}
            src={KERORO} // 임시 이미지
            alt={`${companyData.name} 로고`}
          />

          <div className={styles.headerMeta}>
            <div className={styles.nameRow}>
              <h1 className={styles.companyName}>{companyData.name}</h1>
              <span className={styles.dot} aria-hidden="true" />
              <span className={styles.hireStatus}>{companyData.status}</span>
            </div>

            <div className={styles.tagRow}>
              <Tag type="secondary">
                #{getIndustryLabel(companyData.industry)}
              </Tag>
              <Tag type="secondary">#{getScaleLabel(companyData.scale)}</Tag>
            </div>
          </div>
        </div>

        <div className={styles.headerRight}>
          <CompanyLinkButton
            href={companyData.companyURL}
            label="기업 홈페이지"
          />
        </div>
      </section>

      <section
        className={[styles.sectionBase, styles.summarySection].join(" ")}
      >
        <div className={styles.sectionTitleRow}>
          <img
            className={styles.sectionIcon}
            src={IconSummary}
            alt=""
            aria-hidden
          />
          <h2 className={styles.sectionTitle}>회사 한줄 요약</h2>
        </div>

        <Textbox
          type="large"
          className={[styles.textboxContent, styles.summaryBox].join(" ")}
        >
          {companyData.summary}
        </Textbox>
      </section>

      <section className={[styles.sectionBase, styles.talentSection].join(" ")}>
        <div className={styles.sectionTitleRow}>
          <img
            className={styles.sectionIcon}
            src={IconIdeal}
            alt=""
            aria-hidden
          />
          <h2 className={styles.sectionTitle}>인재상</h2>
        </div>

        <Textbox
          type="large"
          className={[styles.textboxContent, styles.talentBox].join(" ")}
        >
          {companyData.talentProfile}
        </Textbox>
      </section>

      <section className={[styles.sectionBase, styles.issueSection].join(" ")}>
        <div className={styles.sectionTitleRow}>
          <img
            className={styles.sectionIcon}
            src={IconIssue}
            alt=""
            aria-hidden
          />
          <h2 className={styles.sectionTitle}>
            최근 6개월 이슈 &amp; 마케팅 캠페인
          </h2>
        </div>

        <div className={styles.issueList}>
          {companyData.issueList.map((issue) => (
            <CompanyIssue
              key={`${issue.date}-${issue.title}`}
              issueURL={issue.href}
              date={issue.date}
              title={issue.title}
              description={issue.description}
            />
          ))}
        </div>
      </section>

      <CompanyCtaBanner
        className={styles.ctaBanner}
        companyId={companyData.companyId}
      />
    </div>
  );
};

export { CompanyDetailSection };
