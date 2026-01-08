import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "@app/App";
import AppProviders from "@app/providers";

import "@app/styles/global.css";

const rootEl = document.getElementById("root");
if (!rootEl) throw new Error('Root element "#root" not found');

createRoot(rootEl).render(
  <StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </StrictMode>
);
