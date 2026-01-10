import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";

import { handleApiError } from "./error-handler";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,

      staleTime: 30 * 1000,
      gcTime: 10 * 60 * 1000,

      throwOnError: true,
    },
    mutations: {
      retry: 0,
      throwOnError: false,
    },
  },

  queryCache: new QueryCache({
    onError: (error: unknown) => {
      handleApiError(error, "query");
    },
  }),

  mutationCache: new MutationCache({
    onError: (error: unknown) => {
      handleApiError(error, "mutation");
    },
  }),
});
