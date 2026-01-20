import { CompanyDetailPage } from "@/pages/company-detail/company-detail-page";
import { HomePage } from "@/pages/home/home-page";
import { LandingPage } from "@/pages/landing/landing-page";
import { KakaoLoginPage } from "@/pages/login/kakao-login-page";
import { LoginPage } from "@/pages/login/login-page";

import { ROUTES } from "./paths";

export const guestRoutes = [
  { path: ROUTES.LOGIN, element: <LoginPage /> },
  { path: ROUTES.LOGIN_AUTH, element: <KakaoLoginPage /> },
];

export const publicRoutes = [
  { path: ROUTES.LANDING, element: <LandingPage /> },
  { path: ROUTES.HOME, element: <HomePage /> },
  { path: ROUTES.COMPANY(), element: <CompanyDetailPage /> },
];
