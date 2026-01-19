import { createContext, useContext } from "react";
import type { AuthService } from "./auth-service";
import { authServiceFac } from "@app/contexts/auth-service-fac";

export const AuthContext = createContext<AuthService>(authServiceFac());

export const useAuth = () => useContext(AuthContext);
