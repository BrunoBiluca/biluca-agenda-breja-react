import { isStandalone } from "@app/app-config";
import { LocalAuthService } from "./local-auth-service";
import { SupabaseAuthService } from "./supabase-auth-service";
import { createContext, useContext } from "react";
import type { AuthService } from "./auth-service";

function authServiceFac() {
  return isStandalone() ? new LocalAuthService() : new SupabaseAuthService();
}

export const AuthContext = createContext<AuthService>(authServiceFac());

export const useAuth = () => useContext(AuthContext);
