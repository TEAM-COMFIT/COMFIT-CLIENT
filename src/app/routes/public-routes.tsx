import { CompanyDetailPage } from "@/pages/company-detail/company-detail-page";
import { HomePage } from "@/pages/home/home-page";
import { LoginPage } from "@/pages/login/login-page";
import { OnboardingPage } from "@/pages/onboarding/onboarding-page";

import { ROUTES } from "./paths";

export const publicRoutes = [
  { path: ROUTES.LOGIN, element: <LoginPage /> },
  { path: ROUTES.ONBOARDING, element: <OnboardingPage /> },

  { path: ROUTES.HOME, element: <HomePage /> },
  { path: ROUTES.COMPANY(), element: <CompanyDetailPage /> },
];
