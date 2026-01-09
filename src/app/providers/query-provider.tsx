import { QueryClientProvider } from "@tanstack/react-query";
import { Suspense, lazy } from "react";

import { queryClient } from "@/shared/api";

import type { PropsWithChildren } from "react";

const ReactQueryDevtools = import.meta.env.DEV
  ? lazy(async () => {
      const mod = await import("@tanstack/react-query-devtools");
      return { default: mod.ReactQueryDevtools };
    })
  : null;

export default function QueryProvider({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}

      {import.meta.env.DEV && ReactQueryDevtools ? (
        <Suspense fallback={null}>
          <ReactQueryDevtools initialIsOpen={false} />
        </Suspense>
      ) : null}
    </QueryClientProvider>
  );
}
