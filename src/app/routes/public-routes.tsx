import { lazy } from "react";

import { ROUTES } from "./paths";

const LoginPage = lazy(() =>
  import("@/pages/login/login-page").then((module) => ({
    default: module.LoginPage,
  }))
);

const KakaoLoginPage = lazy(() =>
  import("@/pages/login/kakao-login-page").then((module) => ({
    default: module.KakaoLoginPage,
  }))
);

const LandingPage = lazy(() =>
  import("@/pages/landing/landing-page").then((module) => ({
    default: module.LandingPage,
  }))
);

const HomePage = lazy(() =>
  import("@/pages/home/home-page").then((module) => ({
    default: module.HomePage,
  }))
);

const CompanyDetailPage = lazy(() =>
  import("@/pages/company-detail/company-detail-page").then((module) => ({
    default: module.CompanyDetailPage,
  }))
);

export const guestRoutes = [{ path: ROUTES.LOGIN, element: <LoginPage /> }];

export const publicRoutes = [
  { path: ROUTES.LOGIN_AUTH, element: <KakaoLoginPage /> },
  { path: ROUTES.LANDING, element: <LandingPage /> },
  { path: ROUTES.HOME, element: <HomePage /> },
  { path: ROUTES.COMPANY(), element: <CompanyDetailPage /> },
];
