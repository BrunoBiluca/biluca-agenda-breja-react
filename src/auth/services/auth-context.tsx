import { createContext, useContext } from "react";
import type { AuthService } from "./auth-service";
import { appfac } from "@app/app-factory";

export const AuthContext = createContext<AuthService>(appfac.authService());

export function AuthServiceProvider({
  children,
  authService,
}: {
  children: any;
  authService: AuthService;
}) {
  return (
    <AuthContext.Provider value={authService}>{children}</AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
