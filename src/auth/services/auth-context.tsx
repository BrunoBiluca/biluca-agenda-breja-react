import { createContext, useContext } from "react";
import type { AuthService } from "./auth-service";

export const AuthContext = createContext<AuthService | null>(null);

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

export const useAuth = () => useContext(AuthContext)!;
