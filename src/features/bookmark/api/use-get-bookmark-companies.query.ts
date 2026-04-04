import { useQuery } from "@tanstack/react-query";

import { api } from "@/shared/api/axios-instance";
import { meQueryKey } from "@/shared/api/config/query-key";

import type { BookmarkRow } from "../types/bookmark.type";

export type BookmarkCompanySort = "NAME" | "LIKE" | "LATEST" | "OLDEST";

export interface BookmarkCompaniesResponse {
  content: BookmarkRow[];
  currentPage: number;
  totalPage: number;
  totalElements: number;
}

interface BookmarkCompanyItemApiResponse {
  id?: number;
  companyId?: number;
  name?: string;
  createdAt?: string;
  isConnected?: boolean;
}

interface BookmarkCompaniesApiResponse {
  content?: BookmarkCompanyItemApiResponse[];
  currentPage?: number;
  totalPage?: number;
  totalElements?: number;
}

export const getBookmarkCompanies = async (
  page: number,
  sort: BookmarkCompanySort = "LATEST"
): Promise<BookmarkCompaniesResponse> => {
  const response = await api.me.getBookmarkCompany({ page, sort });
  const result = response.result as unknown as BookmarkCompaniesApiResponse;

  return {
    content: (result.content ?? []).map((bookmarkCompany) => ({
      id: bookmarkCompany.id ?? 0,
      companyId: bookmarkCompany.companyId ?? 0,
      companyName: bookmarkCompany.name ?? "",
      scrapedAt: bookmarkCompany.createdAt ?? "",
      isConnected: bookmarkCompany.isConnected ?? false,
    })),
    currentPage: result.currentPage ?? page,
    totalPage: result.totalPage ?? 0,
    totalElements: result.totalElements ?? 0,
  };
};

export const useGetBookmarkCompaniesQuery = (
  page: number,
  sort: BookmarkCompanySort = "LATEST"
) => {
  return useQuery({
    queryKey: meQueryKey.bookmarkCompanyList(page, sort),
    queryFn: () => getBookmarkCompanies(page, sort),
    enabled: Number.isFinite(page) && page > 0,
  });
};
