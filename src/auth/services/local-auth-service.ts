import { AuthService } from "./auth-service";

export class LocalAuthService extends AuthService {
  signup(email: string, password: string, name: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  login(email: string, password: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  logout(): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
