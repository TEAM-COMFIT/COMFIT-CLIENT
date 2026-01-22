import { useQuery } from "@tanstack/react-query";

import { api } from "@/shared/api/axios-instance";
import { companyQueryKey } from "@/shared/api/config/query-key";

import type { IndustryCode, ScaleCode } from "@/shared/config";

export interface RecommendCompanyItem {
  id: number;
  name: string;
  logo: string;
  industry: IndustryCode;
  scale: ScaleCode;
}

const isRecommendCompanyItem = (
  value: unknown
): value is RecommendCompanyItem => {
  if (!value || typeof value !== "object") {
    return false;
  }

  const record = value as Record<string, unknown>;

  return (
    typeof record.id === "number" &&
    typeof record.name === "string" &&
    typeof record.logo === "string" &&
    typeof record.industry === "string" &&
    typeof record.scale === "string"
  );
};

const isRecommendCompanyItemArray = (
  value: unknown
): value is RecommendCompanyItem[] => {
  return Array.isArray(value) && value.every(isRecommendCompanyItem);
};

export const getCompanySuggestions = async (companyId: number) => {
  const response = await api.companies.getSuggestionCompany(companyId, {
    secure: false,
  });
  const result = response.result;

  if (!isRecommendCompanyItemArray(result)) {
    return [];
  }

  return result;
};

export const useGetCompanySuggestionsQuery = (companyId: number) => {
  return useQuery({
    queryKey: companyQueryKey.suggestion(companyId),
    queryFn: () => getCompanySuggestions(companyId),
    enabled:
      typeof companyId === "number" && !isNaN(companyId) && companyId > 0,
    staleTime: 0,
  });
};
