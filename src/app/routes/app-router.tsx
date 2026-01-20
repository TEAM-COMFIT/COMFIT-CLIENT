import { createBrowserRouter } from "react-router-dom";

import { NotFoundPage } from "@/pages/fallback/not-found-page";

import AuthGuard from "./auth-guard";
import { protectedRoutes } from "./protected-routes";
import { guestRoutes, publicRoutes } from "./public-routes";
import { RootLayout } from "./root-layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      ...publicRoutes,
      {
        element: <AuthGuard type="guest" />,
        children: [...guestRoutes],
      },
      {
        element: <AuthGuard type="private" />,
        children: [...protectedRoutes],
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
