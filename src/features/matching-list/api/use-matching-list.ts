import { useQuery } from "@tanstack/react-query";

import { api } from "@/shared/api/axios-instance";
import { aiReportsQueryKey } from "@/shared/api/config/query-key";

import type { AiReportListResponse } from "@/features/matching-list/types/matching.type";
export const getAiReportList = async ({
  page,
  keyword,
}: {
  page: number;
  keyword?: string;
}) => {
  const response = await api.aiReports.getReportList({ page, keyword });
  return response.result as unknown as AiReportListResponse;
};

export const useGetAiReportList = ({
  page,
  keyword,
}: {
  page: number;
  keyword?: string;
}) => {
  return useQuery({
    queryKey: aiReportsQueryKey.list(page, keyword),
    queryFn: () => getAiReportList({ page, keyword }),
  });
};
