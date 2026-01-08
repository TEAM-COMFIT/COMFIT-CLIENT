import { createBrowserRouter } from "react-router-dom";
import { publicRoutes } from "./public-routes";
import { protectedRoutes } from "./protected-routes";

export const router = createBrowserRouter([
  {
    path: "/",
    // element: <RootLayout />, TODO: RootLayout 추가
    children: [
      ...publicRoutes,

      // TODO: auth에 따른 처리 추가
      ...protectedRoutes,
      // TODO: paths 이외의 경로 접근 시 error 처리
    ],
  },
]);
