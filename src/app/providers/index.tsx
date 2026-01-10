import { QueryProvider } from "./query-provider";
import ThemeProvider from "./theme-provider";

import type { ReactNode } from "react";

export const AppProviders = ({
  theme,
  className,
  children,
}: {
  children: ReactNode;
  theme?: string;
  className?: string;
}) => {
  return (
    <QueryProvider>
      <ThemeProvider theme={theme} className={className}>
        {children}
      </ThemeProvider>
    </QueryProvider>
  );
};
