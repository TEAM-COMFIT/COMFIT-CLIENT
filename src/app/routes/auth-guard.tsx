// src/shared/ui/auth-guard.tsx
import { Navigate, Outlet } from "react-router-dom";

import { useAuthStore } from "../store";

interface AuthGuardProps {
  type?: "private" | "guest";
}

const AuthGuard = ({ type = "private" }: AuthGuardProps) => {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  // 로그인이 되어있지 않은데 private 경로에 접근하는 경우 막음
  if (type === "private" && !isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  // 이미 로그인되어 있는데 guest 경로에 접근하는 경우 막음
  if (type === "guest" && isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default AuthGuard;
