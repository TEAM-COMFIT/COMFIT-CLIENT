import { useQuery } from "@tanstack/react-query";

import { api } from "@/shared/api/axios-instance";
import { aiReportsQueryKey } from "@/shared/api/config/query-key";

export const getCompanyDetail = async (companyId: number) => {
  const response = await api.aiReports.getReportCompany(companyId);
  return response.result;
};

export const useGetCompanyDetail = (companyId: number | undefined) => {
  return useQuery({
    queryKey: aiReportsQueryKey.company(companyId as number),
    queryFn: () => getCompanyDetail(companyId as number),
    enabled: !!companyId,
  });
};
