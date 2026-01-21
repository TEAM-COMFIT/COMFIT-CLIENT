import { useParams } from "react-router-dom";

import {
  useGetCompanyDetail,
  useGetCompanySuggestions,
} from "@/features/company-detail";
import { CompanyDetailSection } from "@/pages/company-detail/ui/company-detail-section";
import { CompanyRecommendationSection } from "@/pages/company-detail/ui/company-recommendation-section";
import { useScrollToTop } from "@/shared/model";

import * as styles from "./company-detail-page.css";

import type { IndustryCode, ScaleCode } from "@/shared/config";

const CompanyDetailPage = () => {
  useScrollToTop();
  const { id } = useParams<{ id: string }>();
  const companyId = Number.isFinite(Number(id)) ? Number(id) : 1;

  const { data: companyDetail } = useGetCompanyDetail(companyId);
  const companyData = companyDetail
    ? {
        companyId,
        name: companyDetail.name ?? "",
        isRecruiting: (companyDetail as { isRecruiting?: boolean })
          .isRecruiting,
        logo: companyDetail.logo ?? "",
        industry: companyDetail.industry as IndustryCode | undefined,
        scale: companyDetail.scale as ScaleCode | undefined,
        companyURL: companyDetail.companyURL ?? "",
        summary: companyDetail.summary ?? "",
        talentProfile: companyDetail.talentProfile ?? "",
        issueList: (companyDetail.issueList ?? []).map((issue) => ({
          href: issue.issueURL ?? "",
          date: issue.issueDate ?? "",
          title: issue.title ?? "",
          description: issue.content ?? "",
        })),
      }
    : null;

  const {
    data: recommendCompanies = [],
    refetch: refetchRecommendCompanies,
    isFetching: isRefreshing,
  } = useGetCompanySuggestions(companyId);

  const handleRefresh = () => {
    refetchRecommendCompanies();
  };

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        {companyData ? (
          <CompanyDetailSection companyData={companyData} />
        ) : null}
      </div>

      <CompanyRecommendationSection
        companyName={companyDetail?.name ?? ""}
        recommendCompanies={recommendCompanies}
        onRefresh={handleRefresh}
        isRefreshing={isRefreshing}
      />
    </main>
  );
};

export { CompanyDetailPage };
