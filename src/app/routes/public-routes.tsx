import { CompanyDetailPage } from "@/pages/company-detail/company-detail-page";
import { HomePage } from "@/pages/home/home-page";
import { LandingPage } from "@/pages/landing/landing-page";
import { LoginPage } from "@/pages/login/login-page";

import { ROUTES } from "./paths";

export const publicRoutes = [
  { path: ROUTES.LOGIN, element: <LoginPage /> },
  { path: ROUTES.LANDING, element: <LandingPage /> },

  { path: ROUTES.HOME, element: <HomePage /> },
  { path: ROUTES.COMPANY(), element: <CompanyDetailPage /> },
];
