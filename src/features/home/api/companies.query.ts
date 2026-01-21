import { useQuery } from "@tanstack/react-query";

import { api } from "@/shared/api/axios-instance";
import { companyQueryKey } from "@/shared/api/config/query-key";

// interface GetCompaniesParams {
//   keyword: string;
//   industry: string;
//   scale: string;
//   sort: string;
//   page: number;
//   inRequired: boolean;
// }

// export const getCompanies = async ({
//   keyword,
//   industry,
//   scale,
//   sort,
//   page,
//   inRequired,
// }: GetCompaniesParams) => {
//   const response = await api.companies.getCompanyList({
//     keyword,
//     industry,
//     scale,
//     sort,
//     page,
//     inRequired,
//   });
//   return response.result;
// };

// export const useGetCompanies = ({
//   keyword,
//   industry,
//   scale,
//   sort,
//   page,
//   inRequired,
// }: GetCompaniesParams) => {
//   return useQuery({
//     queryKey: companyQueryKey.search(
//       keyword,
//       industry,
//       scale,
//       sort,
//       page,
//       inRequired
//     ),

//     // 2. API 호출 함수에도 동일한 파라미터를 전달합니다.
//     queryFn: () => getCompanies(),

//     // 3. 필터링 데이터의 성격에 따라 캐싱 전략 설정
//     staleTime: Infinity,
//   });
// };
