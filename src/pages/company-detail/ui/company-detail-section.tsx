import { useCompanyBookmark } from "@/features/bookmark";
import {
  CompanyCtaBanner,
  CompanyIssue,
  CompanyLinkButton,
} from "@/features/company-detail";
import {
  IconBookmark,
  IconIdeal,
  IconIssue,
  IconSummary,
} from "@/shared/assets/icons";
import {
  getIndustryLabel,
  getScaleLabel,
  type IndustryCode,
  type ScaleCode,
} from "@/shared/config";
import { Alert, Tag, Textbox } from "@/shared/ui";

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
  isBookmarked: boolean;
  isRecruiting?: boolean;
  logo: string;
  industry?: IndustryCode;
  scale?: ScaleCode;
  companyURL: string;
  summary: string;
  talentProfile: string;
  issueList: IssueItem[];
};

interface CompanyDetailSectionProps {
  companyData: CompanyDetailSummary;
}

const getSectionClassName = (sectionStyle: string) =>
  [styles.sectionBase, sectionStyle].join(" ");

const CompanyDetailSection = ({ companyData }: CompanyDetailSectionProps) => {
  const {
    isBookmarked,
    isAddingBookmark,
    isBookmarkErrorOpen,
    handleBookmarkClick,
    closeBookmarkError,
  } = useCompanyBookmark({
    companyId: companyData.companyId,
    initialIsBookmarked: companyData.isBookmarked,
  });

  const keywordTags = [
    companyData.industry ? `#${getIndustryLabel(companyData.industry)}` : null,
    companyData.scale ? `#${getScaleLabel(companyData.scale)}` : null,
  ].filter((keyword): keyword is string => keyword !== null);

  const bookmarkAriaLabel = isBookmarked
    ? "기업 북마크 완료"
    : "기업 북마크 추가";

  return (
    <div className={styles.sectionWrap}>
      <section className={styles.header}>
        <div className={styles.headerLeft}>
          <img
            className={styles.logo}
            src={companyData.logo}
            alt={`${companyData.name} 로고`}
          />

          <div className={styles.headerMeta}>
            <div className={styles.titleRow}>
              <h1 className={styles.companyName}>{companyData.name}</h1>
              <button
                type="button"
                aria-label={bookmarkAriaLabel}
                aria-pressed={isBookmarked}
                className={styles.bookmarkButton}
                onClick={handleBookmarkClick}
                disabled={isAddingBookmark}
              >
                <IconBookmark
                  className={styles.bookmarkIcon({ active: isBookmarked })}
                />
              </button>
            </div>

            {companyData.isRecruiting ? (
              <div className={styles.statusRow}>
                <span className={styles.dot} aria-hidden="true" />
                <span className={styles.hireStatus}>채용중</span>
              </div>
            ) : null}
          </div>
        </div>

        <div className={styles.headerRight}>
          <CompanyLinkButton href={companyData.companyURL} />
        </div>
      </section>

      <section className={getSectionClassName(styles.keywordSection)}>
        <h2 className={styles.keywordTitle}>기업 관련 키워드</h2>

        <div className={styles.tagRow}>
          {keywordTags.map((keywordTag) => (
            <Tag key={keywordTag} type="secondary">
              {keywordTag}
            </Tag>
          ))}
        </div>
      </section>

      <section className={getSectionClassName(styles.summarySection)}>
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

      <section className={getSectionClassName(styles.talentSection)}>
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

      <section className={getSectionClassName(styles.issueSection)}>
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
        companyName={companyData.name}
        companyId={companyData.companyId}
      />

      {isBookmarkErrorOpen ? (
        <Alert
          variant="error"
          title="오류"
          description="북마크 저장에 실패했습니다"
          onClose={closeBookmarkError}
        />
      ) : null}
    </div>
  );
};

export { CompanyDetailSection };
