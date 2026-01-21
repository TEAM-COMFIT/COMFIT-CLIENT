import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { api } from "@/shared/api/axios-instance";
import { companyQueryKey } from "@/shared/api/config/query-key";

import type { ScaleCode, IndustryCode } from "@/shared/config";
export interface GetMajorCompaniesData {
  id: number;
  name: string;
  industry: IndustryCode;
  scale: ScaleCode;
  logo: string;
  photoUrl: string;
}

// export const getMajorCompanies = async ({ rank }: { rank: number }) => {
//   const response = await api.companies.getFeaturedCompanies({ rank });
//   console.log("getMajorCompanies response:", response);
//   return response.result as unknown as GetMajorCompaniesData[];
// };

export const getMajorCompanies = async ({ rank }: { rank: number }) => {
  // 1. 직접 axios 요청 (instance를 사용하거나 baseURL을 직접 입력)
  // config.params를 통해 쿼리 스트링(?rank=1)으로 전달됩니다.
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/api/v1/companies/major`,
    {
      params: { rank },
    }
  );

  // 2. Axios의 기본 응답 구조는 response.data 안에 서버 데이터가 들어있습니다.
  console.log("Axios Direct Response:", response.data);

  // 3. 서버 응답 스펙이 { result: [...] } 라면 아래와 같이 접근합니다.
  const data = response.data?.result;

  if (!data) {
    console.warn(
      "서버에서 result 데이터를 받지 못했습니다. 응답 구조를 확인하세요."
    );
    return [];
  }

  return data as GetMajorCompaniesData[];
};
export const useGetMajorCompanies = ({ rank }: { rank: number }) => {
  return useQuery({
    queryKey: companyQueryKey.major(rank),
    queryFn: () => getMajorCompanies({ rank }),
  });
};
