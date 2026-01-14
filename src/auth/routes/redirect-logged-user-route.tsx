import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../services/auth-context";

export function RedirectLoggedUserRoute() {
  const auth = useAuth();
  const location = useLocation();

  return auth.getLoggedUser() === null ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace state={{ from: location.pathname }} />
  );
}
