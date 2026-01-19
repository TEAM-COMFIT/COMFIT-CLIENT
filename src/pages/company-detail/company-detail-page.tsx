import { useMemo } from "react";
import { useParams } from "react-router-dom";

import {
  CompanyCtaBanner,
  CompanyIssue,
  CompanyLinkButton,
} from "@/features/company-detail";
import { IconSummary, IconIdeal, IconIssue } from "@/shared/assets/icons";
import { getIndustryLabel, getScaleLabel } from "@/shared/config";
import { Tag, Textbox } from "@/shared/ui";
import { CompanyCard } from "@/widgets";

import * as styles from "./company-detail-page.css";

import type { IndustryCode, ScaleCode } from "@/shared/config";

type IssueItem = {
  href: string; // 데이터는 href 유지
  date: string;
  title: string;
  description: string;
};

type CompanyDetail = {
  companyId: number;
  name: string;
  status: string;
  logoUrl: string;
  industry: IndustryCode;
  scale: ScaleCode;
  companyURL: string;
  summary: string;
  talentProfile: string;
  issues: IssueItem[];
};

type RecommendCompanyItem = {
  id: number;
  companyName: string;
  logoUrl: string;
  industry: IndustryCode;
  scale: ScaleCode;
};

const CompanyDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const companyId = Number(id ?? 1);

  const company = useMemo<CompanyDetail>(() => {
    const issues: IssueItem[] = [
      {
        href: "https://example.com/1",
        date: "2024.12",
        title: "콘텐츠 포맷 다각화",
        description:
          "OTT 시장 변화에 맞춰 기존 포맷을 확장하고 신규 포맷을 실험하는 흐름이 이어지고 있어요.",
      },
      {
        href: "https://example.com/2",
        date: "2024.12",
        title: "글로벌 콘텐츠 IP 확장 전략",
        description:
          "글로벌 파트너십을 기반으로 IP 확장과 현지화 전략을 강화하는 방향이에요.",
      },
      {
        href: "https://example.com/3",
        date: "2024.12",
        title: "공동 제작 프로젝트 확대",
        description:
          "공동 제작을 통해 리스크를 분산하고 타깃 시장 확장을 노리는 시도가 늘고 있어요.",
      },
    ];

    return {
      companyId,
      name: "CJ ENM",
      status: "채용중",
      logoUrl: "https://via.placeholder.com/64",
      industry: "MEDIA_CONTENTS",
      scale: "LARGE",
      companyURL: "https://www.cjenm.com",
      summary:
        "콘텐츠 IP를 기반으로 방송·디지털 콘텐츠를 제작하고 확장하며, IP 자산을 바탕으로 글로벌 성장을 추구하는 엔터테인먼트 기업",
      talentProfile:
        "자율적으로 문제를 정의하고, 다양한 이해관계자와 협업하며, 결과에 대한 책임을 지는 사람",
      issues,
    };
  }, [companyId]);

  const visibleIssues = company.issues.slice(0, 3);
  const industryLabel = getIndustryLabel(company.industry);
  const scaleLabel = getScaleLabel(company.scale);

  const recommendCompanies = useMemo(() => {
    const list: RecommendCompanyItem[] = [
      {
        id: 1,
        companyName: "쿠팡",
        logoUrl: "https://via.placeholder.com/48",
        industry: "IT",
        scale: "LARGE",
      },
      {
        id: 2,
        companyName: "에이프리카",
        logoUrl: "https://via.placeholder.com/48",
        industry: "IT",
        scale: "LARGE",
      },
      {
        id: 3,
        companyName: "SK네트웍스",
        logoUrl: "https://via.placeholder.com/48",
        industry: "IT",
        scale: "LARGE",
      },
      {
        id: 4,
        companyName: "버거킹즈",
        logoUrl: "https://via.placeholder.com/48",
        industry: "IT",
        scale: "LARGE",
      },
    ];

    return list;
  }, []);

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        {/* 상단: 로고/기업명/태그/홈페이지 */}
        <section className={styles.header}>
          <div className={styles.headerLeft}>
            <img
              className={styles.logo}
              src={company.logoUrl}
              alt={`${company.name} 로고`}
            />

            <div className={styles.headerMeta}>
              <div className={styles.nameRow}>
                <h1 className={styles.companyName}>{company.name}</h1>
                <span className={styles.dot} aria-hidden />
                <span className={styles.hireStatus}>{company.status}</span>
              </div>

              <div className={styles.tagRow}>
                <Tag type="secondary">#{industryLabel}</Tag>
                <Tag type="secondary">#{scaleLabel}</Tag>
              </div>
            </div>
          </div>

          <div className={styles.headerRight}>
            <CompanyLinkButton href={company.companyURL} />
          </div>
        </section>

        {/* 회사 한줄 요약 */}
        <section className={styles.section}>
          <div className={styles.sectionTitleRow}>
            <div className={styles.sectionIcon}>
              <IconSummary aria-hidden />
            </div>
            <h2 className={styles.sectionTitle}>회사 한줄 요약</h2>
          </div>

          <Textbox type="large">{company.summary}</Textbox>
        </section>

        {/* 인재상 */}
        <section className={styles.section}>
          <div className={styles.sectionTitleRow}>
            <IconIdeal aria-hidden className={styles.icon} />
            <h2 className={styles.sectionTitle}>인재상</h2>
          </div>

          <Textbox type="large">{company.talentProfile}</Textbox>
        </section>

        {/* 최근 6개월 이슈 & 마케팅 캠페인 */}
        <section className={styles.section}>
          <div className={styles.sectionTitleRow}>
            <IconIssue className={styles.sectionIcon} aria-hidden />
            <h2 className={styles.sectionTitle}>
              최근 6개월 주요 이슈 & 마케팅 캠페인
            </h2>
          </div>

          <div className={styles.issueList}>
            {visibleIssues.map((issue) => (
              <CompanyIssue
                key={`${issue.date}-${issue.title}`}
                issueURL={issue.href} // ✅ prop은 issueURL
                date={issue.date}
                title={issue.title}
                description={issue.description}
              />
            ))}
          </div>
        </section>

        {/* CTA 배너 */}
        <CompanyCtaBanner onClick={() => {}} />
      </div>

      {/* 추천 기업 영역 */}
      <section className={styles.recommendSection}>
        <div className={styles.recommendInner}>
          <div className={styles.recommendHeader}>
            <div>
              <h2 className={styles.recommendTitle}>
                이 기업도 함께 준비해 보세요!
              </h2>
              <p className={styles.recommendDesc}>
                CJ ENM과 유사한 업종의 기업 리스트
              </p>
            </div>

            <div className={styles.recommendRight}>
              <img
                className={styles.recommendImage}
                src="https://via.placeholder.com/180x120"
                alt=""
                loading="lazy"
              />
              <span className={styles.recommendHint}>ⓒ 새</span>
            </div>
          </div>

          <div className={styles.companyCardGrid}>
            {recommendCompanies.map((c) => (
              <CompanyCard key={c.id} {...c} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export { CompanyDetailPage };
