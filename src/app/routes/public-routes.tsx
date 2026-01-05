import { ROUTES } from "./paths";
import { LoginPage } from "@/pages/login/login-page";

export const publicRoutes = [
  { path: ROUTES.LOGIN, element: <LoginPage /> },
];
