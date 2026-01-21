import { useQuery } from "@tanstack/react-query";

import { api } from "@/shared/api/axios-instance";
import { aiReportsQueryKey } from "@/shared/api/config/query-key";

import type { matchingDetailType } from "../types/matching-detail.type";

export const getAiReport = async (reportId: number) => {
  const response = await api.aiReports.getReport(reportId);
  return response.result as unknown as matchingDetailType;
};

export const useGetAiReport = (reportId: number) => {
  return useQuery({
    queryKey: aiReportsQueryKey.detail(reportId),
    queryFn: () => getAiReport(reportId),
    enabled: !isNaN(reportId) && reportId > 0,
  });
};
