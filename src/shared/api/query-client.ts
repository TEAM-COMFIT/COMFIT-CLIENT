import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,

      staleTime: 30 * 1000,
      gcTime: 10 * 60 * 1000,

      throwOnError: false,
    },
    mutations: {
      retry: 0,
      throwOnError: false,
    },
  },

  queryCache: new QueryCache({
    onError: (error: unknown) => {
      // TODO: API 초기 세팅 PR merge 후 공통 에러 핸들러 연결
      // handleApiError(error);
      console.error(error);
    },
  }),

  mutationCache: new MutationCache({
    onError: (error: unknown) => {
      // TODO: API 초기 세팅 PR merge 후 공통 에러 핸들러 연결
      // handleApiError(error);
      console.error(error);
    },
  }),
});
