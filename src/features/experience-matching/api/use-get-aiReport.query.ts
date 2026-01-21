import { useQuery } from "@tanstack/react-query";

import { api } from "@/shared/api/axios-instance";
import { aiReportsQueryKey } from "@/shared/api/config/query-key";

//import type { matchingDetailType } from "../types/matching-detail.type";

export interface matchingDetailType {
  companyName: string;
  experienceTitle: string;
  jobDescription: string;
  perspectives: {
    perspective: string;
    source: string;
    reason: string;
  }[];
  density: {
    perspective: string;
    connection: string;
    reason: string;
  }[];
  appealPoint: {
    element: string;
    importance: string;
    starPhase: string;
    placement: string;
    direction: string;
  }[];
  suggestion: string;
  guidance: string;
}

// 채영이가 함
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
