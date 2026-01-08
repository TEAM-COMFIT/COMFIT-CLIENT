import type { PropsWithChildren } from "react";

import QueryProvider from "./query-provider";

export default function AppProviders({ children }: PropsWithChildren) {
  return <QueryProvider>{children}</QueryProvider>;
}
