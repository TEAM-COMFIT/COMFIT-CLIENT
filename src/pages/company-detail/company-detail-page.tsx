import { isAxiosError } from "axios";
import { Navigate, useParams } from "react-router-dom";

import {
  useGetCompanyDetail,
  useGetCompanySuggestionsQuery,
} from "@/features/company-detail";
import { CompanyDetailSection } from "@/pages/company-detail/ui/company-detail-section";
import { CompanyRecommendationSection } from "@/pages/company-detail/ui/company-recommendation-section";
import { useScrollToTop } from "@/shared/model";

import * as styles from "./company-detail-page.css";

import type { IndustryCode, ScaleCode } from "@/shared/config";

const CompanyDetailPage = () => {
  useScrollToTop();
  const { id } = useParams<{ id: string }>();
  const parsedId = Number(id);
  const isValidCompanyId = Number.isFinite(parsedId) && parsedId > 0;
  const companyId = isValidCompanyId ? parsedId : 0;

  const { data: companyDetail, error: companyDetailError } =
    useGetCompanyDetail(companyId);
  const companyData = companyDetail
    ? {
        companyId,
        name: companyDetail.name ?? "",
        isRecruiting: companyDetail.isRecruiting,
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
  } = useGetCompanySuggestionsQuery(companyId);

  const isNotFoundError =
    isAxiosError(companyDetailError) &&
    companyDetailError.response?.status === 404;

  if (!isValidCompanyId || isNotFoundError) {
    return <Navigate to="/not-found" replace />;
  }

  const handleRefresh = () => {
    refetchRecommendCompanies();
  };

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        {companyData ? (
          <CompanyDetailSection companyData={companyData} />
        ) : (
          <div className={styles.skeletonWrapper} />
        )}
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
