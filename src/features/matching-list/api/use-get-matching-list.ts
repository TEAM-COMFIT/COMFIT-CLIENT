import { useQuery } from "@tanstack/react-query";

import { api } from "@/shared/api/axios-instance";
import { aiReportsQueryKey } from "@/shared/api/config/query-key";

import type { AiReportListResponse } from "@/features/matching-list";

interface GetAiReportListParams {
  page: number;
  keyword?: string;
}

const getAiReportList = async ({ page, keyword }: GetAiReportListParams) => {
  const response = await api.aiReports.getReportList({ page, keyword });
  return response.result as unknown as AiReportListResponse;
};

const useGetAiReportList = ({ page, keyword }: GetAiReportListParams) => {
  return useQuery({
    queryKey: aiReportsQueryKey.list(page, keyword),
    queryFn: () => getAiReportList({ page, keyword }),
  });
};

export { useGetAiReportList };
