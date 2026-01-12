import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "./services/auth-context";

export function ProtectedRoute() {
  const auth = useAuth();
  const location = useLocation();

  return auth.getLoggedUser() !== null ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location.pathname }} />
  );
}
