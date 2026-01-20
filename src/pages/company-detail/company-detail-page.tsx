import { useMemo } from "react";

import { CompanyDetailSection } from "@/pages/company-detail/ui/company-detail-section";
import { CompanyRecommendationSection } from "@/pages/company-detail/ui/company-recommendation-section";

import * as styles from "./company-detail-page.css";

import type { IndustryCode, ScaleCode } from "@/shared/config";

interface IssueItem {
  href: string;
  date: string;
  title: string;
  description: string;
}

interface CompanyDetail {
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
}

export interface RecommendCompanyItem {
  id: number;
  name: string;
  logo: string;
  industry: IndustryCode;
  scale: ScaleCode;
}

const CompanyDetailPage = () => {
  // const { id } = useParams<{ id: string }>();

  const companyData: CompanyDetail = {
    companyId: 1,
    name: "CJ ENM",
    status: "채용중",
    logo: "https://bucket-com-fit-server.s3.ap-northeast-2.amazonaws.com/company/coupang.gif",
    industry: "MEDIA_CONTENTS",
    scale: "LARGE",
    companyURL: "https://www.cjenm.com",
    summary:
      "콘텐츠 IP를 기반으로 방송·디지털·글로벌 플랫폼까지 확장하며,\n 장기적인 IP 가치와 브랜드 일관성을 중시하는 엔터테인먼트 기업",
    talentProfile:
      "자율적으로 문제를 정의하고, 다양한 이해관계자와 협업하며, 결과에 대한 책임을 지는 사람",
    issueList: [
      {
        href: "https://example.com/1",
        date: "2024.12",
        title: "콘텐츠 포맷 다각화",
        description:
          "CJ ENM은 OTT 시청 환경 변화에 대응해 기존 방송 편성 중심 콘텐츠 외에도 숏폼·디지털 전용 콘텐츠 포맷을 확대하고 있다. 특히 일부 콘텐츠는 방송 편성과 분리된 디지털 플랫폼 우선 배포를 전제로 기획되며, 플랫폼별 소비 특성에 맞춘 포맷 실험이 진행되고 있다.",
      },
      {
        href: "https://example.com/2",
        date: "2024.11",
        title: "글로벌 콘텐츠 IP 확장 전략",
        description:
          "CJ ENM은 자체 제작 콘텐츠의 해외 유통을 확대하며, 글로벌 플랫폼과의 협업을 통해 콘텐츠 IP의 포맷 수출 및 글로벌 동시 공개 사례를 늘리고 있다. 이를 통해 국내 시장 중심의 콘텐츠 유통 구조를 넘어, 글로벌 시장을 고려한 제작·유통 전략을 지속적으로 강화하고 있다.",
      },
      {
        href: "https://example.com/3",
        date: "2024.10",
        title: "글로벌 공동 제작 프로젝트 확대",
        description:
          "글로벌 제작사 및 플랫폼과의 공동 제작 프로젝트를 통해 제작 초기 단계부터 해외 시장을 고려한 협업 모델을 확대하고 있다. 일부 프로젝트는 국내 방영 이후 해외 유통이 아닌, 글로벌 공개를 전제로 제작 구조를 설계하는 방식으로 진행되고 있다.",
      },
    ],
  };

  const recommendCompanies = useMemo(() => {
    // TODO: 서버에서 넘겨주는 데이터 형식 그대로
    const list: RecommendCompanyItem[] = [
      {
        id: 1,
        name: "쿠팡",
        logo: "https://via.placeholder.com/48",
        industry: "IT",
        scale: "LARGE",
      },
      {
        id: 2,
        name: "네이버",
        logo: "https://via.placeholder.com/48",
        industry: "IT",
        scale: "LARGE",
      },
      {
        id: 3,
        name: "카카오",
        logo: "https://via.placeholder.com/48",
        industry: "IT",
        scale: "LARGE",
      },
      {
        id: 4,
        name: "SK플래닛",
        logo: "https://via.placeholder.com/48",
        industry: "IT",
        scale: "LARGE",
      },
    ];

    return list;
  }, []);
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <CompanyDetailSection companyData={companyData} />
      </div>

      <CompanyRecommendationSection
        companyName={companyData.name}
        recommendCompanies={recommendCompanies}
      />
    </main>
  );
};

export { CompanyDetailPage };
