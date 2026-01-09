import QueryProvider from "./query-provider";

import type { PropsWithChildren } from "react";

export default function AppProviders({ children }: PropsWithChildren) {
  return <QueryProvider>{children}</QueryProvider>;
}
