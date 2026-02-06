import { createContext, useContext } from "react";
import type { AuthService } from "./auth-service";
import { appfac } from "@app/app-factory";

export const AuthContext = createContext<AuthService>(appfac.authService());

export function AuthServiceProvider({ children }: any) {
  return (
    <AuthContext.Provider value={appfac.authService()}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
